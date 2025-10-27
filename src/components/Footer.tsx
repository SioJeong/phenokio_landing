const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <h2 className="text-xl font-bold text-white mb-8">PHENOKIO</h2>

        {/* Company Info */}
        <div className="space-y-6 text-sm mb-6">
          <div className="flex flex-row gap-4">
            <h3 className="font-bold min-w-[60px]">마도로스</h3>
            <div className="flex flex-col gap-1">
              <p>사업자등록번호: 218-21-71514</p>
              <p>경기도 양주시 옥정동로 190, 2605호</p>
              <p>대표: 마준영</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <h3 className="font-bold min-w-[60px]">문의</h3>
            <div className="flex flex-col gap-1">
              <p>010-6559-1312</p>
              <p>phenokio.team@gmail.com</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs">
            Copyright © 2025 Madoros. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-700">
          <a
            href="https://expensive-column-9a7.notion.site/2462dd8ca26280188094c121ebec4e44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors"
          >
            서비스 이용약관
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://expensive-column-9a7.notion.site/2462dd8ca2628006867ff303cdc70642"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors"
          >
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
