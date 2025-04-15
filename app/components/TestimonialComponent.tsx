import React, { useState, useEffect } from 'react';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';

// Client testimonial type
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  companyAvatar: string;
  socialIcons: string[];
  costSaved: number;
}

// Feature info type
interface FeatureInfo {
  icon: string;
  title: string;
  description: string;
}

// Social icon component
const SocialIcon = ({ icon }: { icon: string }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full">
    <img src={icon} alt="Social" className="h-6 w-6" />
  </div>
);

// Client profile card component
const ClientProfile = ({ client, isActive, onClick }: { client: Testimonial; isActive: boolean; onClick: () => void }) => (
  <div 
    className={`flex items-start space-x-4 rounded-lg ${isActive ? 'bg-[#2A2A2A]' : 'bg-[#1F1F1F]'} px-4 py-6 cursor-pointer transition-colors duration-300`}
    onClick={onClick}
  >
    <img src={client.avatar} alt={client.name} className="rounded-full h-12 w-12" />
    <div className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-white ">{client.name}</h3>
          <p className="text-xs text-[#665F5F] space-x-1">
            {client.position} • {client.company}{' '}
            {client.company === 'Google' && (
              <img
                src={client.companyAvatar}
                alt={client.company}
                className="inline-block h-4 w-4"
              />
            )}
          </p>
        </div>
        <div className="flex space-x-2">
          {client.socialIcons.map((icon, index) => (
            <SocialIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Feature box component
const FeatureBox = ({ feature }: { feature: FeatureInfo }) => (
  <div className="mb-4">
    <div className="mb-1 flex items-center space-x-2">
      <img src={feature.icon} alt={feature.title} className="h-4 w-4" />
      <span className="text-sm text-white">{feature.title}</span>
    </div>
    <p className="ml-6 w-[15rem] text-xs text-[#665F5F]">{feature.description}</p>
  </div>
);

// Animated counter component
const AnimatedCounter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    // Animate the counter from current to target value
    let startValue = displayValue;
    const endValue = value;
    const duration = 1000; // 1 second animation
    const startTime = performance.now();
    
    const animateValue = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
      setDisplayValue(currentValue);
      
      if (runtime < duration) {
        requestAnimationFrame(animateValue);
      }
    };
    
    requestAnimationFrame(animateValue);
  }, [value]);
  
  return (
    <div className="transition-all duration-500 cost-glow">
      ${displayValue.toLocaleString()}
    </div>
  );
};

const TestimonialComponent = () => {
  const [activeClientId, setActiveClientId] = useState(1);
  
  // Sample client data
  const clients: Testimonial[] = [
    {
      id: 1,
      name: 'Mark Witty',
      position: 'Chief Executive Officer',
      company: 'Google',
      avatar: '/man.png',
      companyAvatar: '/google.png',
      socialIcons: ['/facebook.png', '/youtube.png', '/zoom.png'],
      costSaved: 482000,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'Google',
      avatar: '/sarah.png',
      companyAvatar: '/google.png',
      socialIcons: ['/facebook.png', '/youtube.png', '/zoom.png'],
      costSaved: 326000,
    },
   
  ];

  // Auto-cycle through clients
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClientId(prevId => {
        // Find the index of current active client
        const currentIndex = clients.findIndex(client => client.id === prevId);
        // Calculate next index (loop back to 0 if at the end)
        const nextIndex = (currentIndex + 1) % clients.length;
        // Return the id of the next client
        return clients[nextIndex].id;
      });
    }, 5000); // Change active client every 5 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [clients.length]);

  // Get current active client
  const activeClient = clients.find(client => client.id === activeClientId) || clients[0];

  // Feature data for left box
  const featuresLeft = [
    {
      icon: '/framer.png',
      title: 'Few well known clients',
      description: 'From deployments to tasks, work with your team every step of the way.',
    },
  ];

  // Feature data for right box
  const featuresRight = [
    {
      icon: '/framer.png',
      title: 'Collaborate everything',
      description: 'From deployments to tasks, work with your team every step of the way.',
    },
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Section - Client Testimonials */}
        <OutlineBox className="lg:col-span-1">
          {/* Client Profiles */}
          <div className="mb-8  space-y-1">
            {clients.map((client) => (
              <ClientProfile 
                key={client.id} 
                client={client} 
                isActive={client.id === activeClientId}
                onClick={() => setActiveClientId(client.id)}
              />
            ))}
          </div>

          {/* Features for left box */}
          <div className="mt-8 p-6">
            {featuresLeft.map((feature, index) => (
              <FeatureBox key={index} feature={feature} />
            ))}
          </div>
        </OutlineBox>

        {/* Right Section - Cost Savings */}
        <OutlineBox className="relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F] to-[#211B1B]"></div>

          {/* Content */}
          <div className="relative p-6">
            <div className="mt-10 mb-5 flex justify-center items-center">
              <img src="/framer-black.png" alt="Cost" className="mr-2 h-5 w-5" />
              <h2 className="text-lg text-[#665F5F]">Cost Client Saved</h2>
              <div className="ml-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>

           
              {/* Counter text */}
              <div className="relative text-center py-10  text-4xl font-bold">
                <AnimatedCounter value={activeClient.costSaved} />
              </div>
              <div className="relative h-full">
  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl text-xl font-bold text-gray-200">
    420000
  </div>
</div>

           
          

            {/* Features for right box */}
            <div className="mt-1 border-t border-[#1F1F1F] pt-6">
              {featuresRight.map((feature, index) => (
                <FeatureBox key={index} feature={feature} />
              ))}
            </div>
          </div>
        </OutlineBox>
      </div>
    </Section>
  );
};

export default TestimonialComponent;
