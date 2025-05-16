import { AnimatePresence, motion } from 'framer-motion';
import { aeChatData } from '~/data/chatData';
import useChat from '~/hooks/useChat';
import { formatTime } from '~/utils/formatters';
import BgImage from './BgImage';
import AnimatedLine from './ui/AnimatedLine';
import Box from './ui/Box';
import Heading from './ui/Heading';
import Section from './ui/Section';

// Define animations as constants for reuse
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
    // <div className="mb-2 flex items-start space-x-2">
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
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={fadeInUp.transition}
    >
      {messageContent}
    </motion.div>
  );
};

const LoadingIndicator = () => (
  <motion.div
    className="flex items-center space-x-1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="h-2 w-2 rounded-full bg-gray-400"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1, repeatType: 'loop', times: [0, 0.5, 1] }}
    />
    <motion.div
      className="h-2 w-2 rounded-full bg-gray-400"
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
      className="h-2 w-2 rounded-full bg-gray-400"
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

const OrbitalAnimation = () => (
  <div className="relative aspect-square w-full">
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Orbital circles */}
      <div className="animate-spin-slow absolute h-full w-full rounded-full border border-gray-800" />
      <div className="animate-spin-slower absolute h-4/5 w-4/5 rounded-full border border-gray-800" />
      <div className="absolute h-3/5 w-3/5 animate-spin rounded-full border border-gray-800" />

      {/* Center play button */}
      <div className="z-10 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 p-4">
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Orbital dots */}
      <div className="absolute h-full w-full animate-spin">
        <div className="absolute top-0 left-1/2 h-2 w-2 rounded-full bg-pink-500" />
      </div>
    </div>
  </div>
);

const CollaborationChatBot = () => {
  const {
    chats,
    userMessage,
    setUserMessage,
    sendMessage,
    isLoading,
    isSending,
    chatContainerRef,
    inputRef,
    hasUserSentFirstMessage,
  } = useChat({
    initialChats: aeChatData,
    userAvatar: '/john.png',
    aiAvatar: '/sarah.png',
    userName: 'Winston',
    aiName: 'Sarah',
  });

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Section className="!overflow-visible" divClass="!overflow-visible relative pt-50 xl:pt-60">
      <div className="mb-16">
        <Heading className="pb-1">Collaboration and shipping software faster</Heading>
        <p className="mt-4 font-medium text-[#665F5F]">
          The most complete experience for businesses & individual clients
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chat Section - Takes up 2 columns */}
        <Box className="lg:col-span-2">
          {/* Chat Header */}
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

          {/* Chat Messages and Input Container */}
          {/* <div className="relative mt-2 mb-4 flex max-h-[27rem] min-h-[27rem] !w-full flex-col overflow-hidden rounded-[0.625rem] bg-[#0B0C0D] p-3"> */}
          <Box.Inner className="relative mt-14 flex max-h-[31rem] min-h-[31rem] !w-full flex-col overflow-hidden rounded-3xl p-3.5 !pt-0">
            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="scrollbar-hide !w-full flex-1 space-y-0 overflow-y-auto scroll-smooth px-4 pt-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                maxHeight: 'calc(32rem - 4rem)', // Subtract input height and padding
              }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scroll-smooth {
                    scroll-behavior: smooth;
                  }
                `,
                }}
              />

              <AnimatePresence mode="popLayout">
                {chats.map((chat, index) => (
                  <ChatMessage
                    key={index}
                    time={chat.time}
                    sender={chat.sender}
                    message={chat.message}
                    avatar={chat.avatar}
                    animate={index === chats.length - 1}
                  />
                ))}
                Show LinearCard only during static chat
                {/* {!hasUserSentFirstMessage && chats.length >= 2 && <LinearCard />} */}
                {/* Loading indicator */}
                {isLoading && (
                  <motion.div
                    className="mb-1 flex items-start space-x-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src="/sarah.png" alt="Sarah" className="h-5 w-5 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-white">Sarah</span>
                        <span className="text-xs text-[#665F5F]">{formatTime()}</span>
                      </div>
                      <LoadingIndicator />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chat Input - Fixed at bottom */}
            <div className="sticky bottom-0 -mx-4 px-4 py-3">
              <motion.div
                className={`flex flex-1 items-center justify-between rounded-lg bg-[#101112] px-3 py-1 ${isLoading ? 'opacity-90' : ''}`}
                animate={{
                  scale: isSending ? 0.98 : 1,
                  opacity: isSending ? 0.9 : isLoading ? 0.9 : 1,
                  y: isSending ? 10 : 0,
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
                  {/* <div className="rounded-lg border-[0.1125rem] border-[#1F1F1F] px-1.5 py-[0.05rem]">
                    <span className="bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-xs text-transparent">
                      GIF
                    </span>{' '}
                  </div> */}
                  <motion.img
                    src="/send.png"
                    alt="Send"
                    className={`mr-2 h-5 w-5 cursor-pointer ${isLoading ? 'opacity-50' : ''}`}
                    onClick={isLoading ? undefined : () => sendMessage()}
                    whileHover={isLoading ? {} : { scale: 1.1 }}
                    whileTap={isLoading ? {} : { scale: 0.9 }}
                  />
                </div>
              </motion.div>
            </div>
          </Box.Inner>
        </Box>

        {/* Services Section */}
        <Box>
          <div className="m-8">
            <img src="/story.png" alt="Add" className="mr-2 h-8 w-8" />
            <h2 className="mt-3.5 text-lg font-semibold">Services Orbiting Covinfinity</h2>
            <p className="mt-1 text-[13px] text-[#665F5F]">
              From deployments to tasks, work with your team every step of the way.
            </p>
          </div>
          <img src="/orbit-2.png" alt="Add" className="h-[26.6rem] w-full" />
        </Box>
      </div>

      {/* Animated Lines */}
      <AnimatedLine
        heightRem="11.35rem"
        widthRem="19.8rem"
        className="!absolute -top-4 -left-54 hidden xl:block"
      />
      <AnimatedLine
        heightRem="10rem"
        widthRem="19.8rem"
        className="!absolute -top-4 -left-54 xl:hidden"
      />
      <AnimatedLine heightRem="7.5rem" widthRem="15.7rem" className="!absolute -top-4 left-44" />

      {/* BG Lines, Effects */}
      <BgImage
        src="section-lines/chatbot-v2.png"
        className="top-10 !left-1/2 mx-auto -ml-1.5 hidden h-[calc(100%+10rem)] w-[calc(100%+2rem)] !-translate-x-1/2 !bg-contain md:block"
      />
    </Section>
  );
};

export default CollaborationChatBot;
