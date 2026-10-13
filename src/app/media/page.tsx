"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/components/Providers";

interface MediaItem {
  id: string;
  type: "영화" | "드라마";
  title: string;
  originalTitle?: string;
  year: string;
  rating: number; // 1-5
  genre: string;
  quote: string;
  review: string;
  location: string;
  locationDesc: string;
}

const MEDIA_DATA: MediaItem[] = [
  {
    id: "m-1",
    type: "영화",
    title: "리틀 포레스트",
    year: "2018",
    rating: 5,
    genre: "힐링 / 라이프스타일 / 요리",
    quote: "“온기가 있는 계절에 돌아오고 싶었어.”",
    review:
      "도시의 조급함과 차가운 편의점 도시락에 지쳤을 때 다시 찾아보는 인생 영화. 배추전, 곶감, 막걸리를 계절에 맞추어 손수 만들어 먹는 주인공 혜원의 모습에서 진정한 삶의 자립을 배웠습니다.",
    location: "경북 군위군 화본마을 & 화본역",
    locationDesc:
      "가을바람이 솔솔 부는 마루에 앉아 처마 밑 곶감을 바라보던 그 집. 인근 간이역인 화본역과 함께 고즈넉한 사색을 즐기기에 더없이 좋은 힐링 여행지입니다.",
  },
  {
    id: "m-2",
    type: "영화",
    title: "비포 선라이즈 (Before Sunrise)",
    originalTitle: "Before Sunrise",
    year: "1995",
    rating: 5,
    genre: "로맨스 / 대화 / 여행",
    quote: "“만약 신이 존재한다면, 그건 사람과 사람 사이의 공간에 존재할 거야.”",
    review:
      "기차 안에서의 우연한 만남, 그리고 오스트리아 비엔나에서 보낸 단 하루의 밤. 끊임없이 이어지는 철학적인 대화와 서로의 눈빛만으로 도시 전체가 낭만으로 가득 차는 걸작.",
    location: "오스트리아 비엔나 프라터 유원지 & 알베르티나 테라스",
    locationDesc:
      "두 주인공이 첫 키스를 나눈 100년 역사의 대관람차와, 밤안개 내려앉은 오페라하우스를 내려다보던 알베르티나 조각상 앞 테라스를 직접 걸었습니다.",
  },
  {
    id: "m-3",
    type: "드라마",
    title: "나의 아저씨",
    year: "2018",
    rating: 5,
    genre: "휴먼 / 드라마",
    quote: "“편안함에 이르렀는가. 그렇다.”",
    review:
      "인생의 무게를 묵묵히 버텨내는 평범한 어른들의 상처와 따스한 구원의 이야기. 퇴근길 지하철과 동네 어귀의 작은 술집에서 나누는 진심 어린 대화들이 깊은 여운을 남깁니다.",
    location: "서울 용산구 백빈건널목 (땡땡거리) & 한강대교",
    locationDesc:
      "기차가 지나갈 때마다 땡땡 종소리가 울리는 서울 도심 속 빈티지한 골목길. 노을 질 무렵 한강대교를 걸으며 주인공 동훈의 발걸음을 따라가 보았습니다.",
  },
  {
    id: "m-4",
    type: "드라마",
    title: "갯마을 차차차",
    year: "2021",
    rating: 4.5,
    genre: "로맨틱 코미디 / 힐링",
    quote: "“파도가 치면 서핑을 하면 되지, 왜 물러서?”",
    review:
      "바닷마을 공진에서 펼쳐지는 유쾌하고 다정한 이웃들의 정. 푸른 바다와 빨간 등대, 따뜻한 백반집이 주는 위안이 매 회차마다 미소를 짓게 합니다.",
    location: "경북 포항시 청하공진시장 & 곤륜산 활공장",
    locationDesc:
      "드라마 속 장터 분위기가 그대로 남아있는 청하시장과, 정상에 오르면 에메랄드빛 동해 바다가 파노라마로 펼쳐지는 곤륜산의 탁 트인 뷰는 필수 코스입니다.",
  },
];

const TRAVEL_COURSES = [
  {
    title: "경북 군위 <리틀 포레스트> 감성 시골 기행 (당일 코스)",
    theme: "사계절의 쉼",
    steps: [
      "09:30 화본역 도착 (한국에서 가장 아름다운 간이역 산책)",
      "11:00 혜원의 집 (마루에 앉아 바람 소리 감상하기)",
      "13:00 화본마을 로컬 밥상 (손칼국수 & 시골 배추전)",
      "15:00 군위 한밤마을 돌담길 산책 & 다원 티타임",
    ],
    tips: "혜원의 집에는 자전거가 비치되어 있어 영화 속 장면처럼 골목길을 달려볼 수 있습니다.",
  },
  {
    title: "서울 도심 <나의 아저씨> 온기 가득한 퇴근길 산책 (오후 코스)",
    theme: "도시 속의 위로",
    steps: [
      "16:30 용산 백빈건널목 철길 산책 (땡땡거리 풍경)",
      "18:00 노을 지는 한강대교 노들섬 도보 건너기",
      "19:30 동네 작은 선술집에서 따뜻한 잔치국수와 맥주 한 잔",
    ],
    tips: "해 질 무렵의 골든 아워에 방문하면 붉게 물드는 노을과 전철 풍경을 담을 수 있습니다.",
  },
];

export default function MediaPage() {
  const { toggleBookmark, isBookmarked } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>("전체");

  const filteredMedia = MEDIA_DATA.filter((item) => {
    if (activeFilter === "전체") return true;
    if (activeFilter === "영화") return item.type === "영화";
    if (activeFilter === "드라마") return item.type === "드라마";
    return true;
  });

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#873F4B] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs">
              <span>🎬 Cinema & Drama Travel</span>
              <span>•</span>
              <span>스크린 속 그 장소로</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              영화 & 드라마
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed break-keep">
              마음을 울린 명대사와 여운을 남긴 장면들, 그리고 주인공의 발자취를 따라 떠나는 로케이션 여행기입니다.
              스크린 너머의 따스한 이야기를 직접 만나봅니다.
            </p>
          </div>
        </div>

        {/* Decorative film reel watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
          <svg className="w-96 h-96 text-white fill-current" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h3.2l-2-3H4v3zm5.6 0h3.2l-2-3H7.6l2 3zm5.6 0h3.2l-2-3h-3.2l2 3zM20 6v3h-1.2l-2-3H20z" />
          </svg>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
        {/* 2. Reviews Section (최근 본 영화 & 드라마) */}
        <section id="reviews" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E3DDD0] pb-4 gap-4">
            <div>
              <span className="text-xs font-bold text-[#873F4B] uppercase tracking-wider">
                Recent Reviews & Quotes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
                작품 감상과 인상적인 문장
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1 rounded-full border border-[#DED7C6] self-start sm:self-auto">
              {["전체", "영화", "드라마"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${
                    activeFilter === tab
                      ? "bg-[#873F4B] text-white"
                      : "text-[#172B4D]/70 hover:text-[#172B4D]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMedia.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E2D5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FDF2F4] text-[#873F4B]">
                        {item.type} • {item.genre}
                      </span>
                      <span className="text-xs text-[#172B4D]/50 font-mono">
                        {item.year}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleBookmark(`작품: ${item.title}`)}
                      className="text-xs text-[#172B4D]/60 hover:text-[#873F4B]"
                    >
                      {isBookmarked(`작품: ${item.title}`) ? "★ 저장됨" : "☆ 저장"}
                    </button>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      {item.title}
                    </h3>
                    <span className="text-amber-500 text-sm tracking-widest font-bold">
                      {"★".repeat(Math.floor(item.rating))}
                    </span>
                  </div>

                  {/* Memorable Quote */}
                  <blockquote className="my-3.5 p-3.5 rounded-2xl bg-[#FDF2F4] border-l-4 border-[#873F4B] text-xs sm:text-sm font-medium text-[#873F4B] italic">
                    {item.quote}
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed break-keep">
                    {item.review}
                  </p>
                </div>

                {/* Location Footer */}
                <div className="mt-5 pt-4 border-t border-[#F2ECE1] space-y-1 bg-[#FAF8F5] p-3 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#873F4B]">
                    <span>📍 촬영지:</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="text-[11px] text-[#172B4D]/70 leading-relaxed">
                    {item.locationDesc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Filming Location Travel Courses (촬영지 중심 여행 코스) */}
        <section id="locations" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E3DDD0] pb-4 gap-2">
            <div>
              <span className="text-xs font-bold text-[#873F4B] uppercase tracking-wider">
                Location Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
                작품 속 그 장소로 떠나는 여행 코스
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#172B4D]/70">
              영화 속 한 장면의 주인공이 되어 거닐어보는 추천 여행 동선
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRAVEL_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FAF6F4] border border-[#E8D4D8] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#873F4B] text-white text-xs font-bold inline-block mb-3">
                    {course.theme}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#172B4D]">
                    {course.title}
                  </h3>

                  <div className="mt-4 space-y-2.5">
                    {course.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172B4D]/85">
                        <span className="w-5 h-5 rounded-full bg-white border border-[#873F4B]/30 text-[#873F4B] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-3 bg-white/90 rounded-2xl border border-[#E8D4D8] text-xs text-[#873F4B]">
                  <span className="font-bold block mb-0.5">💡 여행 꿀팁:</span>
                  <span className="text-[#172B4D]/75">{course.tips}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
