import WhyText from "./WhyText";

const WhySection = () => {
  return (
    <section className="relative min-h-[720px] md:min-h-[800px] lg:min-h-[900px] flex items-center justify-center px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#f9fafc]">
      {/* Background Gradient */}
      <div
        className="absolute left-0 top-0 w-full h-[330px] md:h-[400px] lg:h-[500px]"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 375 330.14" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(2.1454e-16 33.014 -33.014 -1.2526e-15 187.5 0)"><stop stop-color="rgba(228,241,255,1)" offset="0"/><stop stop-color="rgba(255,255,255,0)" offset="1"/></radialGradient></defs></svg>\')',
        }}
      />

      <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex bg-[#fefefe] border border-[#2d7bf2] rounded-full px-[25px] md:px-8 lg:px-10 py-[12px] md:py-3 lg:py-4 mb-[49px] md:mb-16 lg:mb-20">
          <span className="text-[18px] md:text-xl lg:text-2xl font-medium italic text-[#2d7bf2] leading-normal">
            WHY?
          </span>
        </div>

        {/* Main Question - Using SVG Text */}
        <div className="mb-[54px] md:mb-20 lg:mb-24 flex justify-center scale-100 md:scale-125 lg:scale-150">
          <WhyText />
        </div>

        {/* Description */}
        <div className="text-[18px] md:text-xl lg:text-2xl text-[#5d6673] tracking-[-0.54px]">
          <p className="leading-[1.4] mb-[12px] md:mb-4 lg:mb-6">
            부모님 건강이 걱정되지만
            <br />
            매일 연락하기는 부담스럽고,
          </p>
          <p className="leading-[1.4] mb-[12px] md:mb-4 lg:mb-6">
            아직 요양이 필요한 상황은 아니지만
            <br />
            미리 챙겨두고 싶을 때,
          </p>
          <p className="leading-[1.4]">
            <span className="font-semibold text-[#2d7bf2] tracking-[-0.48px]">
              피노키오는 스마트폰 앱 하나로
              <br />
              모든 걸 해결해드려요
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
