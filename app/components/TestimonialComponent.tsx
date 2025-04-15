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
const ClientProfile = ({ client }: { client: Testimonial }) => (
  <div className="flex items-start space-x-4 rounded-lg bg-[#1F1F1F] px-4 py-6">
    <img src={client.avatar} alt={client.name} className="rounded-ful h-10 w-10" />
    <div className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-white">{client.name}</h3>
          <p className="text-xs text-[#665F5F]">
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
      socialIcons: ['/facebook.png', '/youtube.png', '/zoom.png'],
    },
    {
      id: 2,
      name: 'Mark Witty',
      position: 'Chief Executive Officer',
      company: 'Google',
      avatar: '/man.png',
      companyAvatar: '/google.png',
      socialIcons: ['/facebook.png', '/youtube.png', '/zoom.png'],
    },
  ];
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
          <div className="mb-8 space-y-1">
            {clients.map((client) => (
              <ClientProfile key={client.id} client={client} />
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
            <div className="mt-10 mb-5 flex justify-center">
              <img src="/framer-black.png" alt="Cost" className="mr-2 h-5 w-5" />
              <h2 className="text-lg text-[#665F5F]">Cost Client Saved</h2>
            </div>
            <div className="mt-2 mb-6 text-center text-3xl font-bold text-white">$482,000</div>
            {/* Features for right box */}
            <div className="mt-16 border-[#1F1F1F] pt-6">
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