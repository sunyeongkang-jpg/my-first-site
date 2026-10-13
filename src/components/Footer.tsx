import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-[#EDE8DE] text-[#172B4D] overflow-hidden">
      {/* Top gentle wavy curve divider */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 text-[#F7F5F0] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        {/* Top Accent Vignette: Lion & Plant illustration */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-10 border-b border-[#D8D2C4] gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm bg-[#FAF8F5] shrink-0">
              <Image
                src="/images/lion-mascot.jpg"
                alt="SY 작은 사자 캐릭터 마스코트"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-[#172B4D]">SY Studio</span>
                <span className="text-xs bg-[#365C45]/15 text-[#365C45] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  🌱 Lifestyle Space
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#172B4D]/75 mt-0.5">
                식물을 가꾸고, 영화 속 길을 걷고, 매일의 온도를 기록합니다.
              </p>
            </div>
          </div>

          {/* Slogan Badge */}
          <div className="text-center sm:text-right">
            <span className="text-xs font-semibold tracking-wider text-[#172B4D]/60 uppercase">
              Brand Slogan
            </span>
            <div className="font-handwriting text-2xl sm:text-3xl font-bold text-[#172B4D]">
              Small Steps, Big Dreams
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 py-10 border-b border-[#D8D2C4] text-sm">
          {/* Col 1: Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#172B4D] text-[#F7F5F0] flex items-center justify-center font-bold text-sm">
                SY
              </span>
              <span className="font-bold text-base text-[#172B4D]">SY</span>
            </div>
            <p className="text-xs sm:text-sm text-[#172B4D]/75 leading-relaxed max-w-sm mb-4">
              좋아하는 것들로 더 특별한 일상을 만들어가는 개인 라이프스타일 플랫폼입니다.
              나만의 작은 농장, 영화와 드라마 여행, 일상기록, 커뮤니티로 소통합니다.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#172B4D]/70">
              <span className="inline-flex items-center gap-1">
                📍 Seoul, Korea
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                🌿 Eco-Friendly Notes
              </span>
            </div>
          </div>

          {/* Col 2: Navigation 1 */}
          <div>
            <h4 className="font-semibold text-xs tracking-wider uppercase text-[#172B4D]/60 mb-3">
              메뉴 둘러보기
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#172B4D] text-[#172B4D]/80 transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/farm" className="hover:text-[#365C45] text-[#172B4D]/80 transition-colors">
                  나의 작은 농장
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#873F4B] text-[#172B4D]/80 transition-colors">
                  영화 & 드라마
                </Link>
              </li>
              <li>
                <Link href="/daily" className="hover:text-[#D5AE5B] text-[#172B4D]/80 transition-colors">
                  일상기록
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-[#527CA4] text-[#172B4D]/80 transition-colors">
                  커뮤니티
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Topics */}
          <div>
            <h4 className="font-semibold text-xs tracking-wider uppercase text-[#172B4D]/60 mb-3">
              주요 콘텐츠
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#172B4D]/80">
              <li>
                <Link href="/farm#crops" className="hover:text-[#365C45] transition-colors">
                  재배 작물 일지
                </Link>
              </li>
              <li>
                <Link href="/media#locations" className="hover:text-[#873F4B] transition-colors">
                  촬영지 여행 코스
                </Link>
              </li>
              <li>
                <Link href="/daily#essays" className="hover:text-[#D5AE5B] transition-colors">
                  주말 포토 에세이
                </Link>
              </li>
              <li>
                <Link href="/community#board" className="hover:text-[#527CA4] transition-colors">
                  자유게시판 & 이야기
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="col-span-2">
            <h4 className="font-semibold text-xs tracking-wider uppercase text-[#172B4D]/60 mb-3">
              Contact & Connect
            </h4>
            <p className="text-xs text-[#172B4D]/75 mb-3 leading-relaxed">
              취향과 협업, 콘텐츠 문의는 언제나 환영합니다.
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#172B4D]">Email:</span>
                <a
                  href="mailto:contact@sy-lifestyle.kr"
                  className="text-[#172B4D] hover:underline"
                >
                  contact@sy-lifestyle.kr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#172B4D]">Brunch:</span>
                <span className="text-[#172B4D]/75">@sy_daily_notes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#172B4D]">Instagram:</span>
                <span className="text-[#172B4D]/75">@sy_smallsteps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#172B4D]/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 SY. All rights reserved.</span>
            <span>•</span>
            <span className="font-handwriting text-sm text-[#172B4D]/80">Small Steps, Big Dreams</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#172B4D]/50">Warm Lifestyle Magazine Platform</span>
            <span>•</span>
            <a
              href="#nav-logo"
              className="text-[#172B4D] font-medium hover:underline inline-flex items-center gap-1"
            >
              맨 위로 가기 ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
