'use client';

import type { FC } from 'react';
import { useState } from 'react';
import BgImage from './BgImage';
import { ChatMessage } from './CollaborationChatBot';
import Box from './ui/Box';
import Heading from './ui/Heading';
import Section from './ui/Section';
import { ServiceCards } from './ui/ServiceCards';

// Type definitions

interface FormStage {
  field: 'name' | 'email' | 'message';
  placeholder: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

// ContactForm component
const ContactForm: FC<{
  formStage: number;
  formStages: FormStage[];
  formData: FormData;
  isFormCompleted: boolean;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  generateMessageTemplate: () => string;
  getCurrentTime: () => string;
}> = ({
  formStage,
  formStages,
  formData,
  isFormCompleted,
  inputValue,
  handleInputChange,
  handleFormSubmit,
  generateMessageTemplate,
  getCurrentTime,
}) => (
    <div className="relative">
      {/* Display submitted data as a chat message without wrapper div */}
      {formData.name && (
        <ChatMessage
          sender={formData.name}
          message={generateMessageTemplate()}
          time={getCurrentTime()}
          avatar="/john.png"
        />
      )}

      {/* Success message after form completion */}
      {isFormCompleted ? (
        <div className="mt-4 rounded-lg bg-[#1A1A1A]/60 p-3 text-left">
          <p className="text-sm text-[#A3A3A3]">
            Thanks for reaching out! We've received your information and will be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center rounded-lg bg-[#101112] p-4">
            <div className="flex flex-1 items-center text-sm font-medium text-[#EBF5FF]">
              <img src="/smile-2.png" alt="Add" className="mr-2 size-6 object-contain" />
              <input
                type={formStages[formStage].field === 'email' ? 'email' : 'text'}
                value={inputValue}
                onChange={handleInputChange}
                placeholder={formStages[formStage].placeholder}
                className="flex-1 bg-transparent text-sm text-white placeholder-[#EBF5FF] focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button type="submit">
                <img src="/send-2.png" alt="Submit" className="size-6 object-contain" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );

// SkillButton component
const SkillButton: FC<{ label: string }> = ({ label }) => (
  <button className="rounded-full bg-[#0F1012] px-6 py-2.5">{label}</button>
);

// ImageBox component
const ImageBox: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Box className="!h-[16.25rem] !p-0">
    <img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" />
  </Box>
);

// Constants
const SKILLS = ['Frontend Dev', 'Backend Dev', 'UI/UX Design'];

const FORM_STAGES: FormStage[] = [
  {
    field: 'name',
    placeholder: "Hey! What's your name?",
    label: 'Name',
  },
  {
    field: 'message',
    placeholder: 'Nice to meet you! What can we help you with today?',
    label: 'Message',
  },
  {
    field: 'email',
    placeholder: "Great! What's your email address so we can reach out?",
    label: 'Email',
  },
];

export default function ServicesSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  // Contact form state
  const [formStage, setFormStage] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Track if form is completed
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  // Generate a professional message template from the form data
  const generateMessageTemplate = () => {
    if (!formData.name) return '';

    let template = `Hi there! I'm ${formData.name}.`;

    if (formData.message) {
      template += ` I'm interested in discussing ${formData.message}.`;
    }

    if (formData.email) {
      template += ` You can reach me at ${formData.email}.`;
    }

    return template;
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submission for current stage
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Update form data with current input
    const currentField = FORM_STAGES[formStage].field;
    setFormData({
      ...formData,
      [currentField]: inputValue,
    });

    // Move to next stage or complete form if done
    if (formStage < FORM_STAGES.length - 1) {
      setFormStage(formStage + 1);
    } else {
      // Mark form as completed
      setIsFormCompleted(true);
      // Form complete logic would go here (e.g., API submission)
    }

    // Clear input for next field
    setInputValue('');
  };

  // Get current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Section divClass="relative pt-[8rem] lg:pt-[10.5rem] xl:pt-[11.5rem]" className="-mt-4">
      <BgImage
        src="section-lines/talent-section-lines.png"
        // className="-top-22 left-1/2 h-[calc(100%+6rem)] w-[calc(100%+6rem)] -translate-x-1/2 bg-top"
        className="!top-0 left-1/2 -z-10 h-[58rem] !bg-contain w-[calc(100%+4.5rem)] -translate-x-1/2 bg-top"
      />

      <div className="text-white">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Heading
            blockText=" Digital Solutions"
            className="!mb-4 !pb-2 !font-sans !font-semibold"
          >
            Your Partner in Building Smart 
          </Heading>
          <p className="mb-4 bg-gradient-to-br from-[#EBF5FF]/64 to-[#EBF5FF]/54 bg-clip-text text-base text-[1rem] font-medium tracking-[0.02em]">
          Equipping businesses and clients to thrive digitally with smart integrations and solutions.

          </p>
        </div>

        {/* Main Content Wrapped in OutlineBox */}
        <Box className="!pt-8">
          {/* Digital Solution Section */}
          <div className="">
            <div className="headin-section mb-8 flex flex-col items-center justify-center text-center">
              <img src="/service-icon.png" alt="icon" className="size-12 object-contain" />

              <h2 className="text-xl font-semibold">Co-Ventech Digital Solutions</h2>
              <p className="text-lg font-medium">Fintech, Healthcare, E-commerce, and More...</p>
            </div>

            {/* Service Cards */}
            <ServiceCards />
            {/* Developer Section */}

            <Box.Inner className="mx-auto max-w-full !p-3">
              <div className="text-content-form p-4">
                <h3 className="mb-2 text-lg font-semibold">Hey! Tell us all the things 👋</h3>
                <p className="mb-6 w-[40rem] text-sm text-[#665F5F]">
                  John is a front-end developer skilled in HTML, CSS, JavaScript, React, and Vue.js.
                  He creates clean, highly-maintainable, tested UI layouts, and loves open source.
                </p>
                <div className="mb-7 flex gap-3">
                  {SKILLS.map((label, index) => (
                    <SkillButton key={index} label={label} />
                  ))}
                </div>
              </div>
              <ContactForm
                formStage={formStage}
                formStages={FORM_STAGES}
                formData={formData}
                isFormCompleted={isFormCompleted}
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                generateMessageTemplate={generateMessageTemplate}
                getCurrentTime={getCurrentTime}
              />
            </Box.Inner>
          </div>
        </Box>
        {/* Clutch Reviews Section */}
        <div className="mt-8 flex w-full items-center justify-between gap-4">
          <ImageBox src="/blue-hunt.png" alt="blue hunt" />
          <ImageBox src="/red-hunt.png" alt="red hunt" />
        </div>
      </div>
    </Section>
  );
}
