const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 pb-20 md:pb-24 lg:pb-28">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {/* Logo */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 md:mb-10 lg:mb-12">
          PHENOKIO
        </h2>

        {/* Company Info */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10 text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10">
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
            <h3 className="font-bold min-w-[60px] md:min-w-[80px] lg:min-w-[100px]">
              마도로스
            </h3>
            <div className="flex flex-col gap-1 md:gap-2">
              <p>사업자등록번호: 218-21-71514</p>
              <p>경기도 양주시 옥정동로 190, 2605호</p>
              <p>대표: 마준영</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
            <h3 className="font-bold min-w-[60px] md:min-w-[80px] lg:min-w-[100px]">
              문의
            </h3>
            <div className="flex flex-col gap-1 md:gap-2">
              <p>010-6559-1312</p>
              <p>phenokio.team@gmail.com</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm lg:text-base">
            Copyright © 2025 Madoros. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8 lg:pt-10 border-t border-gray-700">
          <a
            href="https://expensive-column-9a7.notion.site/2462dd8ca26280188094c121ebec4e44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base lg:text-lg hover:text-white transition-colors"
          >
            서비스 이용약관
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://expensive-column-9a7.notion.site/2462dd8ca2628006867ff303cdc70642"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base lg:text-lg hover:text-white transition-colors"
          >
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
