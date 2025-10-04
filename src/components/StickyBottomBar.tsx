import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface StickyBottomBarProps {
  onCTAClick: (buttonId: string) => void;
}

const StickyBottomBar = ({ onCTAClick }: StickyBottomBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero 섹션 높이보다 스크롤이 내려가면 표시
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }
    };

    handleScroll(); // 초기 상태 체크
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50 p-3 sm:p-4">
      <div className="max-w-md mx-auto">
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              피노키오 사전 등록하기
            </p>
            <p className="text-sm text-gray-600">
              출시 알림을 가장 먼저 받아보세요
            </p>
          </div>
          <Button
            className="bg-[#082B61] hover:bg-[#0A3575] text-white rounded-full px-6 py-3 font-semibold whitespace-nowrap"
            onClick={() => onCTAClick("sticky_bottom")}
          >
            사전 등록하기
            <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
          </Button>
        </div>

        {/* Mobile layout */}
        <div className="sm:hidden flex flex-col space-y-3">
          <div className="text-center">
            <p className="text-base font-semibold text-gray-900 leading-tight">
              피노키오 사전 등록하기
            </p>
            <p className="text-xs text-gray-600 mt-1">
              출시 알림을 가장 먼저 받아보세요
            </p>
          </div>
          <Button
            className="w-full bg-[#082B61] hover:bg-[#0A3575] text-white rounded-full py-3 font-semibold text-sm"
            onClick={() => onCTAClick("sticky_bottom")}
          >
            사전 등록하기
            <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomBar;
