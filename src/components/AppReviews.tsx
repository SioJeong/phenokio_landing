const reviews = [
  {
    id: 1,
    author: "유더미",
    content:
      "이런 좋은 어플 만들어주셔서 감사합니다. 솔직히 믿음반 의심반으로 깔아본 어플인데.. 멀리 계시는 부모님 안부를 살필 수 있어서 덕분에 많은 안심이 되네요..",
  },
  {
    id: 2,
    author: "former420",
    content:
      "엄마의 안부를 묻지 못하고 하루가 바삐 지나가버리거나 통화 중 엄마의 목소리 너머의 일상을 다 알 수 없을 때 피노키오 앱은 다정한 도움이 됩니다.",
  },
  {
    id: 3,
    author: "최욱진",
    content:
      "신생 앱이지만 실사용자의 의견과 바램이 반영되는 무게감있는 앱입니다 피드백 반영에 적극적이고 지속적인 기능구현에 노력해서 지속적으로 사용하고싶습니다 비슷한앱들이 많지만 무료에 광고도없고 좋습니다 유료화되어도 지금처럼 변함이없다면 쭉 사용할겁니다",
  },
  {
    id: 4,
    author: "배성민",
    content:
      "손자가 추천해줘서 사용했는데 너무 좋아요 손자랑 더 가까워진거 같아요",
  },
  {
    id: 5,
    author: "땃마",
    content:
      "가족들과 멀리 떨어져 있어도 근황을 계속 확인 할 수 있어서 너무 좋아요!",
  },
  {
    id: 6,
    author: "솸재",
    content:
      "행여나 부모님이 괜찮으신지 노심초사하면서 직접 연락하지 않아도 잘 알아볼 수 있어서 너무 편합니다. 신세대 사이버 효자효녀가 될 수 있어요.",
  },
  {
    id: 7,
    author: "강민아",
    content:
      "아들이 너무 티비만 본다고 한 번 써보라며 등록해줬는데 활동도 추천해주고 평소에 바빠 연락이 뜸했던 가족들과 하루종일 있었던 일상을 소통할 수 있어서 너무 너무 편리하고 좋아요",
  },
  {
    id: 8,
    author: "찬우",
    content:
      "좋아요. 어머니께 설치해드렸는데 서로 더욱 편하게 연락하고 정보를 공유하고 있어요 ~",
  },
  {
    id: 9,
    author: "wow wow",
    content:
      "할머니가 연세 있으시고 혼자 생활하셔서 걱정이 되어 깔아드렸는데 할머니가 외로우시지 않게 생활 패턴도 추천해주고 알림도 친근하게 설정되어 있어 엄청 만족하셨어요",
  },
];

const AppReviews = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-[#f8fbff] overflow-hidden">
      <div className="max-w-[375px] mx-auto px-6 mb-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 items-center text-center">
          <div className="bg-[#e8f3ff] border border-[#2d7bf2] rounded-[50px] px-6 py-2">
            <span className="font-semibold text-[16px] text-[#2d7bf2] leading-normal">
              사용자 후기
            </span>
          </div>
          <h2 className="font-bold text-[28px] text-[#082b61] leading-[1.35] tracking-[-0.84px]">
            피노키오와 함께하는
            <br />
            사용자들의 이야기
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8fbff] to-transparent z-10" />

        {/* Scrolling Reviews */}
        <div className="flex gap-4 animate-scroll">
          {/* First set of reviews */}
          {reviews.map((review) => (
            <div
              key={`first-${review.id}`}
              className="flex-shrink-0 w-[280px] bg-white rounded-[16px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#e8f3ff]"
            >
              <p className="font-medium text-[14px] text-[#2d7bf2] leading-[1.4] mb-3">
                {review.author}
              </p>
              <p className="font-normal text-[15px] text-[#5d6673] leading-[1.6]">
                {review.content}
              </p>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review) => (
            <div
              key={`second-${review.id}`}
              className="flex-shrink-0 w-[280px] bg-white rounded-[16px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#e8f3ff]"
            >
              <p className="font-medium text-[14px] text-[#2d7bf2] leading-[1.4] mb-3">
                {review.author}
              </p>
              <p className="font-normal text-[15px] text-[#5d6673] leading-[1.6]">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * ${reviews.length} - ${
          reviews.length * 16
        }px));
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default AppReviews;
