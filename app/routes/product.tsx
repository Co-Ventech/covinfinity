import { useCallback, type FC } from 'react';
import { useParams } from 'react-router';
import Navbar from '~/components/Navbar';
import ProductShowcaseImages from '~/components/ProductShowcaseImages';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import { PRODUCTS } from '~/data/productData';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/case-studies';
import { Slider } from '~/components/ui/Slider';
import { ScrollAccordion } from '~/components/ui/ScrollAccordion';

// Add BoxTopContent component
interface BoxTopContentProps {
  heading: string;
  text: string;
}

const BoxTopContent: FC<BoxTopContentProps> = ({ heading, text }) => {
  return (
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-medium">{heading}</h3>
      <p className="text-base text-[#878D93]">{text}</p>
    </div>
  );
};

// Add type for product data
type ProductData = {
  name: string;
  slug: string;
  link: string;
  heading: string;
  subheading: string;
  showcaseImage: string;
};

// Add logo mapping
const PRODUCT_LOGOS: Record<string, string> = {
  recruitinn: '/logo-recruitinn.png',
  skillbuilder: '/logo-skillbuilder.png',
  covental: '/covental.png'
};

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

export default function Product() {
  const { slug } = useParams();
  const productData = PRODUCTS.find((product) => product.slug.match(slug!));

  const onLaunchProject = useCallback(() => {
    window.location.href = productData?.link!;
  }, [productData]);

  return (
    <MainLayout>
      <div className="case-studies">
        <Navbar />
        <div className="z-10 mt-12 text-center">
          <div className="mx-auto mb-6 flex w-2xl items-center justify-center">
            {/* Left line */}
            <div
              className="h-px flex-grow"
              style={{
                background: 'linear-gradient(to left, transparent, #252729)',
              }}
            ></div>

            <div className="mx-auto mt-4 mb-4 flex items-center justify-center">
              <img
                src={PRODUCT_LOGOS[slug!] || '/recruitinn-logo.png'}
                alt={`${productData?.name} Logo`}
                className="h-[1.7rem] w-[30px] pt-0.5"
              />
              <span className="ml-4 text-2xl font-semibold text-white">
                {productData?.name}
              </span>
            </div>
            {/* Right line */}
            <div
              className="h-px flex-grow"
              style={{
                background: 'linear-gradient(to right, transparent, #252729)',
              }}
            ></div>
          </div>

          <Heading
            className="!from-[#FFFFFF] !to-[#CCCCCC] pb-6 font-serif text-[2.5rem] font-semibold text-transparent sm:text-5xl md:text-[3.5rem] xl:text-[4.2rem] max-w-[65rem] mx-auto"
          >
            {productData?.heading?.split('\n')[0]}
            <br />
            {productData?.heading?.split('\n')[1]}
          </Heading>
          <p
            className="mx-auto my-4 max-w-[45rem] font-serif text-base font-medium sm:text-lg md:mb-6 md:text-[1.2rem]"
            style={{ lineHeight: '110%' }}
          >
            {/* Some body text goes here can add whatever you want as body text maybe a description and
            for whom this project is for idk it's just a placeholder */}
            {productData?.subheading}
          </p>
          <div className="mb-6 flex justify-center md:mb-8">
            <button
              onClick={onLaunchProject}
              className="flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition"
              style={{
                background: 'linear-gradient(90deg, #16181A 31%, #0F1011 100%)',
                boxShadow: `
              0 -10px 48px 0 rgba(234, 117, 255, 0.25),
              0 10px 48px 0 rgba(112, 174, 255, 0.26)
            `,
                position: 'relative',
                zIndex: 10,
              }}
            >
              <img src="/rocket.png" alt="rocket Icon" className="mr-1.5 h-4 w-4" />
              <span className="bg-gradient-to-br from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent">
                Launch Project
              </span>
            </button>
          </div>
        </div>
      </div>
      <ProductShowcaseImages className="pointer-events-none" />

      <Section className="page-3-section pt-5 ">
        <Heading className="pb-3 lg:!text-7xl" blockText={productData?.text}>
          {productData?.headingone?.split('\n')[0]}
        </Heading>
        <p className="my-6 max-w-[45rem] font-serif text-xl font-medium">
          {productData?.subheadingone}
        </p>
        <button
          onClick={onLaunchProject}
          className="flex cursor-pointer rounded bg-gradient-to-r from-[#1F2224] to-[#16181A] to-70% px-5 py-2.5 font-medium transition hover:opacity-90"
        >
          <span className="bg-gradient-to-r from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent">
          Category Tag
          </span>
        </button>
      </Section>

      <div className="showcase-image-container !pointer-events-none relative h-[30rem] md:h-[35rem] lg:h-[43rem] xl:h-[55rem]">
        <img
          src={productData?.showcaseImage}
          alt={`${productData?.heading?.split('\n')[0]} Dashboard`}
          className="pointer-events-none absolute -top-[3rem] md:-top-20 md:-left-8 lg:-top-[7rem] lg:left-0 xl:-top-36 2xl:-top-[8rem] 2xl:-right-8 2xl:left-[unset]"
        />
        <GradientOverlay
          direction="t"
          from="background-body from-30%"
          via="background-body/80 via-40%"
          to="background-body/0 to-100%"
          position="absolute"
          inset="right-0 -bottom-[26.3rem]"
          size="h-[35.375rem] w-full"
        />
        <GradientOverlay
          direction="r"
          from="background-body/0"
          via="background-body/80"
          to="background-body"
          position="absolute"
          inset="-top-40 right-[1rem] md:right-[-3rem]"
          size="h-[calc(100%+10rem)] w-96"
          className="origin-right skew-x-22 transform"
        />
      </div>

      <Section className='mt-16'>
      <Heading className="pb-3 !text-center lg:!text-6xl" blockText={productData?.text}>
      {productData?.headingtwo}
        </Heading>
        <p className="mx-auto my-6 max-w-[46.875rem] text-center font-serif text-xl font-medium">
          {productData?.subheading}
        </p>
        <div className="  mt-16 grid grid-cols-1 grid-rows-[1fr_0.5fr_0.5fr] gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[1.5fr_1fr]">
          <Box className="relative overflow-hidden p-8 md:col-span-1 md:row-span-2">
            <BoxTopContent
              heading={`About ${productData?.name || 'Product'}`}
              text={productData?.productdescription || ''}
            />
            <div className="image-wrapper relative max-h-[34rem]">
              <img
                src={productData?.showcaseImage}
                alt={`${productData?.name} Overview`}
                className="cursor-poin max--w-[calc(100%+23rem)] pointer-events-none relative top-8 left-4 min-w-[calc(100%+23rem)] object-cover"
              />
            </div>
            <GradientOverlay
              position="absolute"
              inset="-bottom-50 -left-12"
              size="h-[373px] w-[calc(100%+15rem)]"
              className="!bg-background-body blur-3xl"
            />
          </Box>
          <Box className="relative max-h-[23.4375rem] overflow-hidden md:col-start-2">
            <BoxTopContent
              heading="Tech Stack & Achievements"
              text={productData?.techstack}
            />
            <div className="pl-5">
              <Slider className="mt-8 mb-14 divide-x-8">
                {[
                  { name: 'React', image: '/logo-tech.png' },
                  { name: 'Node.js', image: '/logo-tech-1.png' },
                  { name: 'MongoDB', image: '/logo-tech.png' },
                  { name: 'AWS', image: '/logo-tech-1.png' }
                ].map((tech) => (
                  <Slider.Item key={tech.name} className="mx-4 flex items-center justify-center">
                    <img src={tech.image} alt={tech.name} className="size-20" />
                  </Slider.Item>
                ))}
              </Slider>
              <p className="no-color text-sm font-medium text-[#878D93]">
                Duration: <span className="text-white">2+ years</span>
              </p>
            </div>
            <GradientOverlay
              direction="l"
              from="background-body"
              to="background-body/0"
              position="absolute"
              inset="right-0 bottom-0"
              size="h-full w-[7.625rem]"
              className="pointer-events-none"
            />
          </Box>

          <Box className="relative z-10 max-h-[23.4375rem] overflow-hidden md:col-start-2 md:row-start-2">
            <BoxTopContent
              heading="Market Impact"
              text={productData?.marketimpact}
            />
            <p className="no-color absolute bottom-4 left-8 mt-auto text-sm font-medium text-[#878D93]">
              Location: <span className="text-white">Global</span>
            </p>

            <img
              src="/case-study-globe.png"
              alt={`${productData?.name}'s global presence`}
              className="absolute -right-[5.1875rem] -bottom-[11.5rem] -z-[2] xl:-bottom-72"
            />
            <GradientOverlay
              direction="l"
              from="background-body"
              to="background-body/0"
              position="absolute"
              inset="right-0 bottom-0"
              size="h-full w-[7.625rem]"
              className="pointer-events-none"
            />
          </Box>
        </div>
      </Section>

        {/* ScrollAccordion with case study solutions */}
    <ScrollAccordion
        items={productData.solutions}
        title="Solutions & Impact"
        blockText="Key Achievements"
      />

      <Section>
        <div className="flex items-center justify-center mt-40">
      <img src="/CoventechFlower.png" alt="CoventechFlower" className="h-[4.4rem] w-[5.4rem]" />
      </div>
      <Heading className="pb-3 !text-center lg:!text-6xl mt-12" blockText="Development by Coventech ">
        Award Winning Design - Development 
        </Heading>
        <p className="mx-auto my-6 max-w-[46.875rem] text-center font-serif text-xl font-medium">
        Coventech is a team of award-winning designers and developers who are passionate about creating beautiful and functional websites.
        </p>
        </Section>

      <Section className="second-section mt-[2rem]">
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