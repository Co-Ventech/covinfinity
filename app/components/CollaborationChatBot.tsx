import { motion } from 'framer-motion';
import { useChatContext } from '~/contexts/ChatContext';
import BgImage from './BgImage';
import ChatPanel from './ChatPanel';
import OrbitalSystem from './OrbitalSystem';
import AnimatedLine from './ui/AnimatedLine';
import Box from './ui/Box';
import { GradientOverlay } from './ui/GradientOverlay';
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

export default function CollaborationChatBot() {
  const {
    activeChat,
    setActiveChat,
    dummyConvos,
    userConvo,
    sendUserMessage,
    isLiveChat,
    isLoading,
    error,
  } = useChatContext();

  console.log('CollaborationChatBot render:', {
    activeChat,
    isLiveChat,
    userConvo,
    dummyConvos: dummyConvos?.length,
    isLoading,
    error
  });

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
          <ChatPanel
            activeChat={activeChat}
            dummyConvos={dummyConvos}
            userConvo={userConvo}
            sendUserMessage={sendUserMessage}
            isLiveChat={isLiveChat}
            isLoading={isLoading}
            error={error}
            setActiveChat={setActiveChat}
          />
        </Box>
        {/* Services Section (Orbit UI) */}
        <Box className='relative !overflow-hidden'>
          <div className="m-8">
            <img src="/story.png" alt="Add" className="mr-2 h-8 w-8" />
            <h2 className="mt-3.5 text-lg font-semibold">Services Orbiting Covinfinity</h2>
            <p className="mt-1 text-[13px] text-[#665F5F]">
              From deployments to tasks, work with your team every step of the way.
            </p>
          </div>
          <OrbitalSystem
            className='h-[47.5rem] -bottom-36 w-[calc(100%+20rem)] mt-14 absolute left-1/2 -translate-x-1/2'
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            isLiveChat={isLiveChat}
          />
          {/* Overlays */}
          <GradientOverlay
            direction="r"
            from="background-body"
            to="background-body/0"
            className="!w-[7.625rem] !top-[unset] !bottom-0 !h-[calc(100%-10rem)]"
          />
          <GradientOverlay
            direction="r"
            from="background-body/0"
            to="background-body"
            className="!w-[7.625rem] !top-[unset] !left-[unset] !right-0 !bottom-0 !h-[calc(100%-10rem)]"
          />
          <GradientOverlay
            direction="b"
            from="background-body/0"
            to="background-body"
            className="!h-[7.625rem] !top-[unset] !bottom-0"
          />
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
        className="top-10 !left-1/2 -z-10 mx-auto -ml-1.5 hidden h-[calc(100%+10rem)] w-[calc(100%+2rem)] !-translate-x-1/2 !bg-contain md:block"
      />
    </Section>

  );
}
