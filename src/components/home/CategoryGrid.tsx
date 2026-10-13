import React from "react";
import CategoryCard, { CategoryCardProps } from "./CategoryCard";

export default function CategoryGrid() {
  const categories: CategoryCardProps[] = [
    {
      id: "farm",
      title: "나의 작은 농장",
      description: "직접 키우고, 먹고, 나누는 건강한 먹거리 이야기",
      imageSrc: "/images/card-farm.jpg",
      imageAlt: "창가 햇살 아래 자라는 스위트 바질과 달콤한 딸기",
      href: "/farm",
      buttonText: "둘러보기 →",
      themeColor: "#365C45",
      bgPastel: "bg-[#F1F6EE]",
      borderPastel: "border-[#D6E6D1]",
      tag: "Green Life",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 4 6 4 11c0 5 4 9 8 9s8-4 8-9c0-5-4-9-8-9zm0 16c-3 0-6-3-6-7 0-3 2-6 6-6s6 3 6 6c0 4-3 7-6 7z" />
          <path d="M12 7c-2 0-3 2-3 4s2 3 3 3 3-1 3-3-1-4-3-4z" />
        </svg>
      ),
    },
    {
      id: "media",
      title: "영화 & 드라마",
      description: "좋아하는 작품 속 그 장소, 직접 떠나는 여행",
      imageSrc: "/images/card-movie.jpg",
      imageAlt: "유럽 카페 골목의 영화 슬레이트와 필름 릴",
      href: "/media",
      buttonText: "둘러보기 →",
      themeColor: "#873F4B",
      bgPastel: "bg-[#FDF2F4]",
      borderPastel: "border-[#F5D5DC]",
      tag: "Cinema Travel",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h3.2l-2-3H4v3zm5.6 0h3.2l-2-3H7.6l2 3zm5.6 0h3.2l-2-3h-3.2l2 3zM20 6v3h-1.2l-2-3H20z" />
        </svg>
      ),
    },
    {
      id: "daily",
      title: "일상기록",
      description: "소소하지만 특별한 나의 하루를 기록합니다",
      imageSrc: "/images/card-daily.jpg",
      imageAlt: "따뜻한 햇살이 드는 책상 위 다이어리와 만년필, 커피 한 잔",
      href: "/daily",
      buttonText: "기록 보기 →",
      themeColor: "#D5AE5B",
      bgPastel: "bg-[#FDF7E9]",
      borderPastel: "border-[#F2E4C2]",
      tag: "Daily Journal",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      ),
    },
    {
      id: "community",
      title: "커뮤니티",
      description: "좋아하는 사람들과 함께하는 이야기 공간",
      imageSrc: "/images/card-community.jpg",
      imageAlt: "햇살 가득한 야외 테이블에서 따뜻하게 대화를 나누는 사람들",
      href: "/community",
      buttonText: "함께하기 →",
      themeColor: "#527CA4",
      bgPastel: "bg-[#EEF4FA]",
      borderPastel: "border-[#D3E3F2]",
      tag: "Community",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E6E0D1] gap-2">
        <div>
          <span className="text-xs font-bold text-[#172B4D]/60 tracking-wider uppercase">
            Four Core Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] tracking-tight mt-1">
            관심사 카테고리
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#172B4D]/75 max-w-md">
          나만의 속도로 가꾸고 누리는 4가지 라이프스타일 여정을 함께 탐색해보세요.
        </p>
      </div>

      {/* Responsive Grid: Desktop 4 cols, Tablet 2 cols, Mobile 1-2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </section>
  );
}
