const Feature1 = () => {
  return (
    <section className="relative min-h-[812px] md:min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#f9fafc] overflow-hidden">
      {/* Background chart image */}
      <img
        src="/feature1_bg.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-[44px] md:top-[60px] lg:top-[80px] w-auto h-auto max-w-none pointer-events-none opacity-60 scale-100 md:scale-125 lg:scale-150"
      />

      {/* Background gradient */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] md:w-[800px] lg:w-[1000px] h-[250px] md:h-[350px] lg:h-[450px]"
        style={{
          background:
            "radial-gradient(circle at center top, rgba(215, 255, 236, 0.8) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center mt-20 md:mt-24 lg:mt-28">
        {/* Badge */}
        <div className="inline-flex items-center justify-center bg-[#fefefe] border border-[#3dea98] rounded-[50px] px-6 md:px-8 lg:px-10 py-3 md:py-4 mb-6 md:mb-8 lg:mb-10">
          <span
            className="text-[18px] md:text-xl lg:text-2xl font-medium italic text-[#039855]"
            style={{ fontFamily: "'Creato Display', sans-serif" }}
          >
            Feature 1
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[30px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#363d47] leading-[1.35] tracking-[-0.9px] mb-6 md:mb-8 lg:mb-10">
          스마트폰 사용 패턴을
          <br />
          바탕으로 부모님의
          <br />
          안부를 살필 수 있어요
        </h2>

        {/* Description */}
        <p className="text-[18px] md:text-xl lg:text-2xl font-medium text-[#5d6673] leading-[1.4] mb-8 md:mb-12 lg:mb-16">
          스마트폰 센서·사용 패턴 데이터를
          <br />
          AI가 매일 분석해 부모님의 하루를
          <br />
          그림형식으로 보여줘요
        </p>

        {/* Card */}
        <div
          className="relative bg-[#fefefe] rounded-[18px] md:rounded-[24px] lg:rounded-[30px] p-[7px] md:p-[10px] lg:p-[14px] mx-auto max-w-[293px] md:max-w-[450px] lg:max-w-[600px]"
          style={{
            boxShadow: "0px -5px 40px 5px rgba(3, 152, 85, 0.15)",
          }}
        >
          {/* Image section */}
          <div
            className="relative rounded-[11px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden h-[208px] md:h-[320px] lg:h-[400px] mb-[7px] md:mb-[10px] lg:mb-[14px] flex items-end justify-center p-[7px] md:p-[10px] lg:p-[14px]"
            style={{
              backgroundImage: "url(/feature1_img.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Text section */}
          <div className="flex items-center justify-between pl-[7px] md:pl-[10px] lg:pl-[14px]">
            <div className="flex-1">
              <p className="text-[#363d47] text-[18px] md:text-xl lg:text-2xl font-bold leading-[1.35] tracking-[-0.18px] text-left mb-1 md:mb-2">
                요즘 너무 집에만 계세요
              </p>
              <div className="flex gap-[15px] md:gap-5 lg:gap-6 text-[#8d94a0] text-[13px] md:text-base lg:text-lg font-medium tracking-[-0.13px] leading-[1.4]">
                <span>이동 시간 | 12분</span>
                <span>이동 거리 | 134m</span>
              </div>
            </div>
            <div className="bg-[#2d7bf2] rounded-[10px] md:rounded-[14px] lg:rounded-[18px] p-[10px] md:p-3 lg:p-4 flex items-center justify-center">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-8 md:h-8 lg:w-10 lg:h-10"
              >
                <path
                  d="M6.81396 19.6953L19.6953 6.81396M19.6953 6.81396H6.81396M19.6953 6.81396V19.6953"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
