import { useState, useEffect, useCallback, useRef } from 'react';
import type { MutableRefObject } from 'react';
import { formatTime } from '~/utils/formatters';

export interface ChatMessage {
  role: 'user' | 'ai';
  sender: string;
  message: string;
  avatar: string;
  time: string;
}

interface UseChatOptions {
  initialChats?: ChatMessage[];
  userAvatar?: string;
  aiAvatar?: string;
  userName?: string;
  aiName?: string;
}

interface UseChatReturn {
  chats: ChatMessage[];
  setChats: (chats: ChatMessage[]) => void;
  userMessage: string;
  setUserMessage: (message: string) => void;
  sendMessage: () => Promise<void>;
  error: string | null;
  isConnected: boolean;
  isLoading: boolean;
  isSending: boolean;
  chatContainerRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  hasUserSentFirstMessage: boolean;
}

const useChat = (options: UseChatOptions = {}): UseChatReturn => {
  const {
    initialChats = [],
    userAvatar = '/john.png',
    aiAvatar = '/sarah.png',
    userName = 'John',
    aiName = 'Sarah',
  } = options;

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [chats, setChats] = useState<ChatMessage[]>(initialChats);
  const [userMessage, setUserMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [hasUserSentFirstMessage, setHasUserSentFirstMessage] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const sendMessage = useCallback(async () => {
    if (!userMessage.trim() || !socket) return;

    try {
      setIsSending(true);

      // Clear initial chats if this is the first user message
      if (!hasUserSentFirstMessage) {
        setChats([]);
        setHasUserSentFirstMessage(true);
      }

      const newMessage: ChatMessage = {
        role: 'user',
        sender: userName,
        message: userMessage,
        avatar: userAvatar,
        time: formatTime(),
      };

      const message = userMessage;
      setUserMessage('');

      await new Promise((resolve) => setTimeout(resolve, 150));

      setChats((prev) => [...prev, newMessage]);
      setIsSending(false);
      setIsLoading(true);

      socket.send(message);

      if (inputRef.current) {
        inputRef.current.focus();
      }

      setError(null);
    } catch (err) {
      setError('Failed to send message');
      setIsSending(false);
      setIsLoading(false);
      console.error('Send message error:', err);
    }
  }, [userMessage, socket, userName, userAvatar, hasUserSentFirstMessage]);

  useEffect(() => {
    const ws = new WebSocket('wss://rag-chatbot-backend-production-b8f6.up.railway.app/');
    setSocket(ws);

    const handleOpen = () => {
      setIsConnected(true);
      setError(null);
      console.log('Socket connected');
    };

    const handleMessage = (event: MessageEvent) => {
      setIsLoading(false);
      const aiMessage: ChatMessage = {
        role: 'ai',
        sender: aiName,
        message: event.data,
        avatar: aiAvatar,
        time: formatTime(),
      };
      setChats((prev) => [...prev, aiMessage]);
    };

    const handleError = (err: Event) => {
      setIsConnected(false);
      setIsLoading(false);
      setError('Connection error');
      console.error('Socket error:', err);
    };

    const handleClose = () => {
      setIsConnected(false);
      setIsLoading(false);
      setError('Connection closed');
    };

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('error', handleError);
    ws.addEventListener('close', handleClose);

    return () => {
      ws.removeEventListener('open', handleOpen);
      ws.removeEventListener('message', handleMessage);
      ws.removeEventListener('error', handleError);
      ws.removeEventListener('close', handleClose);
      ws.close();
    };
  }, [aiName, aiAvatar]);

  return {
    chats,
    setChats,
    userMessage,
    setUserMessage,
    sendMessage,
    error,
    isConnected,
    isLoading,
    isSending,
    chatContainerRef,
    inputRef,
    hasUserSentFirstMessage,
  };
};

export default useChat;
