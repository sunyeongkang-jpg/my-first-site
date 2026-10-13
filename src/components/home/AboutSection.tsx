import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const categoryPillars = [
    {
      name: "나의 작은 농장",
      sub: "초록빛 위로",
      color: "bg-[#365C45]",
      lightColor: "bg-[#F0F6EE]",
      textColor: "text-[#365C45]",
      href: "/farm",
      icon: (
        <svg className="w-5 h-5 text-[#365C45]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 4 6 4 11c0 5 4 9 8 9s8-4 8-9c0-5-4-9-8-9zm0 16c-3 0-6-3-6-7 0-3 2-6 6-6s6 3 6 6c0 4-3 7-6 7z" />
        </svg>
      ),
    },
    {
      name: "영화 & 드라마",
      sub: "시네마 로케이션",
      color: "bg-[#873F4B]",
      lightColor: "bg-[#FDF2F4]",
      textColor: "text-[#873F4B]",
      href: "/media",
      icon: (
        <svg className="w-5 h-5 text-[#873F4B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h3.2l-2-3H4v3zm5.6 0h3.2l-2-3H7.6l2 3zm5.6 0h3.2l-2-3h-3.2l2 3zM20 6v3h-1.2l-2-3H20z" />
        </svg>
      ),
    },
    {
      name: "일상기록",
      sub: "소소한 다이어리",
      color: "bg-[#D5AE5B]",
      lightColor: "bg-[#FDF7E9]",
      textColor: "text-[#98772E]",
      href: "/daily",
      icon: (
        <svg className="w-5 h-5 text-[#D5AE5B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      ),
    },
    {
      name: "커뮤니티",
      sub: "따뜻한 연결",
      color: "bg-[#527CA4]",
      lightColor: "bg-[#EEF4FA]",
      textColor: "text-[#527CA4]",
      href: "/community",
      icon: (
        <svg className="w-5 h-5 text-[#527CA4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Editorial Card Box */}
      <div className="relative rounded-3xl bg-white/90 border border-[#E8E2D2] shadow-md p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#FAF5E8]/60 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title Area */}
          <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-[#E8E2D2] pb-6 lg:pb-0 lg:pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172B4D]/5 text-[#172B4D] text-xs font-semibold">
              <span>브랜드 스토리</span>
              <span>✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
              About Me ♡
            </h2>

            <div className="pt-2">
              <p className="text-xl sm:text-2xl font-bold text-[#172B4D] leading-snug break-keep">
                관심사로 연결된
                <br />
                <span className="text-[#873F4B]">나만의 라이프스타일</span>
              </p>
            </div>
          </div>

          {/* Center Description Area */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#172B4D]/85 leading-relaxed break-keep font-normal">
              나의 작은 농장, 영화와 드라마, 일상기록, 커뮤니티까지.
              <br />
              좋아하는 것들을 더 깊이 즐기고,
              <br />
              나와 같은 취향을 가진 사람들과 함께하는 특별한 공간입니다.
            </p>
            <p className="text-xs sm:text-sm text-[#172B4D]/70 leading-relaxed break-keep">
              거창하지 않아도 좋습니다. 작은 씨앗에서 피어난 잎사귀 한 장, 영화 속 대사 한 줄, 
              조용한 카페에서 적어 내려간 한 쪽의 일기가 모여 삶을 풍성하게 만듭니다.
            </p>
          </div>

          {/* Right: 4 Category Mini Icons */}
          <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-end">
            <div className="grid grid-cols-2 gap-3 w-full max-w-[240px]">
              {categoryPillars.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`p-3 rounded-2xl ${item.lightColor} border border-black/5 flex flex-col items-center text-center transition-all duration-200 hover:scale-105 hover:shadow-xs group`}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xs mb-1.5 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-bold ${item.textColor}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#172B4D]/60 mt-0.5">
                    {item.sub}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Thin divider line and Bottom handwritten phrase */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#EDE7D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D5CEBE]">
              <Image
                src="/images/lion-mascot.jpg"
                alt="SY Mascot"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-[#172B4D]/70 font-medium">
              SY와 함께 따뜻한 영감을 채워보세요.
            </span>
          </div>

          {/* Handwritten accent: “Always, with you ♡” */}
          <div className="font-handwriting text-2xl sm:text-3xl font-bold text-[#873F4B] tracking-wide select-none">
            Always, with you ♡
          </div>
        </div>
      </div>
    </section>
  );
}
