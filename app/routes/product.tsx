import type { FC } from 'react';
import ProductShowcaseImages from '~/components/ProductShowcaseImages';
import DropdownMenu from '~/components/DropdownMenu';
import Navbar from '~/components/Navbar';
import CardGridSection from '~/components/sections/CardGrid';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/case-studies';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Covinfinity | Custom Software Development Company in USA' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions',
    },
  ];
}

const ImageBox: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Box className="!h-[16.25rem] w-full !p-0">
    <img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
  </Box>
);

export default function CaseStudies() {
  return (
    <MainLayout>
      <div className="case-studies ">
         <Navbar />
        <div className="text-center mt-12 z-10">
          <div  className='w-2xl flex mb-6 items-center justify-center mx-auto'>
            {/* Left line */}
             <div 
              className="h-px flex-grow"
              style={{
                background: 'linear-gradient(to left, transparent, #252729)'
              }}
            ></div>
           
          <img
            src="/recruitinn-logo.png"
            alt="Recruitinn Logo"
            className="mx-auto mb-4  mt-4 pt-0.5 w-[200px] h-[1.7rem]"
          />
            {/* Right line */}
            <div 
              className="h-px flex-grow"
              style={{
                background: 'linear-gradient(to right, transparent, #252729)'
              }}
            ></div>
            </div>
            
            <Heading
            className="!from-[#FFFFFF] !to-[#CCCCCC] pb-6 font-serif text-[2.5rem] font-semibold text-transparent sm:text-5xl md:text-[3.5rem] xl:text-[4.2rem]"
          >
            Recruitinn Heading Title Can be <br /> Anything XYZ upto You
          </Heading>
          <p className="mx-auto my-4 max-w-[45rem] font-serif text-base font-medium sm:text-lg md:mb-6 md:text-[1.2rem]"
            style={{ lineHeight: '110%' }}>
            Some body text goes here can add whatever you want as body text maybe a description and
            for whom this project is for idk it’s just a placeholder
          </p>
          <div  className="mb-6 flex justify-center md:mb-8">
         <button
          className="px-6 py-3 rounded-xl font-medium text-white transition flex items-center gap-2"
          style={{
            background: "linear-gradient(90deg, #16181A 31%, #0F1011 100%)",
            boxShadow: `
              0 -10px 48px 0 rgba(234, 117, 255, 0.25),
              0 10px 48px 0 rgba(112, 174, 255, 0.26)
            `,
            position: "relative",
            zIndex: 10,
          }}
        >
          <img src="/rocket.png" alt="rocket Icon" className="w-4 h-4 mr-1.5" />
        <span className='bg-gradient-to-br from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent'>
          Launch Project
        </span>
        </button>
        </div>
      </div>

     
        
       
      </div>
      <ProductShowcaseImages className="pointer-events-none " />

      <Section className="second-section mt-[27rem]">
        
      
      
        <div className="mx-auto mt-12 flex items-center justify-center p-4 !px-0 md:mt-24 md:p-6">
          <div className="mx-auto text-center">
           
            {/* Clutch Reviews Section */}
            <div className="flex w-full items-center justify-between gap-4">
              <ImageBox src="/blue-hunt.png" alt="blue hunt" />
              <ImageBox src="/red-hunt.png" alt="red hunt" />
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
