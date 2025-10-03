const Feature1 = () => {
  return (
    <section className="relative min-h-[812px] flex items-center justify-center px-6 py-16 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-white border-2 border-gray-800 rounded-full px-8 py-3 mb-8">
          <span className="text-lg font-bold text-gray-900">Feature 1</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-6 px-4">
          스마트폰 사용 패턴을<br />
          바탕으로 부모님의<br />
          안부를 살필 수 있어요
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10 px-6">
          스마트폰 센서·사용 패턴 데이터를<br />
          AI가 매일 분석해<br />
          부모님의 하루를 그림형식으로 보여줘요
        </p>

        {/* Day Report Mockup */}
        <div className="w-full max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-4">
            {/* Report Header */}
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">오늘의 활동</p>
                  <p className="text-sm font-semibold">정상 패턴</p>
                </div>
              </div>
            </div>

            {/* Activity Items */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-medium">외출 확인됨</p>
                  <p className="text-xs text-gray-500">오전 9:30 - 오후 2:10</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-medium">스마트폰 사용</p>
                  <p className="text-xs text-gray-500">총 4시간 23분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
