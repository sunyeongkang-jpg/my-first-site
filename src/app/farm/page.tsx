"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/components/Providers";

interface Crop {
  id: string;
  name: string;
  variety: string;
  plantedDate: string;
  harvestTarget: string;
  progress: number; // 0 to 100
  stage: string;
  waterSchedule: string;
  tips: string;
  color: string;
}

const CROPS_DATA: Crop[] = [
  {
    id: "basil",
    name: "스위트 바질",
    variety: "이탈리안 제노베제",
    plantedDate: "2026.09.15",
    harvestTarget: "수확 진행 중",
    progress: 85,
    stage: "본잎 수확기 (주 2회 수확)",
    waterSchedule: "겉흙이 마르면 듬뿍 (2~3일 주기)",
    tips: "순지르기를 해주면 곁순이 풍성해져 수확량이 2배로 늘어납니다.",
    color: "#365C45",
  },
  {
    id: "strawberry",
    name: "설향 딸기",
    variety: "국내산 설향",
    plantedDate: "2026.09.28",
    harvestTarget: "2026.11월 중순",
    progress: 55,
    stage: "첫 개화 및 수정기",
    waterSchedule: "촉촉한 습도 유지 (3일 주기)",
    tips: "실내에서는 부드러운 미술 붓으로 꽃술을 둥글게 살살 쓸어주세요.",
    color: "#D94F5E",
  },
  {
    id: "rucola",
    name: "와일드 루꼴라",
    variety: "로켓 셀바티카",
    plantedDate: "2026.10.02",
    harvestTarget: "2026.10월 말",
    progress: 40,
    stage: "어린잎 생장기",
    waterSchedule: "흙 마름 주의 (1~2일 주기)",
    tips: "너무 강한 직사광선보다는 은은한 반양지에서 잎이 연하게 자랍니다.",
    color: "#4C8B56",
  },
  {
    id: "tomato",
    name: "체리 방울토마토",
    variety: "달콤 미니토마토",
    plantedDate: "2026.09.20",
    harvestTarget: "2026.11월 말",
    progress: 60,
    stage: "노란 꽃 개화 및 곁순 제거",
    waterSchedule: "통풍 유지 후 충분히 관수",
    tips: "줄기와 잎 사이에 나오는 곁순을 손으로 따주어야 열매가 굵어집니다.",
    color: "#E2583E",
  },
];

const TIMELINE_LOGS = [
  {
    date: "2026.10.12",
    title: "바질 첫 순지르기와 신선한 저녁 브런치",
    crop: "스위트 바질",
    content:
      "키가 15cm를 넘어선 바질의 생장점을 과감하게 잘라주었습니다. 잘라낸 여린 잎들은 저녁 카프레제 샐러드에 바로 올렸는데, 시판 바질과는 비교할 수 없는 진한 풍미가 가득했습니다.",
    weather: "맑음 ☀️ 22°C",
  },
  {
    date: "2026.10.05",
    title: "설향 딸기 하얀 꽃망울이 맺히다",
    crop: "설향 딸기",
    content:
      "초록 잎사귀 사이로 작고 소중한 흰색 꽃망울 세 송이가 얼굴을 내밀었습니다. 실내라 벌과 나비가 없으니 주말마다 부드러운 화홍 붓으로 인공 수정을 도와줄 예정입니다.",
    weather: "구름 조금 ⛅ 20°C",
  },
  {
    date: "2026.09.24",
    title: "루꼴라 씨앗의 귀여운 싹틔움",
    crop: "와일드 루꼴라",
    content:
      "물에 적신 솜에서 발아시켜 작은 토분으로 옮겨 심은 루꼴라 씨앗들이 일제히 연둣빛 하트 떡잎을 틔웠습니다. 자연의 생명력은 언제 보아도 경이롭습니다.",
    weather: "쾌청 ☀️ 24°C",
  },
];

const RECIPES = [
  {
    title: "홈메이드 바질페스토 & 통밀 파스타",
    time: "15분",
    difficulty: "초급",
    ingredients: "생바질 50g, 볶은 잣 20g, 그라나파다노 치즈 30g, 엑스트라버진 올리브유, 마늘 1쪽",
    desc: "직접 키운 바질의 알싸하고 달콤한 향이 가득한 오리지널 제노베제 페스토. 믹서기 대신 절구에 빻으면 향미가 한층 깊어집니다.",
  },
  {
    title: "생딸기 & 리코타 치즈 오픈 사워도우",
    time: "10분",
    difficulty: "초급",
    ingredients: "잘 익은 딸기 4알, 사워도우 바게트, 신선한 리코타 치즈, 아카시아 꿀, 민트 잎",
    desc: "바삭하게 구운 빵 위에 담백한 치즈와 달콤한 딸기를 얹고 꿀 한 방울로 완성하는 주말 브런치.",
  },
  {
    title: "야생 루꼴라와 구운 복숭아 샐러드",
    time: "10분",
    difficulty: "초급",
    ingredients: "와일드 루꼴라 한 줌, 구운 복숭아 슬라이스, 부라타 치즈, 발사믹 글레이즈",
    desc: "특유의 쌉싸름하고 고소한 참깨 향을 지닌 루꼴라와 달콤하게 캐러멜라이징된 과일의 완벽한 조화.",
  },
];

export default function FarmPage() {
  const { toggleBookmark, isBookmarked } = useApp();
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("전체");

  const galleryItems = [
    { title: "햇살 가득한 창가 텃밭 풍경", cat: "풍경", tag: "가을 풍경" },
    { title: "싱그러운 스위트 바질 군락", cat: "작물", tag: "바질" },
    { title: "수줍게 피어난 딸기 하얀 꽃", cat: "열매", tag: "딸기" },
    { title: "연둣빛 하트 루꼴라 새싹들", cat: "새싹", tag: "루꼴라" },
  ];

  return (
    <div className="w-full pb-16">
      {/* 1. Farm Hero Banner */}
      <section className="relative bg-[#365C45] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs">
              <span>🌱 My Little Farm</span>
              <span>•</span>
              <span>자연주의 홈가드닝</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              나의 작은 농장
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed break-keep">
              아파트 작은 베란다와 창틀에서 직접 씨앗을 뿌리고, 물을 주며 가꾸는 초록빛 기록입니다.
              흙과 햇살, 바람이 선물하는 건강한 먹거리로 일상의 식탁을 채웁니다.
            </p>
          </div>
        </div>

        {/* Decorative leaf watermarks */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
          <svg className="w-96 h-96 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12 2C8 2 4 6 4 11c0 5 4 9 8 9s8-4 8-9c0-5-4-9-8-9zm0 16c-3 0-6-3-6-7 0-3 2-6 6-6s6 3 6 6c0 4-3 7-6 7z" />
          </svg>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
        {/* 2. Active Crops (재배 중인 작물) */}
        <section id="crops" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E3DDD0] pb-4 gap-2">
            <div>
              <span className="text-xs font-bold text-[#365C45] uppercase tracking-wider">
                Current Plants
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
                현재 재배 중인 반려작물
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#172B4D]/70">
              정성과 햇살로 자라나는 4가지 식물의 성장 현황입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CROPS_DATA.map((crop) => (
              <div
                key={crop.id}
                className="bg-white rounded-3xl p-6 border border-[#E8E2D5] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: crop.color }}
                    >
                      {crop.variety}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleBookmark(`작물: ${crop.name}`)}
                      className="text-xs text-[#172B4D]/60 hover:text-[#365C45]"
                      title="보관하기"
                    >
                      {isBookmarked(`작물: ${crop.name}`) ? "★ 저장됨" : "☆ 저장"}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-[#172B4D]">{crop.name}</h3>
                  <p className="text-xs text-[#172B4D]/65 mt-1">
                    파종: {crop.plantedDate} • 목표: {crop.harvestTarget}
                  </p>

                  {/* Growth Progress Bar */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-[#172B4D]/80">
                      <span>{crop.stage}</span>
                      <span>{crop.progress}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#EFECE3] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${crop.progress}%`,
                          backgroundColor: crop.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Care Info */}
                  <div className="mt-4 pt-3 border-t border-[#F2ECE1] space-y-2 text-xs text-[#172B4D]/80">
                    <div className="flex items-start gap-1.5">
                      <span className="font-semibold shrink-0 text-[#365C45]">💧 물주기:</span>
                      <span>{crop.waterSchedule}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="font-semibold shrink-0 text-[#D5AE5B]">💡 팁:</span>
                      <span className="text-[#172B4D]/70">{crop.tips}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#365C45] font-semibold text-center bg-[#F0F6EE] py-1.5 rounded-xl">
                  건강하게 자라는 중 🌱
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Farm Journal Timeline (재배 과정 기록) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E3DDD0] pb-4 gap-2">
            <div>
              <span className="text-xs font-bold text-[#365C45] uppercase tracking-wider">
                Farm Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
                생생한 재배 과정 기록
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#172B4D]/70">
              씨앗에서 식탁까지, 손끝으로 느끼는 계절의 변화
            </p>
          </div>

          <div className="space-y-4">
            {TIMELINE_LOGS.map((log, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E8E2D5] shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="md:w-48 shrink-0 space-y-1">
                  <span className="font-mono text-sm font-bold text-[#365C45] block">
                    {log.date}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#F0F6EE] text-[#365C45] font-semibold inline-block">
                    {log.crop}
                  </span>
                  <p className="text-[11px] text-[#172B4D]/50">{log.weather}</p>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-[#172B4D]">{log.title}</h3>
                  <p className="text-sm text-[#172B4D]/80 leading-relaxed break-keep">
                    {log.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Healthy Farm Recipes (건강한 먹거리 이야기) */}
        <section id="recipes" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E3DDD0] pb-4 gap-2">
            <div>
              <span className="text-xs font-bold text-[#365C45] uppercase tracking-wider">
                Garden to Table
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
                건강한 먹거리 이야기 & 레시피
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#172B4D]/70">
              직접 수확한 신선한 재료로 차려내는 소박한 식탁
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECIPES.map((r, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F0F6EE] border border-[#D5E5D1] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#365C45] font-semibold mb-2">
                    <span>⏱ {r.time} 소요</span>
                    <span>난이도: {r.difficulty}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172B4D]">{r.title}</h3>
                  <p className="text-xs sm:text-sm text-[#172B4D]/80 mt-2 leading-relaxed">
                    {r.desc}
                  </p>

                  <div className="mt-4 p-3 bg-white/80 rounded-xl text-xs text-[#172B4D]/80 border border-[#D5E5D1]">
                    <span className="font-bold text-[#365C45] block mb-1">필요 재료:</span>
                    <span>{r.ingredients}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D5E5D1] flex justify-between items-center text-xs font-bold text-[#365C45]">
                  <span>자세한 조리 순서 보기</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Photo Gallery */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E3DDD0] pb-4">
            <div>
              <span className="text-xs font-bold text-[#365C45] uppercase tracking-wider">
                Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-0.5">
                농장 사진 갤러리
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs"
              >
                <Image
                  src="/images/card-farm.jpg"
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full w-max mb-1">
                    {item.tag}
                  </span>
                  <p className="text-xs font-semibold leading-tight">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
