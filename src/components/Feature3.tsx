import { Info } from "lucide-react";

const Feature3 = () => {
  return (
    <section className="relative min-h-[812px] md:min-h-screen flex items-center justify-center bg-[#f9fafc] overflow-hidden">
      {/* Background graph image */}
      <img
        src="/feature3_bg.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-[100px] md:top-[120px] lg:top-[150px] w-[400px] md:w-[500px] lg:w-[600px] h-auto pointer-events-none opacity-50"
      />

      {/* Background gradient */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] md:w-[800px] lg:w-[1000px] h-[330px] md:h-[430px] lg:h-[530px]"
        style={{
          background:
            "radial-gradient(circle at center top, rgba(255, 243, 219, 1) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[375px] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center pt-[180px] md:pt-[200px] lg:pt-[220px] pb-4 md:pb-8 lg:pb-12">
        {/* Badge */}
        <div className="inline-flex items-center justify-center bg-[#fefefe] border border-[#FFB114] rounded-full px-[25px] md:px-8 lg:px-10 py-3 md:py-4 mb-6 md:mb-8 lg:mb-10">
          <span className="text-lg md:text-xl lg:text-2xl font-medium italic text-[#FFB114]">
            Feature 3
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[30px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#363d47] leading-[1.35] tracking-[-0.9px] mb-6 md:mb-8 lg:mb-10">
          맞춤형 리포트와
          <br />
          인사이트를 제공해요
        </h2>

        {/* Description */}
        <p className="text-[18px] md:text-xl lg:text-2xl font-medium text-[#5d6673] leading-[1.4] mb-24 md:mb-32 lg:mb-40">
          활동 및 건강 상태를 종합 분석하여,
          <br />
          가족들이 쉽게 이해할 수 있도록
          <br />
          리포트형식으로 정리해 드려요
        </p>

        {/* Cards Container */}
        <div className="relative w-full max-w-[375px] md:max-w-[500px] lg:max-w-[650px] mx-auto">
          {/* Distance Card - Behind, positioned to the right and top */}
          <div className="absolute left-[calc(50%+25px)] md:left-[calc(50%+35px)] lg:left-[calc(50%+45px)] -translate-x-1/2 top-[-20px] md:top-[-25px] lg:top-[-30px] w-[260px] md:w-[320px] lg:w-[380px] bg-[#fefefe] rounded-[17px] md:rounded-[20px] lg:rounded-[24px] shadow-[0px_-4px_18px_0px_rgba(8,38,97,0.1)] p-[17px] md:p-[20px] lg:p-[24px]">
            <div className="mb-[7px] md:mb-[9px] lg:mb-[11px]">
              <p className="text-xs md:text-sm lg:text-base font-semibold text-[#363d47] opacity-70 text-left mb-[2px]">
                이동 거리
              </p>
              <div className="flex items-end gap-[3px] md:gap-[4px]">
                <span className="text-[19px] md:text-2xl lg:text-3xl font-bold text-[#363d47] leading-[1.35]">
                  2.3
                </span>
                <span className="text-[13.5px] md:text-base lg:text-lg font-medium text-[#363d47] opacity-70 leading-[1.4] pb-[2.5px]">
                  km
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[7px] md:gap-[9px] lg:gap-[11px] bg-white rounded-lg p-1 md:p-1.5 lg:p-2">
              <Info
                className="w-[11px] h-[11px] md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#039855] flex-shrink-0"
                strokeWidth={2}
              />
              <p className="text-xs md:text-sm lg:text-base font-medium text-[#039855] leading-[1.4] tracking-[-0.12px]">
                지하철 2-3정거장 거리를 이동했어요
              </p>
            </div>
          </div>

          {/* Steps Card - In front, positioned to the left and bottom */}
          <div className="absolute left-[calc(50%-25px)] md:left-[calc(50%-35px)] lg:left-[calc(50%-45px)] -translate-x-1/2 top-[70px] md:top-[85px] lg:top-[100px] w-[260px] md:w-[320px] lg:w-[380px] bg-[#fefefe] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shadow-[0px_-4.32px_18px_0px_rgba(8,38,97,0.1)] p-[16px] md:p-[20px] lg:p-[24px] z-10">
            <div className="mb-[7px] md:mb-[9px] lg:mb-[11px]">
              <p className="text-xs md:text-sm lg:text-base font-semibold text-[#363d47] opacity-70 text-left mb-[2px]">
                오늘 걸음 수
              </p>
              <div className="flex items-end gap-[3px] md:gap-[4px]">
                <span className="text-[18px] md:text-2xl lg:text-3xl font-bold text-[#363d47] leading-[1.35]">
                  7,234
                </span>
                <span className="text-[13px] md:text-base lg:text-lg font-medium text-[#363d47] opacity-70 leading-[1.4] pb-[2.5px]">
                  걸음
                </span>
              </div>
            </div>

            {/* Bar Chart */}
            <div
              className="relative h-[152px] md:h-[185px] lg:h-[220px] w-[228px] md:w-[280px] lg:w-[332px] mt-[7px] md:mt-[9px] lg:mt-[11px] md:scale-100 lg:scale-100"
              style={{ transformOrigin: "top left" }}
            >
              {/* Horizontal grid line - dashed */}
              <div
                className="absolute top-[67px] md:top-[82px] lg:top-[97px] left-0 w-full h-0"
                style={{
                  borderTop: "1px dashed #d6dbe2",
                }}
              />

              {/* X-axis tick marks */}
              <div className="absolute left-[55px] md:left-[68px] lg:left-[80px] top-[121px] md:top-[148px] lg:top-[175px] w-0 h-[11px] md:h-[13px] lg:h-[16px] border-l border-[#d6dbe2]" />
              <div className="absolute left-[114px] md:left-[140px] lg:left-[166px] top-[121px] md:top-[148px] lg:top-[175px] w-0 h-[11px] md:h-[13px] lg:h-[16px] border-l border-[#d6dbe2]" />
              <div className="absolute left-[173px] md:left-[213px] lg:left-[252px] top-[121px] md:top-[148px] lg:top-[175px] w-0 h-[11px] md:h-[13px] lg:h-[16px] border-l border-[#d6dbe2]" />

              {/* X-axis labels */}
              <p className="absolute left-0 top-[136px] md:top-[166px] lg:top-[197px] text-[10px] md:text-xs lg:text-sm text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                0시
              </p>
              <p className="absolute left-[55px] md:left-[68px] lg:left-[80px] top-[136px] md:top-[166px] lg:top-[197px] text-[10px] md:text-xs lg:text-sm text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                6시
              </p>
              <p className="absolute left-[114px] md:left-[140px] lg:left-[166px] top-[136px] md:top-[166px] lg:top-[197px] text-[10px] md:text-xs lg:text-sm text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                12시
              </p>
              <p className="absolute left-[173px] md:left-[213px] lg:left-[252px] top-[136px] md:top-[166px] lg:top-[197px] text-[10px] md:text-xs lg:text-sm text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                18시
              </p>

              {/* Y-axis label */}
              <p className="absolute right-0 top-[50px] md:top-[61px] lg:top-[72px] text-[10px] md:text-xs lg:text-sm text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px] text-right">
                1,000
              </p>

              {/* Bottom baseline */}
              <div className="absolute left-0 top-[133px] md:top-[163px] lg:top-[193px] w-full h-0 border-t border-[#d6dbe2]" />

              {/* Bars with absolute positioning */}
              <div className="absolute left-[86px] md:left-[106px] lg:left-[125px] top-[123px] md:top-[151px] lg:top-[179px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[7px] md:h-[9px] lg:h-[10px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[95px] md:left-[117px] lg:left-[138px] top-[87px] md:top-[107px] lg:top-[126px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[42px] md:h-[51px] lg:h-[61px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[105px] md:left-[129px] lg:left-[153px] top-[99px] md:top-[121px] lg:top-[144px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[30px] md:h-[37px] lg:h-[44px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[116px] md:left-[143px] lg:left-[169px] top-[71px] md:top-[87px] lg:top-[103px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[59px] md:h-[72px] lg:h-[86px] bg-[#cce5ff] rounded-[3px]" />

              {/* Active bar with tooltip */}
              <div className="absolute left-[126px] md:left-[155px] lg:left-[184px] top-[31px] md:top-[38px] lg:top-[45px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[98px] md:h-[120px] lg:h-[142px] bg-[#2d7bf2] rounded-[3px]">
                {/* Tooltip */}
                <div className="absolute left-[3px] md:left-[4px] lg:left-[5px] bottom-full -translate-x-1/2 pb-[6px] md:pb-[7px] lg:pb-[9px]">
                  <div className="bg-[#eaecf0] rounded-full px-[10px] md:px-[12px] lg:px-[14px] py-[3px] md:py-[4px] lg:py-[5px] shadow-[5px_5px_44px_0px_rgba(0,0,0,0.05)] whitespace-nowrap">
                    <div className="flex items-end gap-0">
                      <span className="text-xs md:text-sm lg:text-base font-semibold text-[#363d47] opacity-70 leading-[1.4] tracking-[-0.11px]">
                        2,211
                      </span>
                      <span className="text-[10px] md:text-xs lg:text-sm text-[#363d47] opacity-70 leading-[1.4] tracking-[-0.1px] pb-[1.5px]">
                        걸음
                      </span>
                    </div>
                  </div>
                  <div className="w-0 h-0 border-l-[3px] md:border-l-[4px] lg:border-l-[5px] border-l-transparent border-r-[3px] md:border-r-[4px] lg:border-r-[5px] border-r-transparent border-t-[4px] md:border-t-[5px] lg:border-t-[6px] border-t-[#eaecf0] mx-auto mt-[-1px]" />
                </div>
              </div>

              <div className="absolute left-[135px] md:left-[166px] lg:left-[197px] top-[107px] md:top-[131px] lg:top-[155px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[23px] md:h-[28px] lg:h-[33px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[145px] md:left-[178px] lg:left-[211px] top-[107px] md:top-[131px] lg:top-[155px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[23px] md:h-[28px] lg:h-[33px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[154px] md:left-[189px] lg:left-[224px] top-[107px] md:top-[131px] lg:top-[155px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[23px] md:h-[28px] lg:h-[33px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[163px] md:left-[200px] lg:left-[237px] top-[87px] md:top-[107px] lg:top-[126px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[42px] md:h-[51px] lg:h-[61px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[175px] md:left-[215px] lg:left-[255px] top-[123px] md:top-[151px] lg:top-[179px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[7px] md:h-[9px] lg:h-[10px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[184px] md:left-[226px] lg:left-[268px] top-[123px] md:top-[151px] lg:top-[179px] w-[6.5px] md:w-[8px] lg:w-[9.5px] h-[7px] md:h-[9px] lg:h-[10px] bg-[#cce5ff] rounded-[3px]" />
            </div>
          </div>

          {/* Spacer for absolute positioned cards */}
          <div className="h-[300px] md:h-[380px] lg:h-[460px]" />
        </div>
      </div>
    </section>
  );
};

export default Feature3;
