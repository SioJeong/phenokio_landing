import { memo } from "react";

const ServiceTerminationNotice = memo(() => {
  return (
    <div className="w-full max-w-[375px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="bg-red-500 border-2 border-red-600 rounded-lg p-6 md:p-8 text-center shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-600 rounded-full p-2 mr-3">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            위치기반서비스 종료 안내
          </h3>
        </div>

        <div className="text-sm md:text-base text-white leading-relaxed space-y-3">
          <p>
            피노키오는 운영 예산 부족으로 인해
            <br />
            위치기반서비스를{" "}
            <strong className="text-yellow-200">2026년 1월 19일</strong>부로
            종료합니다.
          </p>
          <p>
            서비스 종료에 따라 개인 위치정보는
            <br />
            「위치정보의 보호 및 이용 등에 관한 법률」 등
            <br />
            관련 법령에 따라 파기됩니다.
          </p>
          <p>
            본 공지는 위치기반서비스 종료에 대한 사전 안내이며,
            <br />본 페이지는 종료일 이후에도 일정 기간 유지됩니다.
          </p>
          <div className="bg-red-600 rounded-lg p-3 mt-4">
            <p className="font-semibold text-yellow-200">
              문의: phenokio.team@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ServiceTerminationNotice;
