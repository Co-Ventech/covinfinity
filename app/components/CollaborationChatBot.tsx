import React from 'react';
import OutlineBox from './ui/OutlineBox';

const ChatMessage = ({ time, sender, message, avatar }: { time: string; sender: string; message: string; avatar: string }) => (
  <div className="flex items-start space-x-2">
    <img src={avatar} alt={sender} className="w-6 h-6 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-white">{sender}</span>
        <span className="text-xs text-[#665F5F]">{time}</span>
      </div>
      <p className="text-[13px] text-gray-300 mt-0.5">{message}</p>
    </div>
  </div>
);

const LinearCard = () => (
  <div className="bg-[#1A1A1A] rounded-lg p-3 my-3 border border-[#1F1F1F]">
    <div className="flex items-center space-x-2">
      <img src="/plus-icon.png" alt="Linear" className="w-4 h-4" />
      <span className="text-sm text-white">Linear</span>
    </div>
    <p className="text-[13px] text-gray-400 mt-1.5">
      Asana for project management, and I can set up a shared workspace for us
    </p>
    <div className="flex items-center space-x-2 mt-2 text-xs text-[#665F5F]">
      <span>iOS-21</span>
      <span>•</span>
      <span>Mobile</span>
      <span>•</span>
      <div className="flex items-center space-x-1">
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
    <div className=" text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
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
          <OutlineBox className="lg:col-span-2">
            {/* Chat Header */}
            <div className="p-4 border-b border-[#1F1F1F]">
              <div className="w-[22rem]">
                <img src="/chart.png" alt="" className="mt-3 h-8 w-8" />
                <div className="mt-2">
                  <h2 className="text-base font-medium">Collaboration between AE & Client</h2>
                  <p className="text-[13px] text-[#665F5F] mt-1">From deployments to tasks, work with your team every step of the way.</p>
                </div>
              </div>
            </div>

            {/* Chat Messages and Input Container */}
            <OutlineBox className="m-4 bg-[#141414]">
              {/* Messages */}
              <div className="space-y-4 mb-4">
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
                <div className="flex items-start space-x-2">
                  <img src="/john.png" alt="John" className="w-6 h-6 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-white">John</span>
                      <span className="text-xs text-[#665F5F]">2:14 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-4 pt-4 border-t border-[#1F1F1F]">
                <div className="flex items-center space-x-2 px-1">
                  <div className="flex-1 flex items-center bg-[#1A1A1A] rounded-xl px-3 py-2">
                    <img src="/chat-plus.png" alt="Add" className="w-5 h-5 mr-2" />
                    <input
                      type="text"
                      placeholder="Message to Sarah"
                      className="flex-1 bg-transparent text-[13px] text-white focus:outline-none placeholder-[#665F5F]"
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="text-sm border-[0.1125rem] border-[#1F1F1F] bg-[#665F5F]
                     px-3 py-2 rounded-xl  bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent">
                      GIF
                    </button>
                    <button className="text-sm bg-[#1A1A1A] px-3 py-2 rounded-xl text-[#665F5F] hover:bg-[#222]">
                      👆
                    </button>
                  </div>
                </div>
              </div>
            </OutlineBox>
          </OutlineBox>

          {/* Services Section */}
          <OutlineBox>
            <div className="mb-6">
              <h2 className="text-base font-medium">Services Orbiting Covinfinity</h2>
              <p className="text-[13px] text-[#665F5F] mt-1">
                From deployments to tasks, work with your team every step of the way.
              </p>
            </div>
            <OrbitalAnimation />
          </OutlineBox>
        </div>
      </div>
    </div>
  );
};

export default CollaborationChatBot;
