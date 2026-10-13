"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useApp } from "./Providers";

interface SearchItem {
  id: string;
  category: "농장" | "영화/드라마" | "일상기록" | "커뮤니티";
  categoryColor: string;
  title: string;
  description: string;
  url: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  {
    id: "f-1",
    category: "농장",
    categoryColor: "bg-[#365C45] text-white",
    title: "스위트 바질과 첫 번째 본잎 관찰 일지",
    description: "파종 후 12일 차, 햇살 가득한 창가에서 건강하게 자라나는 바질",
    url: "/farm#crops",
  },
  {
    id: "f-2",
    category: "농장",
    categoryColor: "bg-[#365C45] text-white",
    title: "설향 딸기 첫 꽃과 수정 도우미",
    description: "실내에서 붓으로 꽃을 살살 털어주며 기다리는 달콤한 열매의 시간",
    url: "/farm#crops",
  },
  {
    id: "f-3",
    category: "농장",
    categoryColor: "bg-[#365C45] text-white",
    title: "직접 수확한 생바질로 만드는 신선한 홈메이드 페스토",
    description: "올리브유, 잣, 파마산 치즈로 완성하는 향긋한 초록빛 식탁 레시피",
    url: "/farm#recipes",
  },
  {
    id: "m-1",
    category: "영화/드라마",
    categoryColor: "bg-[#873F4B] text-white",
    title: "영화 <리틀 포레스트>의 숨결, 경북 군위 화본마을 탐방",
    description: "혜원의 집 마루에 앉아 바람 소리를 들으며 느낀 사계절의 위로",
    url: "/media#locations",
  },
  {
    id: "m-2",
    category: "영화/드라마",
    categoryColor: "bg-[#873F4B] text-white",
    title: "영화 <비포 선라이즈>를 따라 걷는 비엔나 골목길 여행",
    description: "프라터 대관람차부터 알베르티나 박물관까지, 대화로 물든 도시",
    url: "/media#locations",
  },
  {
    id: "m-3",
    category: "영화/드라마",
    categoryColor: "bg-[#873F4B] text-white",
    title: "지친 하루 끝에 건네는 따뜻한 온기, 드라마 <나의 아저씨>",
    description: "“너 자신에게 관대해져도 돼” 우리 모두에게 필요한 진심의 위로",
    url: "/media#reviews",
  },
  {
    id: "d-1",
    category: "일상기록",
    categoryColor: "bg-[#D5AE5B] text-[#172B4D]",
    title: "아침 6시 30분의 온기와 핸드드립 커피",
    description: "창밖 푸른 새벽빛이 걷힐 때 천천히 물을 내리며 시작하는 고요한 하루",
    url: "/daily#essays",
  },
  {
    id: "d-2",
    category: "일상기록",
    categoryColor: "bg-[#D5AE5B] text-[#172B4D]",
    title: "골목길 작고 낡은 독립서점에서 만난 한 줄의 문장",
    description: "손글씨 메모가 적힌 헌책을 집어 들었을 때 전해진 다정한 울림",
    url: "/daily#essays",
  },
  {
    id: "c-1",
    category: "커뮤니티",
    categoryColor: "bg-[#527CA4] text-white",
    title: "베란다 텃밭 처음 시작할 때 추천하는 허브가 있나요?",
    description: "바질과 애플민트로 시작하는 초보 가드너들을 위한 팁 나눔",
    url: "/community#board",
  },
  {
    id: "c-2",
    category: "커뮤니티",
    categoryColor: "bg-[#527CA4] text-white",
    title: "가을에 혼자 조용히 떠나기 좋은 국내 촬영지 추천 부탁드려요",
    description: "자연 풍경이 아름답고 한적한 곳을 함께 나눠요",
    url: "/community#board",
  },
];

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm("");
      setSelectedCategory("전체");
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = SEARCH_DATABASE.filter((item) => {
    const matchesCategory =
      selectedCategory === "전체" || item.category === selectedCategory;
    const matchesQuery =
      searchTerm.trim() === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = ["전체", "농장", "영화/드라마", "일상기록", "커뮤니티"];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeSearch}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E4DEC9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="relative p-4 sm:p-5 border-b border-[#E8E2D2] flex items-center gap-3">
          <svg
            className="w-5 h-5 text-[#172B4D]/60 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            id="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="궁금한 관심사, 작물, 영화, 일상을 검색해보세요... (예: 바질, 비엔나, 커피)"
            className="w-full bg-transparent text-base sm:text-lg text-[#172B4D] placeholder-[#172B4D]/45 focus:outline-hidden"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="text-xs text-[#172B4D]/50 hover:text-[#172B4D] px-2 py-1 rounded bg-[#EAE5D8]"
            >
              지우기
            </button>
          )}
          <button
            type="button"
            onClick={closeSearch}
            className="p-1.5 text-[#172B4D]/60 hover:text-[#172B4D] rounded-lg hover:bg-[#EAE5D8]"
            aria-label="닫기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Category Pills Filter */}
        <div className="px-4 py-2.5 bg-[#F4EFE6] flex items-center gap-1.5 overflow-x-auto text-xs">
          <span id="search-modal-title" className="text-[#172B4D]/60 font-medium mr-1 shrink-0">카테고리:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-full transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#172B4D] text-white font-semibold"
                  : "bg-white/80 text-[#172B4D]/75 hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={closeSearch}
                className="group block p-3.5 rounded-xl bg-white/70 hover:bg-white border border-[#EFE9DD] hover:border-[#D5CEBE] hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${item.categoryColor}`}
                  >
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#172B4D] group-hover:text-[#172B4D] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#172B4D]/75 line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))
          ) : (
            <div className="py-12 text-center text-[#172B4D]/60">
              <p className="text-sm font-medium">‘{searchTerm}’에 대한 검색 결과가 없습니다.</p>
              <p className="text-xs mt-1 text-[#172B4D]/40">
                다른 단어로 검색하시거나 카테고리 필터를 변경해 보세요.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Help */}
        <div className="px-4 py-3 bg-[#EFECE3] border-t border-[#E4DEC9] flex items-center justify-between text-[11px] text-[#172B4D]/60">
          <span>💡 단축키: <kbd className="px-1.5 py-0.5 bg-white rounded border border-[#CCC] font-mono text-[10px]">ESC</kbd> 닫기</span>
          <span>SY Small Steps, Big Dreams</span>
        </div>
      </div>
    </div>
  );
}
