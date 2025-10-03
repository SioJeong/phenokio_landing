import { TrendingUp } from "lucide-react";

const Feature3 = () => {
  return (
    <section className="relative min-h-[812px] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Decorative Graph Lines */}
        <div className="absolute top-20 left-0 w-full h-40 opacity-20">
          <svg viewBox="0 0 375 150" className="w-full h-full">
            <path d="M0,75 Q94,50 188,75 T375,75" stroke="#4A90E2" strokeWidth="2" fill="none" />
            <path d="M0,75 Q94,100 188,75 T375,60" stroke="#9B59B6" strokeWidth="2" fill="none" />
            <circle cx="125" cy="62" r="7" fill="#4A90E2" />
            <circle cx="63" cy="68" r="7" fill="#9B59B6" />
            <circle cx="19" cy="88" r="7" fill="#E74C3C" />
          </svg>
        </div>

        {/* Badge */}
        <div className="inline-block bg-white border-2 border-gray-800 rounded-full px-8 py-3 mb-8">
          <span className="text-lg font-bold text-gray-900">Feature 3</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-6 px-4">
          맞춤형 리포트와<br />
          인사이트를 제공해요
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10 px-6">
          활동 및 건강 상태를 종합 분석하여,<br />
          가족들이 쉽게 이해할 수 있도록<br />
          리포트형식으로 정리해 드려요
        </p>

        {/* Stats Card */}
        <div className="w-full max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-gray-900">40,689</span>
            <span className="text-lg text-green-600 font-semibold">↑ 12%</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">총 사용자</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            전월 대비 사용자가 증가하고 있어요
          </p>
        </div>

        {/* Chart Card */}
        <div className="w-full max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">활동 추이</span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between h-32 gap-2">
            {[40, 65, 55, 80, 95, 60, 45, 70, 50].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-primary to-primary/70 rounded-t-md transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>1월</span>
            <span>5월</span>
            <span>9월</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
