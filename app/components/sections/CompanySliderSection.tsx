import AvatarGroup from '../AvatarGroup';
import CompanySlider from '../CompanySlider';
import React from 'react';

interface CompanySliderSectionProps {
  role?: string;
}

const CompanySliderSection: React.FC<CompanySliderSectionProps> = ({ role }) => {
  return (
    <section>
      {role !== 'service' && (
        <div className="mb-14 text-center">
          <h3 className="mx-auto max-w-[33rem] bg-gradient-to-br from-[#EBF5FF]/32 to-[#EBF5FF]/24 bg-clip-text text-center text-base font-medium text-transparent">
            Trusted by the world's most innovative companies and talents to build and join powerful
            things with AI best experience ever
          </h3>
        </div>
      )}
      <CompanySlider />
      {role !== 'service' && (
        <div className="mt-14">
          <AvatarGroup />
        </div>
      )}

      {/* <CompanySliderRight />
      <CompanySliderLeft /> */}
    </section>
  );
};

export default CompanySliderSection;
