const Feature2 = () => {
  return (
    <section className="relative min-h-[812px] md:min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#f9fafc] overflow-hidden">
      {/* Background caution icon */}
      <img
        src="/feature2_caution.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-[60px] md:top-[80px] lg:top-[100px] w-[189px] md:w-[250px] lg:w-[320px] h-[189px] md:h-[250px] lg:h-[320px] opacity-30 pointer-events-none"
      />

      {/* Background gradient */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] md:w-[800px] lg:w-[1000px] h-[330px] md:h-[430px] lg:h-[530px]"
        style={{
          background:
            "radial-gradient(circle at center top, rgba(255, 229, 227, 1) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center mt-20 md:mt-24 lg:mt-28">
        {/* Badge */}
        <div className="inline-flex items-center justify-center bg-[#fefefe] border border-[#f9513f] rounded-[50px] px-6 md:px-8 lg:px-10 py-3 md:py-4 mb-6 md:mb-8 lg:mb-10">
          <span
            className="text-[18px] md:text-xl lg:text-2xl font-medium italic text-[#f9513f]"
            style={{ fontFamily: "'Creato Display', sans-serif" }}
          >
            Feature 2
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[30px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#363d47] leading-[1.35] tracking-[-0.9px] mb-6 md:mb-8 lg:mb-10">
          이상신호가 감지되면
          <br />
          놓치지 않게 알려줘요
        </h2>

        {/* Description */}
        <p className="text-[18px] md:text-xl lg:text-2xl font-medium text-[#5d6673] leading-[1.4] mb-8 md:mb-12 lg:mb-16 w-[237px] md:w-auto mx-auto">
          외출 여부 등의 신호를 바탕으로
          <br />
          작은 이상 신호도 캐치해
          <br />
          건강 변화를 미리 알 수 있어요
        </p>

        {/* Notifications card */}
        <img
          src="/Group 101.png"
          alt="Feature 2 notifications"
          className="mx-auto w-full max-w-[340px] md:max-w-[450px] lg:max-w-[600px] h-auto"
          style={{
            filter: "drop-shadow(0px -5px 28px rgba(8, 38, 97, 0.1))",
          }}
        />
      </div>
    </section>
  );
};

export default Feature2;
