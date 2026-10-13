import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LatestPreviewSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-[#E6E0D1] gap-2">
        <div>
          <span className="text-xs font-bold text-[#172B4D]/60 tracking-wider uppercase">
            Magazine Editorial
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] tracking-tight mt-1">
            이주의 라이프스타일 픽
          </h2>
        </div>
        <span className="text-xs text-[#172B4D]/60">
          Small Steps, Big Dreams Archive
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Item 1: Farm Story */}
        <Link
          href="/farm#recipes"
          className="group p-6 rounded-3xl bg-white/80 hover:bg-white border border-[#E8E2D2] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full bg-[#F0F6EE] text-[#365C45] text-xs font-bold">
                🌱 농장 이야기
              </span>
              <span className="text-xs text-[#172B4D]/50 font-mono">2026.10</span>
            </div>
            <h3 className="text-lg font-bold text-[#172B4D] group-hover:text-[#365C45] transition-colors leading-snug">
              베란다 텃밭 첫 수확: 향긋한 바질페스토 파스타
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#172B4D]/75 leading-relaxed line-clamp-3">
              씨앗부터 정성껏 기른 스위트 바질 잎을 똑똑 땄습니다. 방 안 가득 퍼지는 상쾌한 허브 향과 함께 차려낸 소박하지만 근사한 주말 브런치 식탁.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#365C45] font-semibold">
            <span>레시피와 일지 읽기</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

        {/* Item 2: Movie & Location */}
        <Link
          href="/media#locations"
          className="group p-6 rounded-3xl bg-white/80 hover:bg-white border border-[#E8E2D2] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full bg-[#FDF2F4] text-[#873F4B] text-xs font-bold">
                🎬 시네마 트래블
              </span>
              <span className="text-xs text-[#172B4D]/50 font-mono">군위 화본마을</span>
            </div>
            <h3 className="text-lg font-bold text-[#172B4D] group-hover:text-[#873F4B] transition-colors leading-snug">
              영화 &lt;리틀 포레스트&gt;의 온기를 찾아 떠난 사계절 기차역
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#172B4D]/75 leading-relaxed line-clamp-3">
              “남들과 다른 방식으로 살아도 괜찮아.” 혜원의 집 처마 밑에서 풍경 소리를 들으며 복잡했던 마음을 차분히 정리했던 가을날의 소도시 기행.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#873F4B] font-semibold">
            <span>촬영지 여행기 읽기</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

        {/* Item 3: Daily Essay */}
        <Link
          href="/daily#essays"
          className="group p-6 rounded-3xl bg-white/80 hover:bg-white border border-[#E8E2D2] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full bg-[#FDF7E9] text-[#9A7A32] text-xs font-bold">
                ☕ 일상기록
              </span>
              <span className="text-xs text-[#172B4D]/50 font-mono">가을 아침</span>
            </div>
            <h3 className="text-lg font-bold text-[#172B4D] group-hover:text-[#D5AE5B] transition-colors leading-snug">
              창문을 열고 마시는 한 잔의 드립 커피와 만년필 사각임
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#172B4D]/75 leading-relaxed line-clamp-3">
              알람 소리 대신 스며드는 햇살에 눈을 뜬 아침. 아무런 약속도 없는 주말에 다이어리를 펴고 좋아하는 문장을 적어 내려가는 시간의 소중함.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#D5AE5B] font-semibold">
            <span>에세이 전문 보기</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
