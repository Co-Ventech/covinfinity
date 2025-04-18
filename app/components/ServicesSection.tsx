'use client';

import { useState } from 'react';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';
import Heading from './ui/Heading';
import { ChatMessage } from './CollaborationChatBot';

export default function ServicesSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  // Contact form state
  const [formStage, setFormStage] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Track if form is completed
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  // Form stages configuration
  const formStages = [
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
    const currentField = formStages[formStage].field;
    setFormData({
      ...formData,
      [currentField]: inputValue,
    });

    // Move to next stage or complete form if done
    if (formStage < formStages.length - 1) {
      setFormStage(formStage + 1);
    } else {
      // Mark form as completed
      setIsFormCompleted(true);
      // Form complete logic would go here (e.g., API submission)
      console.log('Form submitted:', { ...formData, [currentField]: inputValue });
    }

    // Clear input for next field
    setInputValue('');
  };

  // Get current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const serviceCards = [
    {
      id: 0,
      title: 'Quality Assurance',
      subtitle: 'Something qa line goes here',
      description: 'Title goes here',
      image: '/phone-mockup.png',
    },
    {
      id: 1,
      title: 'Quality Assurance',
      subtitle: 'Something qa line goes here',
      description: 'Title goes here',
      image: '/phone-mockup.png',
    },
    {
      id: 2,
      title: 'Quality Assurance',
      subtitle: 'Something qa line goes here',
      description: 'Title goes here',
      image: '/phone-mockup.png',
    },
  ];

  return (
    <Section>
      <div className="text-white">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-base font-medium tracking-[0.02em] text-[#797B8A]">
            The most complete experience for businesses & individual clients
          </p>
          <Heading
            blockText="something goes here"
            className="!mb-16 !pb-1 !font-sans !font-semibold"
          >
            Services digital solution
          </Heading>
        </div>

        {/* Main Content Wrapped in OutlineBox */}
        <OutlineBox className="!rounded-3xl !border-[#31292A] !p-4">
          {/* Video Controls Section */}
          <div className="mt-20 mb-3 ml-11 flex items-center gap-4">
            <div className="h-24 w-40">
              <img
                src="/services-icon.png"
                alt="blue hunt"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Digital Solution Section */}
          <div className="mb-6">
            <div className="mb-7 flex items-center justify-between">
              <div className="ml-11">
                <h2 className="text-xl font-semibold">Digital solution we do too</h2>
                <p className="text-base font-medium text-[#665F5F]">
                  Fintech, Category, New Category
                </p>
              </div>
              <div className="flex gap-2">
                <button className="h-8 w-8">
                  <img src="/left-arrow.png" alt="left arrow" className="h-full w-full" />
                </button>
                <button className="h-8 w-8">
                  <img src="/right-arrow.png" alt="right arrow" className="h-full w-full" />
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div
              className="w-full rounded-3xl border border-[#272525] bg-[#1A1717]/48 bg-center p-6 lg:bg-cover"
              style={{
                backgroundImage: "url('/service-back.png')",
              }}
            >
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {serviceCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`group relative h-[420px] cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                      activeCard === index
                        ? 'border-[#2E2928] bg-[#2E2929]/48'
                        : 'border-[#212121] bg-[#0F0F0F]'
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    {/* Phone Image - Full Height */}
                    <div className="absolute inset-0 left-1/3 h-full w-[60%]">
                      <img
                        src={card.image}
                        alt="phone mockup"
                        className={`h-full w-full object-contain transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-40'}`}
                        style={{
                          objectPosition: 'center 15%',
                        }}
                      />
                    </div>

                    {/* Dark Overlay Gradient */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-25% ${activeCard === index ? 'from-[#1C1818] to-[#1C1818]/0' : 'from-[#1A1919] to-[#19191A]/0'}`}
                    ></div>

                    {/* Text Content Section - Bottom */}
                    <div className="absolute right-0 bottom-0 left-0 z-10 flex items-end justify-between p-6">
                      <div>
                        <p className="mb-2 font-medium text-[#665F5F]">{card.subtitle}</p>
                        <h3
                          className={`text-xl font-semibold transition-colors duration-300 ${activeCard === index ? 'text-white' : 'text-[#A3A3A3]'}`}
                        >
                          {card.title}
                        </h3>
                        {/* <p className="text-sm text-[#665F5F]"> */}
                        <p
                          className={`text-xl font-semibold transition-colors duration-300 ${activeCard === index ? 'text-white' : 'text-[#A3A3A3]'}`}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* Plus Button */}
                      <button
                        className={`flex h-8 w-8 items-center justify-center self-end rounded-full transition-all duration-300 ${
                          activeCard === index ? 'bg-white/20' : 'bg-white/5'
                        }`}
                      >
                        <span className="text-xl text-white">+</span>
                      </button>
                    </div>

                    {/* Active Card Highlight Effect */}
                    {activeCard === index && (
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6981]/5 to-transparent opacity-50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Developer Section */}

              <div className="bg-[#1A1717]/ 48 mx-auto max-w-full rounded-lg border border-[#2E2928] p-6 backdrop-blur-[3.125rem]">
                <h3 className="mb-2 text-lg font-semibold">Hey! Tell us all the things 👋</h3>
                <p className="mb-6 w-[40rem] text-sm text-[#665F5F]">
                  John is a front-end developer skilled in HTML, CSS, JavaScript, React, and Vue.js.
                  He creates clean, highly-maintainable, tested UI layouts, and loves open source.
                </p>
                <div className="mb-10 flex gap-3">
                  {['Frontend Dev', 'Backend Dev', 'UI/UX Design'].map((label, index) => (
                    <button
                      key={index}
                      className="rounded-full border-[0.1125rem] border-[#252122] bg-none px-6 py-2.5 text-[#A4A4A4]"
                    >
                      {label}
                    </button>
                  ))}
                </div>
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
                        Thanks for reaching out! We've received your information and will be in
                        touch soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      <div className="flex items-center rounded-lg border border-[#2E2928] bg-[#1A1818] p-1.5">
                        <div className="flex flex-1 items-center text-sm font-medium text-[#3A3131]">
                          <img src="/input-icon.png" alt="Add" className="mr-2 h-7 w-8" />
                          <input
                            type={formStages[formStage].field === 'email' ? 'email' : 'text'}
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder={formStages[formStage].placeholder}
                            className="flex-1 bg-transparent text-[13px] text-white placeholder-[#665F5F] focus:outline-none"
                            autoFocus
                          />
                        </div>
                        <div className="flex items-center space-x-3">
                          <button type="submit">
                            <img src="/pen-icon.png" alt="Submit" className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Clutch Reviews Section */}

          <div className="flex w-full items-center justify-between gap-4">
            <div className="h-[16.25rem] rounded-2xl border border-[#2E2928]">
              <img
                src="/blue-hunt.png"
                alt="blue hunt"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="h-[16.25rem] rounded-2xl border border-[#2E2928]">
              <img
                src="/red-hunt.png"
                alt="red hunt"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </OutlineBox>
      </div>
    </Section>
  );
}
