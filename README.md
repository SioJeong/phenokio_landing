# 피노키오 랜딩페이지

멀리있어도 부모님의 하루를 안심할 수 있도록 - 스마트폰 사용 패턴으로 부모님의 건강을 지키는 똑똑한 케어 서비스

## 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Form**: React Hook Form + Zod
- **Deployment**: Vercel

## 개발 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

## 프로젝트 구조

```
src/
├── components/       # 컴포넌트
│   ├── ui/          # shadcn/ui 컴포넌트
│   ├── Hero.tsx     # 히어로 섹션
│   ├── WhySection.tsx
│   ├── Feature1.tsx
│   ├── Feature2.tsx
│   ├── Feature3.tsx
│   ├── PreRegistration.tsx
│   └── Footer.tsx
├── pages/           # 페이지
│   └── Index.tsx
├── lib/             # 유틸리티
│   └── utils.ts
├── App.tsx          # 메인 앱
└── main.tsx         # 엔트리 포인트
```

## 배포

Vercel에 자동 배포됩니다.

```bash
# Vercel CLI로 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 기능

- ✅ 반응형 디자인 (모바일 우선)
- ✅ 사전등록 폼 (React Hook Form + Zod 검증)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 공유 기능 (Web Share API)
- ✅ SEO 최적화
