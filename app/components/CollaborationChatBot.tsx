import React from 'react';
import OutlineBox from './ui/OutlineBox';

const ChatMessage = ({ time, sender, message, avatar }: { time: string; sender: string; message: string; avatar: string }) => (
  <div className="flex items-start space-x-2 mb-1">
    <img src={avatar} alt={sender} className="w-5 h-5 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <span className="text-xs text-white">{sender}</span>
        <span className="text-xs text-[#665F5F]">{time}</span>
      </div>
      <p className="text-[13px] text-xs text-[#A3A3A3] mt-0.5">{message}</p>
    </div>
  </div>
);

const LinearCard = () => (
  
  <div className="bg-[rgba(26,23,23,0.48)]  border-[0.1125rem] border-[#1F1F1F] rounded-lg ml-4.5 py-2 my-4">
    <div className="flex items-center border-b border-[#1F1F1F] space-x-2 mb-2">
      <div className="flex items-center px-2 mb-2 space-x-2">
        <img src="/plus-icon.png" alt="Linear" className="w-4 h-4" />
        <span className="text-sm text-white">Linear</span>
      </div>
      <img src="/ai-arrow.png" alt="Close" className="w-4 h-4 ml-auto mr-2 mb-2" />
    </div>
    <div className="space-y-1.5 mt-1.5 ml-2">
      <p className="text-[13px] text-[#A3A3A3] font-medium">
        Asana for project management, and I can set up a shared workspace for us
      </p>
      <p className="text-[13px] text-[#665F5F]">
        everything set up by the end of the day and send you an update
      </p>
    </div>
    <div className="flex items-center border-t border-[#1F1F1F] mt-3 text-[11px] text-[#665F5F]">
      <div className="flex  ml-2 mt-1 items-center">
        <span>iOS-21</span>
        <span className="mx-1.5">•</span>
        <img src="/framer-black.png" alt="iOS" className="w-3 h-3 mr-[0.1rem]" />
        <span>Mobile</span>
        <span className="mx-1.5">•</span>
      </div>
      <div className="flex items-center mt-0.5 space-x-1">
        <img src="/sarah.png" alt="Sarah" className="w-3 h-3 rounded-full" />
        <span>Sarah</span>
      </div>
    </div>
  </div>
);

const OrbitalAnimation = () => (
  <div className="relative w-full aspect-square">
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Orbital circles */}
      <div className="absolute w-full h-full border border-gray-800 rounded-full animate-spin-slow" />
      <div className="absolute w-4/5 h-4/5 border border-gray-800 rounded-full animate-spin-slower" />
      <div className="absolute w-3/5 h-3/5 border border-gray-800 rounded-full animate-spin" />
      
      {/* Center play button */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-full z-10">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      
      {/* Orbital dots */}
      <div className="absolute w-full h-full animate-spin">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-pink-500 rounded-full" />
      </div>
    </div>
  </div>
);

const CollaborationChatBot = () => {
  return (
    <div className="text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-white mb-4">
            Collaboration and shipping{' '}
            <span className="bg-gradient-to-r from-[#FF6981] to-purple-400 bg-clip-text text-transparent">
              software faster
            </span>
          </h1>
          <p className="text-[#665F5F]">The most complete experience for businesses & individual clients</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Section - Takes up 2 columns */}
          <OutlineBox className="lg:col-span-2 " animated>
            {/* Chat Header */}
            <div className="p-5 ml-10 animated ">
              <div className=" space-y-3 mt-3 w-[21rem]">
                  <img src="/chart.png" alt="Add" className="w-8.5 h-8.5 mr-2" />
                <div>
                  <h2 className="text-lg font-semibold">Collaboration between AE & Client</h2>
                  <p className="text-[13px] text-[#665F5F] mt-1">From deployments to tasks, work with your team every step of the way.</p>
                </div>
              </div>
            </div>

            {/* Chat Messages and Input Container */}
            <OutlineBox className="mb-4 mt-2 bg-[rgba(26,23,23,0.48)]">
              {/* Messages */}
              
              <div className="px-4 pt-2 space-y-0 max-w-[35rem] ">
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
                <div className="flex items-start space-x-3 ">
                  <img src="/john.png" alt="John" className="w-5 h-5 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-white">John</span>
                      <span className="text-xs text-[#665F5F]">2:14 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center -mx-4  px-4 py-0.5">
                <div className="flex-1 flex items-center justify-between bg-[#1A1A1A] rounded-lg px-3 py-1">
                  <div className="flex items-center flex-1">
                    <img src="/chat-plus.png" alt="Add" className="w-5 h-5 mr-2" />
                    <input
                      type="text"
                      placeholder="Message to Sarah"
                      className="flex-1 bg-transparent text-[13px] text-white focus:outline-none placeholder-[#665F5F]"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className=" border-[0.1125rem] border-[#1F1F1F] rounded-lg px-1.5 py-[0.05rem]">
                    <span className="text-xs bg-gradient-to-r from-[#FF6981] to-white bg-clip-text   text-transparent">GIF</span> </div>
                    <img src="/thumb.png" alt="Add" className="w-5 h-5 mr-2" />
                  </div>
                </div>
              </div>
            </OutlineBox>
          </OutlineBox>

          {/* Services Section */}
          <OutlineBox animated>
            <div className="m-8">
              <img src="/story.png" alt="Add" className="w-8 h-8 mr-2" />
              <h2 className="text-lg mt-3.5  font-semibold">Services Orbiting Covinfinity</h2>
              <p className="text-[13px] text-[#665F5F] mt-1">
                From deployments to tasks, work with your team every step of the way.
              </p>
            </div>
            <img src="/orbit.png" alt="Add" className="w-96 h-[26.6rem] " />
          </OutlineBox>
        </div>
      </div>
    </div>
  );
};

export default CollaborationChatBot;
