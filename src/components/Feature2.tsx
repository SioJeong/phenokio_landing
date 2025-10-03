import { AlertCircle, MessageCircle, Heart } from "lucide-react";

const Feature2 = () => {
  return (
    <section className="relative min-h-[812px] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Caution Icon */}
        <div className="w-48 h-48 mx-auto mb-8 bg-yellow-50 rounded-full flex items-center justify-center">
          <AlertCircle className="w-24 h-24 text-yellow-500" />
        </div>

        {/* Badge */}
        <div className="inline-block bg-white border-2 border-gray-800 rounded-full px-8 py-3 mb-8">
          <span className="text-lg font-bold text-gray-900">Feature 2</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-6 px-4">
          이상신호가 감지되면<br />
          놓치지 않게 알려줘요
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10 px-6">
          외출 여부 등의 신호를 바탕으로<br />
          작은 이상 신호도 캐치해<br />
          건강 변화를 미리 알 수 있어요
        </p>

        {/* Alert Cards */}
        <div className="w-full max-w-xs mx-auto space-y-3">
          {/* Alert 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-gray-900">이상 감지</p>
              <p className="text-xs text-gray-600 mt-1">
                어머니가 오늘 아직 외출하지 않으셨어요
              </p>
            </div>
          </div>

          {/* Alert 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-gray-900">활동 감소</p>
              <p className="text-xs text-gray-600 mt-1">
                평소보다 활동량이 30% 감소했어요
              </p>
            </div>
          </div>

          {/* Alert 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-pink-500" />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-gray-900">건강 체크 필요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
