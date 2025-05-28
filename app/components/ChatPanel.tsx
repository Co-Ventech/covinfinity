import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { formatTime } from '~/utils/formatters';
import Box from './ui/Box';

const springTransition = {
  type: 'spring',
  stiffness: 120,
  damping: 10,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ...springTransition },
};

export const ChatMessage = ({
  time,
  sender,
  message,
  avatar,
  animate = false,
}: {
  time: string;
  sender: string;
  message: string;
  avatar: string;
  animate?: boolean;
}) => {
  const messageContent = (
    <div className="mb-4 flex max-w-[43.75em] items-start gap-3">
      <img src={avatar} alt={sender} className="h-10 w-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-serif text-lg font-semibold text-white">{sender}</span>
          <span className="text-xs text-[#665F5F]">{time}</span>
        </div>
        <p className="text-medium mt-1 text-[#A3A3A3]">{message}</p>
      </div>
    </div>
  );
  if (!animate) return messageContent;
  return (
    <motion.div initial={fadeInUp.initial} animate={fadeInUp.animate} transition={fadeInUp.transition}>
      {messageContent}
    </motion.div>
  );
};

const LoadingIndicator = () => (
  <motion.div
    className="flex items-center space-x-1.5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="h-2.5 w-2.5 rounded-full bg-[#A3A3A3]"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1, repeatType: 'loop', times: [0, 0.5, 1] }}
    />
    <motion.div
      className="h-2.5 w-2.5 rounded-full bg-[#A3A3A3]"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        repeat: Infinity,
        duration: 1,
        repeatType: 'loop',
        times: [0, 0.5, 1],
        delay: 0.2,
      }}
    />
    <motion.div
      className="h-2.5 w-2.5 rounded-full bg-[#A3A3A3]"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        repeat: Infinity,
        duration: 1,
        repeatType: 'loop',
        times: [0, 0.5, 1],
        delay: 0.4,
      }}
    />
  </motion.div>
);

export default function ChatPanel({
  activeChat,
  dummyConvos,
  userConvo,
  sendUserMessage,
  isLiveChat,
  isLoading,
  error,
  setActiveChat,
}: any) {
  const [userMessage, setUserMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update chat selection logic and add logging
  const chats = isLiveChat ? userConvo : (dummyConvos[activeChat] || []);

  console.log('ChatPanel render:', {
    isLiveChat,
    activeChat,
    userConvo,
    chats,
    isLoading
  });

  // Force scroll to bottom when chats update
  useEffect(() => {
    console.log('Scrolling to bottom, chats length:', chats.length);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    console.log('Sending message:', userMessage, 'isLiveChat:', isLiveChat);
    if (!isLiveChat) {
      console.log('Switching to live chat');
      setActiveChat(-1); // Switch to live chat
    }
    sendUserMessage(userMessage);
    setUserMessage('');
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      <div className="ml-10 p-5 !pb-0">
        <div className="mt-3 w-[21rem] space-y-3 max-sm:w-[calc(100%-3rem)]">
          <img src="/chart.png" alt="Add" className="mr-2 h-8.5 w-8.5" />
          <div>
            <h2 className="text-lg font-semibold">Collaboration between AE & Client</h2>
            <p className="mt-1 text-[13px] text-[#665F5F]">
              From deployments to tasks, work with your team every step of the way.
            </p>
          </div>
        </div>
      </div>

      <Box.Inner className="relative mt-14 flex max-h-[31rem] min-h-[31rem] !w-full flex-col overflow-hidden rounded-3xl p-3.5 !pt-0">
        <div
          ref={chatContainerRef}
          className="scrollbar-hide !w-full flex-1 space-y-0 overflow-y-auto scroll-smooth px-4 pt-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            maxHeight: 'calc(32rem - 4rem)',
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .scrollbar-hide::-webkit-scrollbar { display: none; }
              .scroll-smooth { scroll-behavior: smooth; }
              `,
            }}
          />
          <AnimatePresence mode="popLayout">
            {chats.map((chat: any, index: number) => {
              console.log('Rendering chat message:', chat);
              return (
                <ChatMessage
                  key={index}
                  time={chat.time}
                  sender={chat.sender}
                  message={chat.message}
                  avatar={chat.avatar}
                  animate={index === chats.length - 1}
                />
              );
            })}
            {isLoading && (
              <motion.div
                className="mb-4 flex max-w-[43.75em] items-start gap-3 animate-pulse"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/sarah.png" alt="Sarah" className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif text-lg font-semibold text-white">Sarah</span>
                    <span className="text-xs text-[#665F5F]">{formatTime()}</span>
                  </div>
                  <div className="mt-1">
                    <LoadingIndicator />
                  </div>
                </div>
              </motion.div>
            )}
            {error && (
              <motion.div
                className="mb-1 text-sm text-red-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="sticky bottom-0 -mx-4 px-4 py-3">
          <motion.div
            className={`flex flex-1 items-center justify-between rounded-lg bg-[#101112] px-3 py-1 ${isLoading ? 'opacity-90' : ''}`}
            animate={{
              scale: isLoading ? 0.98 : 1,
              opacity: isLoading ? 0.9 : 1,
              y: isLoading ? 10 : 0,
              border: isLoading
                ? '1px solid rgba(100, 100, 100, 0.2)'
                : '1px solid transparent',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.2,
            }}
          >
            <div className="flex flex-1 items-center bg-[#101112] py-2.5">
              <img src="/smile.png" alt="Add" className="mr-2 h-5 w-5" />
              <input
                ref={inputRef}
                type="text"
                placeholder={isLoading ? 'Sarah is thinking...' : 'Message to Sarah'}
                className={`flex-1 bg-transparent text-[13px] text-white placeholder-[#EBF5FF]/30 transition-opacity duration-200 focus:outline-none ${isLoading ? 'opacity-60' : ''}`}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center space-x-3">
              <motion.img
                src="/send.png"
                alt="Send"
                className={`mr-2 h-5 w-5 cursor-pointer ${isLoading ? 'opacity-50' : ''}`}
                onClick={isLoading ? undefined : () => handleSendMessage()}
                whileHover={isLoading ? {} : { scale: 1.1 }}
                whileTap={isLoading ? {} : { scale: 0.9 }}
              />
            </div>
          </motion.div>
        </div>
      </Box.Inner>
    </>
  );
} 