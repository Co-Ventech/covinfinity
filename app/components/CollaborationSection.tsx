import React from 'react';

const ChatMessage = ({
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
  <div className="flex items-start space-x-3 p-4">
    <img src={avatar} alt={sender} className="h-8 w-8 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <span className="font-medium text-white">{sender}</span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <p className="mt-1 text-gray-300">{message}</p>
    </div>
  </div>
);

const LinearCard = () => (
  <div className="my-4 rounded-lg border border-gray-800 bg-[#1A1A1A] p-4">
    <div className="flex items-center space-x-2">
      <img src="/chart.png" alt="Linear" className="h-5 w-5" />
      <span className="font-medium text-white">Linear</span>
    </div>
    <p className="mt-2 text-sm text-gray-400">
      Asana for project management, and I can set up a shared workspace for us
    </p>
    <div className="mt-3 flex items-center space-x-3 text-xs text-gray-500">
      <span>iOS-21</span>
      <span>•</span>
      <span>Mobile</span>
      <span>•</span>
      <div className="flex items-center space-x-1">
        <img src="/sarah-avatar.png" alt="Sarah" className="h-4 w-4 rounded-full" />
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

const CollaborationSection = () => {
  return (
    <div className="min-h-screen bg-[#111111] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Collaboration and shipping{' '}
            <span className="bg-gradient-to-r from-[#FF6981] to-purple-400 bg-clip-text text-transparent">
              software faster
            </span>
          </h1>
          <p className="text-[#665F5F]">
            The most complete experience for businesses & individual clients
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Chat Section - Takes up 2 columns */}
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#1A1A1A] lg:col-span-2">
            {/* Chat Header */}
            <div className="border-b border-gray-800 p-6">
              <div className="w-[22rem]">
                <img src="/chart.png" alt="" className="mt-5 h-8 w-8" />
                <div>
                  <h2 className="text-lg font-semibold">Collaboration between AE & Client</h2>
                  <p className="text-sm text-gray-400">
                    From deployments to tasks, work with your team every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[400px] space-y-4 overflow-y-auto p-4">
              <ChatMessage
                time="2:14 PM"
                sender="John"
                message="Thanks, Sarah. I appreciate your responsiveness and support. Looking forward to seeing these changes in action!"
                avatar="/james.png"
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
                avatar="/james.png"
              />
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-800 p-4">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Message to Sarah"
                  className="flex-1 rounded-xl bg-[#222222] px-4 py-3 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
                <button className="flex items-center space-x-2 rounded-xl bg-[#222222] px-4 py-3 hover:bg-[#2a2a2a]">
                  <span>GIF</span>
                  <span>👆</span>
                </button>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="rounded-2xl border border-gray-800 bg-[#1A1A1A] p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Services Orbiting Covinfinity</h2>
              <p className="mt-2 text-sm text-gray-400">
                From deployments to tasks, work with your team every step of the way.
              </p>
            </div>
            <OrbitalAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
