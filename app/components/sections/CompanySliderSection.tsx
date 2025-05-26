import AvatarGroup from '../AvatarGroup';
import CompanySlider from '../CompanySlider';

const CompanySliderSection = () => {
  return (
    <section>
      <div className="mb-14 text-center">
        <h3 className="mx-auto max-w-[33rem] bg-gradient-to-br from-[#EBF5FF]/32 to-[#EBF5FF]/24 bg-clip-text text-center text-base font-medium text-transparent">
         Our platform is relied upon by top companies and academic institutions to develop a workforce of highly skilled, pre-vetted global talent that drives business success.

        </h3>
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
