import BgImage from './BgImage';
import AnimatedLine from './ui/AnimatedLine';
import Heading from './ui/Heading';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';

export const ChatMessage = ({
  time,
  sender,
  message,
  avatar,
}: {
  time: string;
  sender: string;
  message: string;
  avatar: string;
}) => (
  <div className="mb-1 flex items-start space-x-2">
    <img src={avatar} alt={sender} className="h-5 w-5 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <span className="text-xs text-white">{sender}</span>
        <span className="text-xs text-[#665F5F]">{time}</span>
      </div>
      <p className="mt-0.5 text-xs text-[13px] text-[#A3A3A3]">{message}</p>
    </div>
  </div>
);

const LinearCard = () => (
  <div className="my-4 ml-4.5 rounded-lg border-[0.1125rem] border-[#1F1F1F] bg-[rgba(26,23,23,0.48)] py-2">
    <div className="mb-2 flex items-center space-x-2 border-b border-[#1F1F1F]">
      <div className="mb-2 flex items-center space-x-2 px-2">
        <img src="/plus-icon.png" alt="Linear" className="h-4 w-4" />
        <span className="text-sm text-white">Linear</span>
      </div>
      <img src="/ai-arrow.png" alt="Close" className="mr-2 mb-2 ml-auto h-4 w-4" />
    </div>
    <div className="mt-1.5 ml-2 space-y-1.5">
      <p className="text-[13px] font-medium text-[#A3A3A3]">
        Asana for project management, and I can set up a shared workspace for us
      </p>
      <p className="text-[13px] text-[#665F5F]">
        everything set up by the end of the day and send you an update
      </p>
    </div>
    <div className="mt-3 flex items-center border-t border-[#1F1F1F] text-[11px] text-[#665F5F]">
      <div className="mt-1 ml-2 flex items-center">
        <span>iOS-21</span>
        <span className="mx-1.5">•</span>
        <img src="/framer-black.png" alt="iOS" className="mr-[0.1rem] h-3 w-3" />
        <span>Mobile</span>
        <span className="mx-1.5">•</span>
      </div>
      <div className="mt-0.5 flex items-center space-x-1">
        <img src="/sarah.png" alt="Sarah" className="h-3 w-3 rounded-full" />
        <span>Sarah</span>
      </div>
    </div>
  </div>
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
  return (
    <Section divClass="relative pt-60">
      <div className="mb-16">
        <Heading className="pb-1">Collaboration and shipping software faster</Heading>
        <p className="mt-4 font-medium text-[#665F5F]">
          The most complete experience for businesses & individual clients
        </p>
      </div>
      {/* Main Content Grid */}
      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* <div className="absolute -top-16 -right-12 z-0 h-28 w-[55rem] rounded-xl border-y border-r border-gray-700 opacity-20" /> */}

        {/* Chat Section - Takes up 2 columns */}
        <OutlineBox animated className="lg:col-span-2">
          {/* Chat Header */}
          <div className="ml-10 p-5">
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
          <OutlineBox className="mt-2 mb-4 bg-[rgba(26,23,23,0.48)]">
            {/* Messages */}
            <div className="max-w-[35rem] space-y-0 px-4 pt-2 max-sm:max-w-[calc(100%-2rem)]">
              <ChatMessage
                time="2:14 PM"
                sender="John"
                message="Thanks, Sarah. I appreciate your responsiveness and support. Looking forward to seeing these changes in action!"
                avatar="/john.png"
              />
              <ChatMessage
                time="2:15 PM"
                sender="Sarah"
                message="too! Let's touch base at the end of the week to make sure everything is running smoothly. Have a great day!"
                avatar="/sarah.png"
              />
              <LinearCard />
              <ChatMessage
                time="2:14 PM"
                sender="John"
                message="I'll coordinate with them to make sure they're available for your next brainstorming session. Is there anything else on your mind"
                avatar="/john.png"
              />
              <div className="flex items-start space-x-3">
                <img src="/john.png" alt="John" className="h-5 w-5 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-white">John</span>
                    <span className="text-xs text-[#665F5F]">2:14 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="-mx-4 flex items-center px-4 py-0.5">
              <div className="flex flex-1 items-center justify-between rounded-lg bg-[#1A1A1A] px-3 py-1">
                <div className="flex flex-1 items-center">
                  <img src="/chat-plus.png" alt="Add" className="mr-2 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Message to Sarah"
                    className="flex-1 bg-transparent text-[13px] text-white placeholder-[#665F5F] focus:outline-none"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg border-[0.1125rem] border-[#1F1F1F] px-1.5 py-[0.05rem]">
                    <span className="bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-xs text-transparent">
                      GIF
                    </span>{' '}
                  </div>
                  <img src="/thumb.png" alt="Add" className="mr-2 h-5 w-5" />
                </div>
              </div>
            </div>
          </OutlineBox>
        </OutlineBox>

        {/* Services Section */}
        <OutlineBox animated>
          <div className="m-8">
            <img src="/story.png" alt="Add" className="mr-2 h-8 w-8" />
            <h2 className="mt-3.5 text-lg font-semibold">Services Orbiting Covinfinity</h2>
            <p className="mt-1 text-[13px] text-[#665F5F]">
              From deployments to tasks, work with your team every step of the way.
            </p>
          </div>
          <img src="/orbit.png" alt="Add" className="h-[26.6rem] w-full" />
        </OutlineBox>
      </div>

      {/* Animated Lines */}
      <AnimatedLine heightRem="11.35rem" widthRem="19.8rem" className="!absolute -top-4 -left-54" />
      <AnimatedLine heightRem="7.5rem" widthRem="15.7rem" className="!absolute -top-4 left-44" />

      {/* BG Lines, Effects */}
      <BgImage
        src="section-lines/chatbot.png"
        className="top-10 !left-1/2 mx-auto -ml-1.5 size-full w-[calc(100%+4.8rem)] !-translate-x-1/2 !bg-contain"
      />
    </Section>
  );
};

export default CollaborationChatBot;
