import WhyText from './WhyText';

const WhySection = () => {
  return (
    <section className="relative min-h-[720px] flex items-center justify-center px-6 py-16 bg-[#f9fafc]">
      {/* Background Gradient */}
      <div className="absolute left-0 top-0 w-full h-[330px]" style={{
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 375 330.14\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(2.1454e-16 33.014 -33.014 -1.2526e-15 187.5 0)\"><stop stop-color=\"rgba(228,241,255,1)\" offset=\"0\"/><stop stop-color=\"rgba(255,255,255,0)\" offset=\"1\"/></radialGradient></defs></svg>')"
      }} />

      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex bg-[#fefefe] border border-[#2d7bf2] rounded-full px-[25px] py-[12px] mb-[49px]">
          <span className="text-[18px] font-medium italic text-[#2d7bf2] leading-normal">WHY?</span>
        </div>

        {/* Main Question - Using SVG Text */}
        <div className="mb-[54px] flex justify-center">
          <WhyText />
        </div>

        {/* Description */}
        <div className="text-[18px] text-[#5d6673] tracking-[-0.54px]">
          <p className="leading-[1.4] mb-[12px]">
            매일 연락드리기는 어렵고,<br />
            부모님에 대한 걱정을 떨치긴 힘들때,
          </p>
          <p className="leading-[1.4] mb-[12px]">
            <span>피노키오가 </span>
            <span className="font-semibold text-[#2d7bf2] tracking-[-0.48px]">
              스마트폰 센서와<br />
              사용 패턴 데이터
            </span>
            <span>를 통해</span>
          </p>
          <p className="leading-[1.4]">
            <span className="font-semibold text-[#2d7bf2] tracking-[-0.48px]">
              부모님의 이상징후를<br />
              조기에 탐지
            </span>
            <span>할 수 있도록 도와드릴게요!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
