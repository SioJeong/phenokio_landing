import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";

interface HeroProps {
  onCTAClick: (buttonId: string) => void;
}

const GridPattern = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="375"
    height="447"
    viewBox="0 0 375 447"
    fill="none"
    className="absolute"
  >
    <path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M389.885 0H385.415V20.115H345.185V0H340.715V20.115H300.485V0H296.015V20.115H255.785V0H251.315V20.115H211.085V0H206.615V20.115H166.385V0H161.915V20.115H121.685V0H117.215V20.115H76.985V0H72.515V20.115H32.285V0H27.815V20.115H-12.415V0H-16.885V20.115H-37V24.585H-16.885V64.815H-37V69.285H-16.885V109.515H-37V113.985H-16.885V154.215H-37V158.685H-16.885V198.915H-37V203.385H-16.885V243.615H-37V248.085H-16.885V288.315H-37V292.785H-16.885V333.015H-37V337.485H-16.885V377.715H-37V382.185H-16.885V422.415H-37V426.885H-16.885V447H-12.415V426.885H27.815V447H32.285V426.885H72.515V447H76.985V426.885H117.215V447H121.685V426.885H161.915V447H166.385V426.885H206.615V447H211.085V426.885H251.315V447H255.785V426.885H296.015V447H300.485V426.885H340.715V447H345.185V426.885H385.415V447H389.885V426.885H410V422.415H389.885V382.185H410V377.715H389.885V337.485H410V333.015H389.885V292.785H410V288.315H389.885V248.085H410V243.615H389.885V203.385H410V198.915H389.885V158.685H410V154.215H389.885V113.985H410V109.515H389.885V69.285H410V64.815H389.885V24.585H410V20.115H389.885V0ZM345.185 64.815H385.415V24.585H345.185V64.815ZM345.185 109.515H385.415V69.285H345.185V109.515ZM345.185 154.215H385.415V113.985H345.185V154.215ZM345.185 198.915H385.415V158.685H345.185V198.915ZM345.185 243.615H385.415V203.385H345.185V243.615ZM345.185 288.315H385.415V248.085H345.185V288.315ZM345.185 333.015H385.415V292.785H345.185V333.015ZM345.185 377.715H385.415V337.485H345.185V377.715ZM345.185 422.415H385.415V382.185H345.185V422.415ZM27.815 382.185H-12.415V422.415H27.815V382.185ZM27.815 337.485H-12.415V377.715H27.815V337.485ZM27.815 292.785H-12.415V333.015H27.815V292.785ZM27.815 248.085H-12.415V288.315H27.815V248.085ZM27.815 203.385H-12.415V243.615H27.815V203.385ZM27.815 158.685H-12.415V198.915H27.815V158.685ZM27.815 113.985H-12.415V154.215H27.815V113.985ZM27.815 69.285H-12.415V109.515H27.815V69.285ZM27.815 24.585H-12.415V64.815H27.815V24.585ZM300.485 64.815H340.715V24.585H300.485V64.815ZM300.485 109.515H340.715V69.285H300.485V109.515ZM300.485 154.215H340.715V113.985H300.485V154.215ZM300.485 198.915H340.715V158.685H300.485V198.915ZM300.485 243.615H340.715V203.385H300.485V243.615ZM300.485 288.315H340.715V248.085H300.485V288.315ZM300.485 333.015H340.715V292.785H300.485V333.015ZM300.485 377.715H340.715V337.485H300.485V377.715ZM72.515 337.485H32.285V377.715H72.515V337.485ZM72.515 292.785H32.285V333.015H72.515V292.785ZM72.515 248.085H32.285V288.315H72.515V248.085ZM72.515 203.385H32.285V243.615H72.515V203.385ZM72.515 158.685H32.285V198.915H72.515V158.685ZM72.515 113.985H32.285V154.215H72.515V113.985ZM72.515 69.285H32.285V109.515H72.515V69.285ZM255.785 109.515H296.015V69.285H255.785V109.515ZM255.785 154.215H296.015V113.985H255.785V154.215ZM255.785 198.915H296.015V158.685H255.785V198.915ZM255.785 243.615H296.015V203.385H255.785V243.615ZM255.785 288.315H296.015V248.085H255.785V288.315ZM255.785 333.015H296.015V292.785H255.785V333.015ZM117.215 292.785H76.985V333.015H117.215V292.785ZM117.215 248.085H76.985V288.315H117.215V248.085ZM117.215 203.385H76.985V243.615H117.215V203.385ZM117.215 158.685H76.985V198.915H117.215V158.685ZM117.215 113.985H76.985V154.215H117.215V113.985ZM211.085 154.215H251.315V113.985H211.085V154.215ZM211.085 198.915H251.315V158.685H211.085V198.915ZM211.085 243.615H251.315V203.385H211.085V243.615ZM211.085 288.315H251.315V248.085H211.085V288.315ZM161.915 248.085H121.685V288.315H161.915V248.085ZM161.915 203.385H121.685V243.615H161.915V203.385ZM161.915 158.685H121.685V198.915H161.915V158.685ZM166.385 198.915H206.615V158.685H166.385V198.915ZM166.385 243.615H206.615V203.385H166.385V243.615ZM206.615 248.085H166.385V288.315H206.615V248.085ZM166.385 154.215H206.615V113.985H166.385V154.215ZM121.685 154.215H161.915V113.985H121.685V154.215ZM161.915 292.785H121.685V333.015H161.915V292.785ZM206.615 292.785H166.385V333.015H206.615V292.785ZM251.315 292.785H211.085V333.015H251.315V292.785ZM211.085 109.515H251.315V69.285H211.085V109.515ZM166.385 109.515H206.615V69.285H166.385V109.515ZM121.685 109.515H161.915V69.285H121.685V109.515ZM76.985 109.515H117.215V69.285H76.985V109.515ZM117.215 337.485H76.985V377.715H117.215V337.485ZM161.915 337.485H121.685V377.715H161.915V337.485ZM206.615 337.485H166.385V377.715H206.615V337.485ZM251.315 337.485H211.085V377.715H251.315V337.485ZM296.015 337.485H255.785V377.715H296.015V337.485ZM255.785 64.815H296.015V24.585H255.785V64.815ZM211.085 64.815H251.315V24.585H211.085V64.815ZM166.385 64.815H206.615V24.585H166.385V64.815ZM121.685 64.815H161.915V24.585H121.685V64.815ZM76.985 64.815H117.215V24.585H76.985V64.815ZM32.285 64.815H72.515V24.585H32.285V64.815ZM72.515 382.185H32.285V422.415H72.515V382.185ZM117.215 382.185H76.985V422.415H117.215V382.185ZM161.915 382.185H121.685V422.415H161.915V382.185ZM206.615 382.185H166.385V422.415H206.615V382.185ZM251.315 382.185H211.085V422.415H251.315V382.185ZM296.015 382.185H255.785V422.415H296.015V382.185ZM340.715 382.185H300.485V422.415H340.715V382.185Z"
      fill="url(#paint0_radial_203_2056)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_203_2056"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(186.5 223.5) rotate(90) scale(223.5)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
));

const Hero = ({ onCTAClick }: HeroProps) => {
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  const updateHeight = useCallback(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    // 초기 높이 설정
    updateHeight();

    // resize 이벤트 리스너 추가
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [updateHeight]);
  return (
    <section
      className="relative flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#7CB8FF] via-[#5EA3FF] to-[#A5D4FF]"
      style={{ height: viewportHeight || "100vh" }}
    >
      {/* Grid Pattern Background */}
      <div className="absolute top-[273px] md:top-[350px] lg:top-[400px] left-0 w-full h-[447px] md:h-[600px] lg:h-[700px] flex items-center justify-center md:hidden">
        <GridPattern />
      </div>

      <div className="z-10 w-full max-w-[375px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto text-center px-6 md:px-8 lg:px-12 flex flex-col mt-6 md:mt-12 lg:mt-16 flex-1">
        {/* Logo Image */}
        <div className="mb-[12px] md:mb-4 lg:mb-6 opacity-40">
          <img
            src="/PHENOKIO_typo.png"
            alt="PHENOKIO"
            className="w-[100px] md:w-[160px] lg:w-[200px] h-auto mx-auto"
            loading="lazy"
          />
        </div>

        {/* Main Title */}
        <h2 className="text-[24px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#082B61] leading-[1.35] tracking-[-1.02px] mb-[8px] md:mb-4 lg:mb-6 px-4 text-center">
          멀리있는 부모님의 하루
          <br />
          전화로만 확인하셨나요?
        </h2>

        {/* Sub Title */}
        <h3 className="text-[16px] md:text-xl lg:text-2xl xl:text-3xl font-regular text-[#FEFEFE] leading-[1.35] tracking-[-1.02px] mb-[24px] md:mb-8 lg:mb-12 px-4 text-center">
          오늘도 흘러만 가는 부모님의 하루,
          <br />더 정확하게 건강 변화를 확인해보세요!
        </h3>

        {/* CTA Buttons */}
        <div className="relative z-20 space-y-4 px-[28px] md:px-0 mb-8 md:mb-12 lg:mb-16">
          <Button
            size="lg"
            className="h-12 md:h-16 lg:h-20 bg-[#082B61] hover:bg-[#0A3575] text-white font-semibold rounded-full text-base md:text-lg lg:text-xl shadow-lg px-6 md:px-10 lg:px-12"
            onClick={() => onCTAClick("hero_download")}
          >
            지금 무료로 시작하기
            <ArrowRight
              className="w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14 ml-0.5"
              strokeWidth={3}
            />
          </Button>
        </div>

        {/* Device Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[300px] md:h-[450px] lg:h-[600px] xl:h-[800px] flex items-end justify-center">
          <img
            src="/report.png"
            alt="디바이스 화면"
            className="w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-contain object-bottom z-10"
            loading="lazy"
          />
          {/* Bottom fade to background over device */}
          <div
            className="absolute inset-x-0 bottom-0 h-[160px] md:h-[200px] lg:h-[240px] pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(204, 229, 255, 0.00) 0%, #CCE5FF 95.09%)",
            }}
          />
        </div>
      </div>

      {/* Scroll Guide */}
      <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center mb-3 md:mb-6 lg:mb-8">
        <p className="text-[#082B61] text-[16px] md:text-lg lg:text-xl font-semibold animate-bounce mb-1">
          아래로 스크롤 해보세요
        </p>
        <svg
          width="32"
          height="28"
          viewBox="0 0 41 32"
          fill="none"
          className="text-[#082B61] animate-bounce md:w-10 md:h-9 lg:w-12 lg:h-10"
        >
          <path
            d="M0.333 0L20.333 20L40.333 0"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0.333 12L20.333 32L40.333 12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default memo(Hero);
