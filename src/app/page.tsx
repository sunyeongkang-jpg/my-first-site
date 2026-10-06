import Image from "next/image";

export default function Home() {
  const stackItems = [
    { name: "TypeScript", desc: "안정적인 정적 타입 시스템", icon: "TS" },
    { name: "App Router", desc: "Next.js 최신 라우팅 아키텍처", icon: "App" },
    { name: "Tailwind CSS", desc: "유연하고 현대적인 유틸리티 스타일링", icon: "TW" },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-gradient-to-b from-[#F7F5F0] via-[#EAEFF7] to-[#F7F5F0] text-black flex flex-col justify-center items-center px-4 sm:px-8 py-5 sm:py-6 selection:bg-indigo-500 selection:text-white">
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5 my-auto">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/30 bg-emerald-500/10 text-emerald-800 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
          <span>프로젝트 준비 완료</span>
        </div>

        {/* Hero Section */}
        <div className="w-full space-y-2.5 sm:space-y-3 text-center flex flex-col items-center justify-center">
          <h1 className="w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center leading-tight text-black break-keep">
            <span className="block">안녕하세요!</span>
            <span className="block mt-1 sm:mt-1.5 whitespace-nowrap">
              <span>『</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-blue-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">
                농사짓는 여우 
              </span>
              <span>』입니다</span>
            </span>
          </h1>

          {/* Profile Image (Circular) */}
          <div className="py-1 shrink-0">
            <Image
              src="/profile.jpg"
              alt="농사짓는 여우 사진"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto aspect-square shrink-0"
              priority
            />
          </div>

          <p className="text-black text-xs sm:text-base max-w-md mx-auto text-center font-medium leading-relaxed break-keep px-2">
            가장 단순하고 깔끔하게 구성된 Next.js 스타터 템플릿입니다.
          </p>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full text-left">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="p-2.5 sm:p-3 rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm shadow-xs transition hover:border-slate-400 flex sm:flex-col items-start gap-2.5 sm:gap-0"
            >
              <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 sm:mb-1.5 shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-xs sm:text-sm text-black truncate">{item.name}</h2>
                <p className="text-[11px] text-black/75 mt-0.5 break-keep">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guide Box */}
        <div className="w-full p-3 sm:p-4 rounded-xl border border-slate-300 bg-white/90 text-black text-left space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-xs text-black/70 border-b border-slate-200 pb-1.5 gap-2">
            <span className="font-medium shrink-0">시작하기 (PowerShell)</span>
            <span className="font-mono text-black font-semibold truncate">npm run dev</span>
          </div>
          <p className="text-xs text-black leading-relaxed break-keep">
            아래 파일을 수정하면 브라우저에 바로 반영됩니다:
          </p>
          <div className="font-mono text-xs bg-slate-100 px-2.5 py-1.5 rounded-lg text-blue-700 border border-slate-200 font-semibold break-all">
            src/app/page.tsx
          </div>
        </div>
      </main>
    </div>
  );
}
