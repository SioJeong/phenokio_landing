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
      const heroSection = document.getElementById("hero");
      const registrationForm = document.getElementById("registration-form");

      if (heroSection && registrationForm) {
        const heroBottom = heroSection.offsetHeight;
        const formRect = registrationForm.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Hero 섹션을 지나야 함
        const isPastHero = scrollPosition > heroBottom - 100;

        // 폼이 뷰포트에 있는지 체크 (폼의 어느 부분이라도 화면에 보이면 true)
        const isFormInViewport = formRect.top < windowHeight && formRect.bottom > 0;

        // Hero를 지났고, 폼이 보이지 않을 때만 바텀바 표시
        setIsVisible(isPastHero && !isFormInViewport);
      }
    };

    handleScroll(); // 초기 상태 체크
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // 화면 크기 변경 시에도 체크
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
