import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8">
      {/* Hero Outer Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5DFCF] min-h-[460px] md:min-h-[520px] flex items-center">
        {/* Background Image: Warm morning scenery with ocean and mountains */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="바다와 산이 보이는 따뜻한 아침 풍경"
            fill
            priority
            className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle gradient overlay to guarantee text legibility & warm aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F0]/95 via-[#FAF7F0]/85 to-[#FAF7F0]/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F0]/90 via-transparent to-transparent sm:hidden" />
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 w-full py-10 px-6 sm:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5 text-left max-w-2xl">
            {/* Top Category / Welcome Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172B4D]/10 text-[#172B4D] backdrop-blur-xs border border-[#172B4D]/15">
              <span className="w-2 h-2 rounded-full bg-[#172B4D] animate-ping" />
              <span className="text-xs font-semibold tracking-wide">
                SY Lifestyle Magazine
              </span>
              <span className="text-[#172B4D]/40 text-xs">•</span>
              <span className="font-handwriting text-sm font-bold text-[#172B4D]">
                Small Steps, Big Dreams
              </span>
            </div>

            {/* Main Headline Copy */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#172B4D] tracking-tight leading-[1.25] break-keep drop-shadow-xs">
              <span className="block text-[#172B4D]">좋아하는 것들로</span>
              <span className="block text-[#172B4D] mt-1 sm:mt-1.5">
                더 특별한 일상을
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172B4D]/85 leading-relaxed font-normal break-keep max-w-xl">
              작은 농장에서 키우는 건강한 먹거리,
              <br className="hidden sm:inline" />
              좋아하는 영화와 드라마가 있는 여행,
              <br className="hidden sm:inline" />
              그리고 소소한 일상까지.
              <br />
              <span className="font-medium text-[#172B4D]">
                나만의 방식으로 채워가는 특별한 공간입니다.
              </span>
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/farm"
                className="px-5 py-3 rounded-full bg-[#172B4D] text-[#F7F5F0] text-sm font-semibold shadow-md hover:bg-[#2A4365] hover:shadow-lg transition-all duration-200 flex items-center gap-2 group"
              >
                <span>나의 작은 농장 둘러보기</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#about-section"
                className="px-5 py-3 rounded-full bg-white/80 hover:bg-white text-[#172B4D] text-sm font-semibold border border-[#DCD6C4] shadow-xs hover:shadow-md transition-all duration-200 backdrop-blur-xs"
              >
                About SY 이야기
              </Link>
            </div>
          </div>

          {/* Right Visual: Cute Lion Mascot, Camera, Book, Mug Vignette */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
            <div className="group relative w-64 sm:w-72 md:w-80 p-3 sm:p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {/* Image Frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF8F5]">
                <Image
                  src="/images/lion-mascot.jpg"
                  alt="책, 카메라, 머그컵과 함께하는 작은 사자 캐릭터 마스코트"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption Tag */}
              <div className="mt-3 px-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D5AE5B]" />
                  <span className="text-xs font-bold text-[#172B4D]">
                    SY Mascot Lion
                  </span>
                </div>
                <span className="font-handwriting text-sm text-[#172B4D]/75 font-semibold">
                  Small Steps ♡
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
