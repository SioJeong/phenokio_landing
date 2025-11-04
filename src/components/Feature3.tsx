import { Info } from "lucide-react";

const Feature3 = () => {
  return (
    <section className="relative min-h-[812px] flex items-center justify-center bg-[#f9fafc] overflow-hidden">
      {/* Background graph image */}
      <img
        src="/feature3_bg.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-[100px] w-[400px] h-auto pointer-events-none opacity-50"
      />

      {/* Background gradient */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[330px]"
        style={{
          background:
            "radial-gradient(circle at center top, rgba(255, 243, 219, 1) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[375px] mx-auto text-center pt-[180px] pb-4">
        {/* Badge */}
        <div className="inline-flex items-center justify-center bg-[#fefefe] border border-[#FFB114] rounded-full px-[25px] py-3 mb-6">
          <span className="text-lg font-medium italic text-[#FFB114]">
            Feature 3
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[30px] font-bold text-[#363d47] leading-[1.35] tracking-[-0.9px] mb-6">
          맞춤형 리포트와
          <br />
          인사이트를 제공해요
        </h2>

        {/* Description */}
        <p className="text-[18px] font-medium text-[#5d6673] leading-[1.4] mb-24">
          활동 및 건강 상태를 종합 분석하여,
          <br />
          가족들이 쉽게 이해할 수 있도록
          <br />
          리포트형식으로 정리해 드려요
        </p>

        {/* Cards Container */}
        <div className="relative w-full max-w-[375px] mx-auto">
          {/* Distance Card - Behind, positioned to the right and top */}
          <div className="absolute left-[calc(50%+25px)] -translate-x-1/2 top-[-20px] w-[260px] bg-[#fefefe] rounded-[17px] shadow-[0px_-4px_18px_0px_rgba(8,38,97,0.1)] p-[17px]">
            <div className="mb-[7px]">
              <p className="text-xs font-semibold text-[#363d47] opacity-70 text-left mb-[2px]">
                이동 거리
              </p>
              <div className="flex items-end gap-[3px]">
                <span className="text-[19px] font-bold text-[#363d47] leading-[1.35]">
                  2.3
                </span>
                <span className="text-[13.5px] font-medium text-[#363d47] opacity-70 leading-[1.4] pb-[2.5px]">
                  km
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[7px] bg-white rounded-lg">
              <Info
                className="w-[11px] h-[11px] text-[#039855] flex-shrink-0"
                strokeWidth={2}
              />
              <p className="text-xs font-medium text-[#039855] leading-[1.4] tracking-[-0.12px]">
                지하철 2-3정거장 거리를 이동했어요
              </p>
            </div>
          </div>

          {/* Steps Card - In front, positioned to the left and bottom */}
          <div className="absolute left-[calc(50%-25px)] -translate-x-1/2 top-[70px] w-[260px] bg-[#fefefe] rounded-[16px] shadow-[0px_-4.32px_18px_0px_rgba(8,38,97,0.1)] p-[16px] z-10">
            <div className="mb-[7px]">
              <p className="text-xs font-semibold text-[#363d47] opacity-70 text-left mb-[2px]">
                오늘 걸음 수
              </p>
              <div className="flex items-end gap-[3px]">
                <span className="text-[18px] font-bold text-[#363d47] leading-[1.35]">
                  7,234
                </span>
                <span className="text-[13px] font-medium text-[#363d47] opacity-70 leading-[1.4] pb-[2.5px]">
                  걸음
                </span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="relative h-[152px] w-[228px] mt-[7px]">
              {/* Horizontal grid line - dashed */}
              <div
                className="absolute top-[67px] left-0 w-full h-0"
                style={{
                  borderTop: "1px dashed #d6dbe2",
                }}
              />

              {/* X-axis tick marks */}
              <div className="absolute left-[55px] top-[121px] w-0 h-[11px] border-l border-[#d6dbe2]" />
              <div className="absolute left-[114px] top-[121px] w-0 h-[11px] border-l border-[#d6dbe2]" />
              <div className="absolute left-[173px] top-[121px] w-0 h-[11px] border-l border-[#d6dbe2]" />

              {/* X-axis labels */}
              <p className="absolute left-0 top-[136px] text-[10px] text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                0시
              </p>
              <p className="absolute left-[55px] top-[136px] text-[10px] text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                6시
              </p>
              <p className="absolute left-[114px] top-[136px] text-[10px] text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                12시
              </p>
              <p className="absolute left-[173px] top-[136px] text-[10px] text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px]">
                18시
              </p>

              {/* Y-axis label */}
              <p className="absolute right-0 top-[50px] text-[10px] text-[#8d94a0] opacity-70 leading-[1.4] tracking-[-0.1px] text-right">
                1,000
              </p>

              {/* Bottom baseline */}
              <div className="absolute left-0 top-[133px] w-full h-0 border-t border-[#d6dbe2]" />

              {/* Bars with absolute positioning */}
              <div className="absolute left-[86px] top-[123px] w-[6.5px] h-[7px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[95px] top-[87px] w-[6.5px] h-[42px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[105px] top-[99px] w-[6.5px] h-[30px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[116px] top-[71px] w-[6.5px] h-[59px] bg-[#cce5ff] rounded-[3px]" />

              {/* Active bar with tooltip */}
              <div className="absolute left-[126px] top-[31px] w-[6.5px] h-[98px] bg-[#2d7bf2] rounded-[3px]">
                {/* Tooltip */}
                <div className="absolute left-[3px] bottom-full -translate-x-1/2 pb-[6px]">
                  <div className="bg-[#eaecf0] rounded-full px-[10px] py-[3px] shadow-[5px_5px_44px_0px_rgba(0,0,0,0.05)] whitespace-nowrap">
                    <div className="flex items-end gap-0">
                      <span className="text-xs font-semibold text-[#363d47] opacity-70 leading-[1.4] tracking-[-0.11px]">
                        2,211
                      </span>
                      <span className="text-[10px] text-[#363d47] opacity-70 leading-[1.4] tracking-[-0.1px] pb-[1.5px]">
                        걸음
                      </span>
                    </div>
                  </div>
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[#eaecf0] mx-auto mt-[-1px]" />
                </div>
              </div>

              <div className="absolute left-[135px] top-[107px] w-[6.5px] h-[23px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[145px] top-[107px] w-[6.5px] h-[23px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[154px] top-[107px] w-[6.5px] h-[23px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[163px] top-[87px] w-[6.5px] h-[42px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[175px] top-[123px] w-[6.5px] h-[7px] bg-[#cce5ff] rounded-[3px]" />
              <div className="absolute left-[184px] top-[123px] w-[6.5px] h-[7px] bg-[#cce5ff] rounded-[3px]" />
            </div>
          </div>

          {/* Spacer for absolute positioned cards */}
          <div className="h-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default Feature3;
