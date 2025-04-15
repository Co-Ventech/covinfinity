import AvatarGroup from '../AvatarGroup';
import CompanySlider from '../CompanySlider';

const CompanySliderSection = () => {
  return (
    <section className="mt-14 mb-60">
      <div className="mb-14 text-center">
        <h2 className="mx-auto max-w-[33rem] text-center text-base font-medium text-[#C3C3C3]">
          Trusted by the world's most innovative companies and talents to build and join powerful
          things with AI best experience ever
        </h2>
      </div>
      <CompanySlider />
      <div className="mt-14">
        <AvatarGroup />
      </div>

      {/* <CompanySliderRight />
      <CompanySliderLeft /> */}
    </section>
  );
};

export default CompanySliderSection;
