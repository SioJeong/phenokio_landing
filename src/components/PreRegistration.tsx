import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Share2, MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  consent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요",
  }),
});

type FormData = z.infer<typeof formSchema>;

const PreRegistration = () => {
  const [isConsentExpanded, setIsConsentExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
    },
  });

  const consentValue = watch("consent");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    // TODO: API 호출로 데이터 전송
  };

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
    // TODO: 실제 카카오톡 채널 URL로 변경
    window.open("https://pf.kakao.com/", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-block bg-white border-2 border-gray-800 rounded-full px-8 py-3">
            <span className="text-lg font-bold text-gray-900">사전등록</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4 text-center">
          2025년 10월<br />
          Comming SOON!
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10 text-center px-4">
          사전 등록 시, 피노키오가 출시되면 알림을 보내드려요!<br />
          이제 피노키오로 부모님을 더 똑똑하게 돌보세요!
        </p>

        {/* Registration Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-2xl shadow-lg p-6 mb-6">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                이름
              </Label>
              <Input
                id="name"
                placeholder="홍길동"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Consent Section */}
            <div className="border border-gray-200 rounded-lg p-4">
              <Label className="text-base font-semibold mb-3 block">
                개인정보 수집 및 이용 동의 *
              </Label>

              {/* Expandable Content */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="space-y-3 text-xs text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">1. 수집하는 개인정보 항목</p>
                    <p className="text-gray-600">이름, 연락처 정보 (이메일 주소 또는 휴대전화번호)</p>
                  </div>

                  {isConsentExpanded && (
                    <>
                      <div>
                        <p className="font-semibold mb-1">2. 개인정보 수집 및 이용 목적</p>
                        <p className="text-gray-600">
                          베타 테스터 프로그램 참여 안내 및 서비스 출시 알림 및 관련 정보 제공
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">3. 보유 및 이용기간</p>
                        <p className="text-gray-600">동의 철회 시 또는 목적 달성 시까지 (최대 1년)</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full mb-4"
                onClick={() => setIsConsentExpanded(!isConsentExpanded)}
              >
                {isConsentExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    접기
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    자세히 보기
                  </>
                )}
              </Button>

              {/* Consent Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={consentValue}
                  onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                />
                <label
                  htmlFor="consent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  개인정보 수집 및 이용에 동의합니다
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-xs mt-2">{errors.consent.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl text-base"
            >
              사전 등록하기
            </Button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">등록 완료!</h3>
            <p className="text-sm text-gray-600">출시 알림을 보내드릴게요</p>
          </div>
        )}

        {/* Beta Test Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg p-6 mb-6 text-white">
          <h3 className="text-lg font-bold mb-3">
            안드로이드는<br />
            BETA 테스트가 가능해요!
          </h3>
          <Button
            size="lg"
            variant="outline"
            className="w-full h-14 bg-white text-primary hover:bg-white/90 font-semibold rounded-xl border-0"
            onClick={() => window.open("#", "_blank")}
          >
            BETA 테스트 신청하기
          </Button>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            주변에 피노키오를<br />
            소개해주세요!
          </h3>
          <Button
            size="lg"
            variant="outline"
            className="w-full h-14 border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-xl"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5 mr-2" />
            공유하기
          </Button>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-base font-bold text-gray-900 mb-2">
            궁금한 점이 있으신가요?
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            카카오톡으로 친절하게 답변드릴게요.<br />
            (평일 10:00 ~ 19:00)
          </p>
          <Button
            size="lg"
            className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl"
            onClick={handleKakaoContact}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            카카오톡 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreRegistration;
