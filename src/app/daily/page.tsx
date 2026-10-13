"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/components/Providers";

interface Essay {
  id: string;
  category: "모닝 루틴" | "독서 & 서점" | "카페 투어" | "산책과 생각";
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

const ESSAYS: Essay[] = [
  {
    id: "d-1",
    category: "모닝 루틴",
    title: "아침 6시 30분의 온기와 핸드드립 커피",
    date: "2026.10.11",
    readTime: "3분",
    excerpt: "창밖 푸른 새벽빛이 옅어질 무렵, 주전자의 물을 천천히 끓여 원두에 붓습니다. 온 집안에 퍼지는 고소한 향기가 나의 하루를 조용히 깨웁니다.",
    content: [
      "모두가 잠든 이른 아침 시간은 하루 중 내가 온전히 나에게 집중할 수 있는 가장 고요한 선물입니다.",
      "주전자의 주둥이를 기울여 원두 가루 위로 가느다란 물줄기를 그릴 때 생겨나는 작은 거품들(커피빵)을 가만히 응시합니다. 서두를 필요 없이, 규칙적인 호흡에 맞추어 천천히 물을 내립니다.",
      "따뜻한 잔을 양손으로 감싸 쥐고 창가 식물들을 바라봅니다. 바질 화분 위로 내려앉은 아침 이슬 한 방울, 저 멀리 솟아오르는 햇살. 특별한 사건이 없어도, 이 작은 순간들이 모여 삶의 단단한 지지대가 되어줍니다.",
    ],
    tags: ["#핸드드립", "#모닝루틴", "#평온한아침"],
  },
  {
    id: "d-2",
    category: "독서 & 서점",
    title: "골목 끝 낡은 독립서점에서 건져 올린 문장 하나",
    date: "2026.10.04",
    readTime: "4분",
    excerpt: "손글씨로 쓴 북카드 메모가 꽂힌 헌책을 집어 들었습니다. 누군가의 손때 묻은 페이지 속에서 뜻밖의 다정한 위로를 만났던 토요일 오후.",
    content: [
      "언덕길을 한참 올라야 나오는 작은 서점에는 오래된 종이 냄새와 나직한 재즈 선율이 머물러 있었습니다.",
      "책방 주인이 책마다 손수 적어둔 추천 메모를 읽다 보면, 책을 고르는 것이 아니라 사람의 온기를 건네받는 기분이 듭니다.",
      "‘기다리는 시간조차 여행의 일부라는 것을 잊지 마세요.’ 그 문장을 다이어리 맨 윗줄에 만년필로 정성껏 옮겨 적었습니다. 조급했던 마음에 비로소 부드러운 쉼표가 찍혔습니다.",
    ],
    tags: ["#독립서점", "#필사", "#책과문장"],
  },
  {
    id: "d-3",
    category: "카페 투어",
    title: "창가로 쏟아지는 햇살과 바닐라 라떼",
    date: "2026.09.27",
    readTime: "3분",
    excerpt: "나무 창틀 너머로 은행잎이 살랑이는 계절. 노트북 대신 가죽 다이어리와 만년필 한 자루만 챙겨 떠난 동네 작은 카페의 풍경.",
    content: [
      "가끔은 디지털 화면의 번쩍임에서 벗어나 종이 위를 사각거리며 달리는 펜촉의 감촉이 절실해집니다.",
      "달콤한 바닐라빈 시럽이 들어간 라떼 한 모금, 그리고 이번 주에 있었던 소소한 감사한 일 세 가지를 적어보았습니다. 텃밭 바질이 잘 자란 것, 좋아하는 영화를 다시 본 것, 그리고 오늘 이렇게 맑은 하늘 아래 앉아 있는 것.",
      "행복은 먼 곳에 있는 것이 아니라, 알아차리는 순간 내 곁에 피어난다는 것을 다시 한번 되새깁니다.",
    ],
    tags: ["#카페투어", "#가을햇살", "#다이어리"],
  },
  {
    id: "d-4",
    category: "산책과 생각",
    title: "가을 숲길을 걸으며 주운 도토리 한 알",
    date: "2026.09.19",
    readTime: "2분",
    excerpt: "바스락거리는 낙엽을 밟으며 숲길을 천천히 걸었습니다. 주머니 속에 넣고 만지작거리던 작은 도토리에서 생명의 다정함을 배웁니다.",
    content: [
      "바쁜 일상에 쫓기다 보면 하늘을 올려다볼 여유조차 잊게 됩니다. 그래서 주말이면 일부러 휴대폰을 비행기 탑승 모드로 바꾸고 숲으로 향합니다.",
      "발아래에서 사각사각 소리를 내는 마른 낙엽들, 나뭇가지 사이로 부서져 내리는 눈부신 햇살. 길가에 떨어진 동그란 도토리 한 알을 주워 손바닥 위에 올려놓았습니다.",
      "언젠가 커다란 참나무가 될 꿈을 품은 작은 씨앗. 나의 매일매일도 이 도토리처럼 조용하지만 단단하게 자라나고 있기를 소망해봅니다.",
    ],
    tags: ["#숲길산책", "#자연의위로", "#사색"],
  },
];

export default function DailyPage() {
  const { toggleBookmark, isBookmarked } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [readingEssay, setReadingEssay] = useState<Essay | null>(null);

  const categories = ["전체", "모닝 루틴", "독서 & 서점", "카페 투어", "산책과 생각"];

  const filtered = ESSAYS.filter((essay) => {
    if (selectedCategory === "전체") return true;
    return essay.category === selectedCategory;
  });

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#D5AE5B] text-[#172B4D] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 text-[#172B4D] text-xs font-semibold backdrop-blur-xs">
              <span>☕ Daily Journal & Essays</span>
              <span>•</span>
              <span>소소하지만 확실한 매일의 온기</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              일상기록
            </h1>
            <p className="text-base sm:text-lg text-[#172B4D]/90 font-medium leading-relaxed break-keep">
              창문 틈으로 들어오는 아침 햇살, 커피 한 잔의 향기, 그리고 골목길 서점에서 만난 문장들.
              스쳐 지나가기 쉬운 평범한 하루 속에서 반짝이는 순간들을 기록합니다.
            </p>
          </div>
        </div>

        {/* Decorative fountain pen watermark */}
        <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none transform translate-x-12 translate-y-12">
          <svg className="w-96 h-96 text-[#172B4D] fill-current" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10">
        {/* Category Pills Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#E3DDD0] pb-4 gap-4">
          <div>
            <span className="text-xs font-bold text-[#D5AE5B] uppercase tracking-wider">
              Archive Filter
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
              기록 아카이브
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#172B4D] text-white shadow-xs"
                    : "bg-white/80 text-[#172B4D]/75 hover:bg-white border border-[#E8E2D5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Essay Cards Grid */}
        <div id="essays" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((essay) => (
            <article
              key={essay.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E2D5] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FDF7E9] text-[#9A7A32] font-bold">
                      {essay.category}
                    </span>
                    <span className="text-[#172B4D]/50 font-mono">{essay.date}</span>
                    <span className="text-[#172B4D]/40">• 읽는 시간 {essay.readTime}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleBookmark(`에세이: ${essay.title}`)}
                    className="text-xs text-[#172B4D]/60 hover:text-[#D5AE5B]"
                  >
                    {isBookmarked(`에세이: ${essay.title}`) ? "★ 저장됨" : "☆ 저장"}
                  </button>
                </div>

                <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#D5AE5B] transition-colors leading-snug">
                  {essay.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#172B4D]/80 leading-relaxed line-clamp-3">
                  {essay.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {essay.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] text-[#172B4D]/60 bg-[#FAF8F5] px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read button */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setReadingEssay(essay)}
                  className="text-xs font-bold text-[#172B4D] group-hover:text-[#D5AE5B] flex items-center gap-1"
                >
                  <span>기록 전체 읽기</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <span className="font-handwriting text-base text-[#172B4D]/50">
                  Small Steps ♡
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Essay Reader Modal */}
      {readingEssay && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setReadingEssay(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E8E2D5] overflow-y-auto p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FDF7E9] text-[#9A7A32] text-xs font-bold">
                {readingEssay.category} • {readingEssay.date}
              </span>
              <button
                type="button"
                onClick={() => setReadingEssay(null)}
                className="p-1 rounded-full text-[#172B4D]/60 hover:text-[#172B4D] hover:bg-[#EAE5D8]"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] leading-tight mb-4">
              {readingEssay.title}
            </h2>

            <div className="h-0.5 w-12 bg-[#D5AE5B] mb-6 rounded-full" />

            <div className="space-y-4 text-sm sm:text-base text-[#172B4D]/85 leading-relaxed font-light">
              {readingEssay.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="break-keep">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E2D5] flex items-center justify-between">
              <div className="font-handwriting text-xl text-[#873F4B] font-bold">
                Always, with you ♡
              </div>
              <button
                type="button"
                onClick={() => toggleBookmark(`에세이: ${readingEssay.title}`)}
                className="px-4 py-2 rounded-xl bg-[#172B4D] text-white text-xs font-bold hover:bg-[#2A4365]"
              >
                {isBookmarked(`에세이: ${readingEssay.title}`) ? "★ 보관함에 저장됨" : "☆ 내 보관함에 담기"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
