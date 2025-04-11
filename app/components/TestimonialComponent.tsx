import React from 'react';
import OutlineBox from './ui/OutlineBox';

// Client testimonial type
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  companyAvatar: string;
  socialIcons: string[];
}

// Feature info type
interface FeatureInfo {
  icon: string;
  title: string;
  description: string;
}

// Social icon component
const SocialIcon = ({ icon }: { icon: string }) => (
  <div className="w-8 h-8 rounded-full flex items-center justify-center">
    <img src={icon} alt="Social" className="w-6 h-6" />
  </div>
);

// Client profile card component
const ClientProfile = ({ client }: { client: Testimonial }) => (
  <div className="flex items-start space-x-4 py-6 px-4  rounded-lg bg-[#1F1F1F]">
    <img src={client.avatar} alt={client.name} className="w-10 h-10 rounded-ful " />
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-medium">{client.name}</h3>
          <p className="text-xs text-[#665F5F]">{client.position} • {client.company} {client.company === 'Google' && <img src={client.companyAvatar} alt={client.company} className="inline-block w-4 h-4"/>}</p>
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
  <div className="mb-4 ">
    <div className="flex items-center space-x-2 mb-1">
      <img src={feature.icon} alt={feature.title} className="w-4 h-4" />
      <span className="text-white text-sm">{feature.title}</span>
    </div>
    <p className="text-xs text-[#665F5F] ml-6 w-[15rem]">
      {feature.description}
    </p>
  </div>
);

const TestimonialComponent = () => {
  // Sample client data
  const clients: Testimonial[] = [
    {
      id: 1,
      name: 'Mark Witty',
      position: 'Chief Executive Officer',
      company: 'Google',
      avatar: '/man.png',
      companyAvatar: '/google.png',
      socialIcons: ['/facebook.png', '/youtube.png', '/zoom.png']
    },
    {
      id: 2,
      name: 'Mark Witty',
      position: 'Chief Executive Officer',
      company: 'Google',
      avatar: '/man.png',
      companyAvatar: '/google.png',
      socialIcons: ['/facebook.png', '/youtube.png', '/zoom.png']
    }
  ];

  // Feature data for left box
  const featuresLeft = [
    {
      icon: '/framer.png',
      title: 'Few well known clients',
      description: 'From deployments to tasks, work with your team every step of the way.'
    },
 
  ];

  // Feature data for right box
  const featuresRight = [
    {
      icon: '/framer.png',
      title: 'Collaborate everything',
      description: 'From deployments to tasks, work with your team every step of the way.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
      {/* Left Section - Client Testimonials */}
      <OutlineBox className="lg:col-span-1">
        {/* Client Profiles */}
        <div className="space-y-1 mb-8">
          {clients.map(client => (
            <ClientProfile key={client.id} client={client} />
          ))}
        </div>
        
       
        
        {/* Features for left box */}
        <div className="p-6 mt-8">
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
          <div className="flex mt-10 justify-center mb-5">
            <img src="/framer-black.png" alt="Cost" className="w-5 h-5 mr-2" />
            <h2 className="text-[#665F5F] text-lg">Cost Client Saved</h2>
          </div>
          
          <div className="text-3xl font-bold text-white text-center mt-2 mb-6">
            $482,000
          </div>
          
          {/* Features for right box */}
          <div className="mt-16  border-[#1F1F1F] pt-6">
            {featuresRight.map((feature, index) => (
              <FeatureBox key={index} feature={feature} />
            ))}
          </div>
        </div>
      </OutlineBox>
    </div>
  );
};

export default TestimonialComponent; 