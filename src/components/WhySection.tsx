const WhySection = () => {
  return (
    <section className="relative min-h-[720px] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-[#fefefe] border border-[#2d7bf2] rounded-full px-[25px] py-[12px] mb-12">
          <span className="text-lg font-medium italic text-[#2d7bf2]">WHY?</span>
        </div>

        {/* Main Question */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-8 px-4">
          매번 "괜찮다" 하시는 부모님,<br />
          더 정확하게 안부를<br />
          확인할 순 없을까?
        </h2>

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed px-6">
          매일 연락드리기는 어렵고,<br />
          부모님에 대한 걱정을 떨치긴 힘들때,<br />
          피노키오가 스마트폰 센서와 사용 패턴 데이터를 통해<br />
          부모님의 이상징후를 조기에 탐지할 수 있도록<br />
          도와드릴게요!
        </p>
      </div>
    </section>
  );
};

export default WhySection;
