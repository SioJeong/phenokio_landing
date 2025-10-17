const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <h2 className="text-xl font-bold text-white mb-8">PHENOKIO</h2>

        {/* Company Info */}
        <div className="space-y-3 text-sm mb-6">
          <p>이메일: phenokio.team@gmail.com</p>
          <p>연락처: 010-4565-4155</p>
          <p>주소: 서울특별시 마포구 마포대로 89 포스트타워, 12층</p>
          <p className="text-gray-400 text-xs">
            Copyright © 2025 Phenokio. All rights reserved.
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
