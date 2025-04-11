import React from 'react';
import CompanySliderLeft from '../CompanySliderLeft';
import CompanySliderRight from '../CompanySliderRight';
import Section from '../ui/Section';

const CompanySliderSection = () => {
  return (
    <section className="mt-14">
      <div className="mb-12 text-center">
        <h2 className="mx-auto max-w-3xl text-center text-lg font-light text-white/80">
          Trusted by the world's most innovative companies and talents to build and join powerful
          things with AI best experience ever
        </h2>
      </div>
      <CompanySliderRight />
      <CompanySliderLeft />
    </section>
  );
};

export default CompanySliderSection;
