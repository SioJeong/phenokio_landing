import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";
import { submitPreRegistration } from "../lib/api";

const formSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
});

type FormData = z.infer<typeof formSchema>;

const PreRegistration = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!consentGiven) {
      toast.error("개인정보 수집 및 이용에 동의해주세요");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitPreRegistration(data);

      if (result.success) {
        toast.success(result.message);
        reset(); // 폼 초기화
        setConsentGiven(false); // 동의 체크 초기화
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
    window.open("https://open.kakao.com/o/s69ThYEh", "_blank");
  };

  const handleBetaTest = () => {
    window.open("https://link.phenok.io/invite", "_blank");
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#2d7bf2',
              secondary: '#fff',
            },
          },
        }}
      />
      <section
        className="relative min-h-screen flex items-center justify-center px-7 py-[94px] bg-[#97caff]"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 375 698\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"5.5\" gradientTransform=\"matrix(2.1454e-16 69.8 -33.014 -2.6483e-15 187.5 0)\"><stop stop-color=\"rgba(254,254,254,0.5)\" offset=\"0\"/><stop stop-color=\"rgba(255,255,255,0)\" offset=\"1\"/></radialGradient></defs></svg>')"
        }}
      >
        <div className="relative z-10 w-full max-w-[319px] mx-auto flex flex-col gap-12 items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-6 items-center w-[270px]">
          {/* Badge */}
          <div className="bg-[#fefefe] border border-[#2d7bf2] rounded-[50px] px-[25px] py-3">
            <span className="font-semibold text-[18px] text-[#2d7bf2] leading-normal">사전등록</span>
          </div>

          {/* Title */}
          <h2 className="font-bold text-[30px] text-[#082b61] leading-[1.35] tracking-[-0.9px] text-center w-full" style={{ width: 'min-content', minWidth: '100%' }}>
            2025년 10월<br />
            Comming SOON!
          </h2>

          {/* Description */}
          <p className="font-medium text-[18px] text-[#363d47] leading-[1.4] text-center whitespace-pre-wrap">
            사전 등록 시, 피노키오가 출시되면{"\n"}알림을 보내드려요! 이제 피노키오로{"\n"}부모님을 더 똑똑하게 돌보세요!
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[rgba(254,254,254,0.2)] border border-[#fefefe] rounded-[20px] px-6 pt-5 pb-6 flex flex-col gap-6 w-full">
          {/* Name Field */}
          <div className="flex flex-col gap-3 w-full">
            <label className="font-semibold text-[16px] text-[#363d47] leading-[1.4]">
              이름
            </label>
            <div className="w-full">
              <input
                {...register("name")}
                placeholder="텍스트"
                className="w-full bg-[#f6f7f9] rounded-[12px] px-4 py-4 font-medium text-[14px] text-[#363d47] placeholder:text-[#bdc5d0] leading-[1.4] tracking-[-0.14px] lowercase outline-none"
              />
              {errors.name && (
                <p className="text-[#d92d20] text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-3 w-full">
            <label className="font-semibold text-[16px] text-[#363d47] leading-[1.4]">
              이메일
            </label>
            <div className="w-full">
              <input
                {...register("email")}
                type="email"
                placeholder="텍스트"
                className="w-full bg-[#f6f7f9] rounded-[12px] px-4 py-4 font-medium text-[14px] text-[#363d47] placeholder:text-[#bdc5d0] leading-[1.4] tracking-[-0.14px] lowercase outline-none"
              />
              {errors.email && (
                <p className="text-[#d92d20] text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Consent Section */}
          <div className="bg-[#fefefe] rounded-[16px] px-5 py-4 flex flex-col gap-2 w-full">
            <p className="font-semibold text-[16px] text-[#363d47] leading-[1.4] tracking-[-0.16px] lowercase">
              개인정보 수집 및 이용 동의 <span className="text-[#d92d20]">*</span>
            </p>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col text-[12px] leading-[1.4]">
                <p className="font-semibold text-[#5d6673]">1. 수집하는 개인정보 항목</p>
                <p className="font-medium text-[#8d94a0]">이름, 연락처 정보 (이메일 주소 또는 휴대전화번호)</p>
              </div>

              <div className="flex flex-col text-[12px] leading-[1.4]">
                <p className="font-semibold text-[#5d6673]">2. 개인정보 수집 및 이용 목적</p>
                <p className="font-medium text-[#8d94a0]">베타 테스터 프로그램 참여 안내 및 서비스 출시 알림 및 관련 정보 제공</p>
              </div>

              <div className="flex flex-col text-[12px] leading-[1.4]">
                <p className="font-semibold text-[#5d6673]">3. 보유 및 이용기간</p>
                <p className="font-medium text-[#8d94a0]">동의 철회 시 또는 목적 달성 시까지 (최대 1년)</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setConsentGiven(true)}
              disabled={consentGiven}
              className={`w-full h-[43px] rounded-[12px] px-4 py-4 flex items-center justify-center font-semibold text-[14px] leading-[1.4] tracking-[-0.14px] lowercase transition-colors ${
                consentGiven
                  ? 'bg-[#2d7bf2] text-[#fefefe]'
                  : 'bg-[#eaecf0] text-[#8d94a0]'
              }`}
            >
              동의합니다
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!consentGiven || isSubmitting}
            className={`w-full rounded-[12px] px-4 py-4 flex items-center justify-center gap-1 font-semibold text-[18px] leading-[1.35] tracking-[-0.18px] transition-colors ${
              consentGiven && !isSubmitting
                ? 'bg-[#2d7bf2] text-[#fefefe]'
                : 'bg-[#eaecf0] text-[#8d94a0]'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                제출 중...
              </>
            ) : (
              <>
                사전 등록 신청하기
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Beta Test Section */}
        <div className="bg-[rgba(254,254,254,0.5)] border border-[#fefefe] rounded-[20px] p-5 flex flex-col gap-3 w-[319px]">
          <p className="font-bold text-[24px] text-[#082b61] leading-[1.35] tracking-[-0.72px] text-center w-full">
            안드로이드는<br />
            BETA 테스트가 가능해요!
          </p>
          <button
            onClick={handleBetaTest}
            className="w-full bg-[#082b61] rounded-[12px] px-4 py-4 flex items-center justify-center gap-1 font-semibold text-[18px] text-[#fefefe] leading-[1.35] tracking-[-0.18px]"
          >
            BETA 테스트 하러가기
            <svg className="w-[20px] h-[20px]" viewBox="0 0 22 22" fill="none">
              <path d="M16.5 5.5L5.5 16.5M16.5 5.5H5.5M16.5 5.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Share Section */}
        <div className="bg-[rgba(254,254,254,0.5)] border border-[#fefefe] rounded-[20px] p-5 flex flex-col gap-3 w-[319px]">
          <p className="font-bold text-[24px] text-[#082b61] leading-[1.35] tracking-[-0.72px] text-center w-full">
            주변에 피노키오를<br />
            소개해주세요!
          </p>
          <button
            onClick={handleShare}
            className="w-full bg-[#2d7bf2] rounded-[12px] px-4 py-4 flex items-center justify-center gap-1 font-semibold text-[18px] text-[#fefefe] leading-[1.35] tracking-[-0.18px]"
          >
            링크 복사하기
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_225_905" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_225_905)">
                <path d="M10.0833 15.5832H6.41659C5.14853 15.5832 4.06763 15.1363 3.17388 14.2425C2.28013 13.3488 1.83325 12.2679 1.83325 10.9998C1.83325 9.73178 2.28013 8.65088 3.17388 7.75713C4.06763 6.86338 5.14853 6.4165 6.41659 6.4165H10.0833V8.24984H6.41659C5.6527 8.24984 5.00339 8.5172 4.46867 9.05192C3.93395 9.58664 3.66659 10.2359 3.66659 10.9998C3.66659 11.7637 3.93395 12.413 4.46867 12.9478C5.00339 13.4825 5.6527 13.7498 6.41659 13.7498H10.0833V15.5832ZM7.33325 11.9165V10.0832H14.6666V11.9165H7.33325ZM11.9166 15.5832V13.7498H15.5833C16.3471 13.7498 16.9964 13.4825 17.5312 12.9478C18.0659 12.413 18.3333 11.7637 18.3333 10.9998C18.3333 10.2359 18.0659 9.58664 17.5312 9.05192C16.9964 8.5172 16.3471 8.24984 15.5833 8.24984H11.9166V6.4165H15.5833C16.8513 6.4165 17.9322 6.86338 18.826 7.75713C19.7197 8.65088 20.1666 9.73178 20.1666 10.9998C20.1666 12.2679 19.7197 13.3488 18.826 14.2425C17.9322 15.1363 16.8513 15.5832 15.5833 15.5832H11.9166Z" fill="currentColor"/>
              </g>
            </svg>
          </button>
        </div>

        {/* Contact Section */}
        <div className="bg-[rgba(254,254,254,0.5)] border border-[#fefefe] rounded-[20px] p-5 flex flex-col gap-4 items-center w-[319px]">
          <div className="flex flex-col gap-3 items-center text-center w-full">
            <p className="font-bold text-[24px] text-[#082b61] leading-[1.35] tracking-[-0.72px]" style={{ width: 'min-content', minWidth: '100%' }}>
              궁금한 점이 있으신가요?
            </p>
            <p className="font-medium text-[16px] leading-[1.4]">
              <span className="text-[#5d6673]">
                카카오톡으로 친절하게 답변드릴게요.
                <br />
              </span>
              <span className="text-[#8d94a0]">(평일 10:00 ~ 19:00)</span>
            </p>
          </div>
          <button
            onClick={handleKakaoContact}
            className="w-full bg-[#2d7bf2] rounded-[12px] px-4 py-4 flex items-center justify-center font-semibold text-[18px] text-[#fefefe] leading-[1.35] tracking-[-0.18px]"
          >
            카카오톡 상담하기
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default PreRegistration;
