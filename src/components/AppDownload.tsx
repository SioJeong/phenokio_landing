const AppDownload = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "피노키오",
        text: "멀리있어도 부모님의 하루를 안심할 수 있도록",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    }
  };

  const handleKakaoContact = () => {
    window.open("http://pf.kakao.com/_VSCcn/chat", "_blank");
  };

  const handleGooglePlayDownload = () => {
    // Meta Pixel 표준 이벤트: Lead
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Google Play Download",
        content_category: "App Download",
        value: 0,
        currency: "KRW",
      });
    }

    window.open(
      "https://play.google.com/store/apps/details?id=com.mink.phenokio&hl=ko",
      "_blank",
    );
  };

  const handleAppStoreDownload = () => {
    // Meta Pixel 표준 이벤트: Lead
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "App Store Download",
        content_category: "App Download",
        value: 0,
        currency: "KRW",
      });
    }

    window.open("https://phenoki.onelink.me/WI9R/suzw5zsx", "_blank");
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-7 md:px-8 lg:px-12 py-[94px] md:py-24 lg:py-28 bg-[#97caff]"
      style={{
        backgroundImage:
          'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 375 698" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="5.5" gradientTransform="matrix(2.1454e-16 69.8 -33.014 -2.6483e-15 187.5 0)"><stop stop-color="rgba(254,254,254,0.5)" offset="0"/><stop stop-color="rgba(255,255,255,0)" offset="1"/></radialGradient></defs></svg>\')',
      }}
    >
      <div className="relative z-10 w-full max-w-[319px] md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center w-[270px] md:w-auto">
          {/* Badge */}
          <div className="bg-[#fefefe] border border-[#2d7bf2] rounded-[50px] px-[25px] md:px-8 lg:px-10 py-3 md:py-4">
            <span className="font-semibold text-[18px] md:text-xl lg:text-2xl text-[#2d7bf2] leading-normal">
              다운로드
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-bold text-[28px] md:text-4xl lg:text-5xl xl:text-6xl text-[#082b61] leading-[1.35] tracking-[-0.9px] text-center w-full"
            style={{ width: "min-content", minWidth: "100%" }}
          >
            지금 무료로
            <br />
            피노키오를
            <br />
            시작하세요!
          </h2>

          {/* Description */}
          <p className="font-medium text-[20px] md:text-2xl lg:text-3xl text-[#363d47] leading-[1.4] text-center whitespace-pre-wrap">
            멀리있어도 부모님의 하루를{"\n"}안심할 수 있도록 도와드려요!
          </p>
        </div>

        {/* Character Image - positioned behind buttons */}
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] flex items-center justify-center">
          <img
            src="/animation_mascot.gif"
            alt="피노키오 캐릭터"
            className="w-[180px] md:w-[220px] lg:w-[260px] h-[400px] md:h-[480px] lg:h-[560px] object-contain z-[1]"
          />
        </div>

        {/* Download Section */}
        <div className="bg-[rgba(254,254,254,0.2)] border border-[#fefefe] rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-5 md:p-6 lg:p-8 flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
          {/* Google Play Store Button */}
          <button
            onClick={handleGooglePlayDownload}
            className="w-full bg-[#000000] rounded-[12px] md:rounded-[16px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-center gap-3 md:gap-4 font-semibold text-[18px] md:text-xl lg:text-2xl text-[#fefefe] leading-[1.35] tracking-[-0.18px] hover:bg-[#333333] transition-colors"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.53 20.75,12C20.75,12.47 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play 다운로드
          </button>

          {/* App Store Button */}
          <button
            onClick={handleAppStoreDownload}
            className="w-full bg-[#000000] rounded-[12px] md:rounded-[16px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-center gap-3 md:gap-4 font-semibold text-[18px] md:text-xl lg:text-2xl text-[#fefefe] leading-[1.35] tracking-[-0.18px] hover:bg-[#333333] transition-colors"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            App Store 다운로드
          </button>
        </div>

        {/* Share Section */}
        <div className="bg-[rgba(254,254,254,0.5)] border border-[#fefefe] rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-5 md:p-6 lg:p-8 flex flex-col gap-3 md:gap-4 lg:gap-5 w-[319px] md:w-full">
          <p className="font-bold text-[24px] md:text-3xl lg:text-4xl text-[#082b61] leading-[1.35] tracking-[-0.72px] text-center w-full">
            주변에 피노키오를
            <br />
            소개해주세요!
          </p>
          <button
            onClick={handleShare}
            className="w-full bg-[#2d7bf2] rounded-[12px] md:rounded-[16px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-center gap-3 md:gap-4 font-semibold text-[18px] md:text-xl lg:text-2xl text-[#fefefe] leading-[1.35] tracking-[-0.18px]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_225_905"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_225_905)">
                <path
                  d="M10.0833 15.5832H6.41659C5.14853 15.5832 4.06763 15.1363 3.17388 14.2425C2.28013 13.3488 1.83325 12.2679 1.83325 10.9998C1.83325 9.73178 2.28013 8.65088 3.17388 7.75713C4.06763 6.86338 5.14853 6.4165 6.41659 6.4165H10.0833V8.24984H6.41659C5.6527 8.24984 5.00339 8.5172 4.46867 9.05192C3.93395 9.58664 3.66659 10.2359 3.66659 10.9998C3.66659 11.7637 3.93395 12.413 4.46867 12.9478C5.00339 13.4825 5.6527 13.7498 6.41659 13.7498H10.0833V15.5832ZM7.33325 11.9165V10.0832H14.6666V11.9165H7.33325ZM11.9166 15.5832V13.7498H15.5833C16.3471 13.7498 16.9964 13.4825 17.5312 12.9478C18.0659 12.413 18.3333 11.7637 18.3333 10.9998C18.3333 10.2359 18.0659 9.58664 17.5312 9.05192C16.9964 8.5172 16.3471 8.24984 15.5833 8.24984H11.9166V6.4165H15.5833C16.8513 6.4165 17.9322 6.86338 18.826 7.75713C19.7197 8.65088 20.1666 9.73178 20.1666 10.9998C20.1666 12.2679 19.7197 13.3488 18.826 14.2425C17.9322 15.1363 16.8513 15.5832 15.5833 15.5832H11.9166Z"
                  fill="currentColor"
                />
              </g>
            </svg>
            링크 복사하기
          </button>
        </div>

        {/* Contact Section */}
        <div className="bg-[rgba(254,254,254,0.5)] border border-[#fefefe] rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-5 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 lg:gap-6 items-center w-[319px] md:w-full">
          <div className="flex flex-col gap-3 md:gap-4 items-center text-center w-full">
            <p
              className="font-bold text-[24px] md:text-3xl lg:text-4xl text-[#082b61] leading-[1.35] tracking-[-0.72px]"
              style={{ width: "min-content", minWidth: "100%" }}
            >
              궁금한 점이 있으신가요?
            </p>
            <p className="font-medium text-[16px] md:text-lg lg:text-xl leading-[1.4]">
              <span className="text-[#5d6673]">
                카카오톡으로 친절하게 답변드릴게요.
                <br />
              </span>
              <span className="text-[#5d6673] text-sm md:text-base lg:text-lg">
                (평일 10:00 ~ 19:00)
              </span>
            </p>
          </div>
          <button
            onClick={handleKakaoContact}
            className="w-full bg-[#FEE500] rounded-[12px] md:rounded-[16px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-center gap-3 md:gap-4 font-semibold text-[18px] md:text-xl lg:text-2xl text-[#000000] leading-[1.35] tracking-[-0.18px]"
          >
            <img
              src="/kakao.svg"
              alt="카카오톡 아이콘"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
            카카오톡 문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
