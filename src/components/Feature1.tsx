const Feature1 = () => {
  return (
    <section className="relative min-h-[812px] flex items-center justify-center px-6 py-16 bg-[#f9fafc] overflow-hidden">
      {/* Background chart image */}
      <img
        src="/feature1_bg.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-[44px] w-auto h-auto max-w-none pointer-events-none opacity-60"
      />
      
      {/* Background gradient */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[250px]"
        style={{
          background: 'radial-gradient(circle at center top, rgba(215, 255, 236, 0.8) 0%, rgba(255, 255, 255, 0) 50%)'
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto text-center mt-20">
        {/* Badge */}
        <div className="inline-flex items-center justify-center bg-[#fefefe] border border-[#3dea98] rounded-[50px] px-6 py-3 mb-6">
          <span className="text-[18px] font-medium italic text-[#039855]" style={{ fontFamily: "'Creato Display', sans-serif" }}>
            Feature 1
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[30px] font-bold text-[#363d47] leading-[1.35] tracking-[-0.9px] mb-6">
          스마트폰 사용 패턴을<br />
          바탕으로 부모님의<br />
          안부를 살필 수 있어요
        </h2>

        {/* Description */}
        <p className="text-[18px] font-medium text-[#5d6673] leading-[1.4] mb-8">
          스마트폰 센서·사용 패턴 데이터를<br />
          AI가 매일 분석해 부모님의 하루를<br />
          그림형식으로 보여줘요
        </p>

        {/* Card */}
        <div
          className="relative bg-[#fefefe] rounded-[18px] p-[7px] mx-auto max-w-[293px]"
          style={{
            boxShadow: '0px -5px 40px 5px rgba(3, 152, 85, 0.15)'
          }}
        >
          {/* Image section */}
          <div
            className="relative rounded-[11px] overflow-hidden h-[208px] mb-[7px] flex items-end justify-center p-[7px]"
            style={{
              backgroundImage: 'url(/feature1_img.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>

          {/* Text section */}
          <div className="flex items-center justify-between pl-[7px]">
            <div className="flex-1">
              <p className="text-[#363d47] text-[18px] font-bold leading-[1.35] tracking-[-0.18px] text-left mb-1">
                요즘 너무 집에만 계세요
              </p>
              <div className="flex gap-[15px] text-[#8d94a0] text-[13px] font-medium tracking-[-0.13px] leading-[1.4]">
                <span>이동 시간 | 12분</span>
                <span>이동 거리 | 134m</span>
              </div>
            </div>
            <div className="bg-[#2d7bf2] rounded-[10px] p-[10px] flex items-center justify-center">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.81396 19.6953L19.6953 6.81396M19.6953 6.81396H6.81396M19.6953 6.81396V19.6953" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
