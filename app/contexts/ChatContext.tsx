import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { aeChatData } from '~/data/chatData';

export type ChatMessage = {
  role: 'user' | 'ai';
  sender: string;
  message: string;
  avatar: string;
  time: string;
};

interface ChatContextType {
  activeChat: number; // -1 for live chat, 0+ for dummy
  setActiveChat: (n: number) => void;
  dummyConvos: ChatMessage[][];
  userConvo: ChatMessage[];
  sendUserMessage: (msg: string) => void;
  isLiveChat: boolean;
  isLoading: boolean;
  error: string | null;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeChat, setActiveChat] = useState<number>(0); // Start in dummy chat mode
  const [userConvo, setUserConvo] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const pendingMessageRef = useRef<string | null>(null);

  const isLiveChat = activeChat === -1;

  // For orbital UI, we want to show index 5 when in live chat mode
  const orbitalActiveIndex = isLiveChat ? 5 : activeChat;

  // Initialize WebSocket connection
  const initWebSocket = useCallback((messageToSend?: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      // If already connected and we have a message, send it
      if (messageToSend) {
        socketRef.current.send(messageToSend);
      }
      return;
    }
    const ws = new WebSocket(import.meta.env.VITE_CHATBOT_WS_URL);
    socketRef.current = ws;

    // Store message to send after connection if provided
    if (messageToSend) {
      pendingMessageRef.current = messageToSend;
    }

    ws.onopen = () => {
      setError(null);
      // Send pending message if exists
      if (pendingMessageRef.current) {
        ws.send(pendingMessageRef.current);
        pendingMessageRef.current = null;
      }
    };

    ws.onmessage = (event) => {
      setIsLoading(false);
      setUserConvo((prev) => {
        const newConvo = [...prev, {
          role: 'ai' as const,
          sender: 'Sarah',
          message: event.data,
          avatar: '/sarah.png',
          time: new Date().toLocaleTimeString(),
        }];
        return newConvo;
      });
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setError('Connection error');
      setIsLoading(false);
      pendingMessageRef.current = null;
    };

    ws.onclose = () => {
      setError('Connection closed');
      setIsLoading(false);
      socketRef.current = null;
      pendingMessageRef.current = null;
    };
  }, []);

  const sendUserMessage = useCallback((msg: string) => {
    if (!msg.trim()) return;

    // Always add the message to userConvo immediately
    const newMessage = {
      role: 'user' as const,
      sender: 'You',
      message: msg,
      avatar: '/john.png',
      time: new Date().toLocaleTimeString(),
    };

    setUserConvo((prev) => {
      const newConvo = [...prev, newMessage];
      return newConvo;
    });

    // If not in live chat, switch to it
    if (!isLiveChat) {
      setActiveChat(-1);
    }

    setIsLoading(true);
    setError(null);

    // Initialize WebSocket with the message if not connected
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      initWebSocket(msg);
      return;
    }

    // If already connected, send immediately
    socketRef.current.send(msg);
  }, [isLiveChat, activeChat, initWebSocket]);

  // Cleanup WebSocket on unmount
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, []);

  const contextValue = {
    activeChat: orbitalActiveIndex,
    setActiveChat,
    dummyConvos: aeChatData,
    userConvo,
    sendUserMessage,
    isLiveChat,
    isLoading,
    error,
  };

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
};

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
