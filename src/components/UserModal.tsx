"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "./Providers";

export default function UserModal() {
  const { isUserModalOpen, closeUserModal, bookmarks } = useApp();
  const [activeTab, setActiveTab] = useState<"profile" | "newsletter" | "bookmarks">("profile");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!isUserModalOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="user-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeUserModal}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E4DEC9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#172B4D] via-[#2A4365] to-[#172B4D] p-6 text-white text-center relative">
          <button
            type="button"
            onClick={closeUserModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
            aria-label="닫기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white/80 shadow-md bg-white mb-3">
            <Image
              src="/images/lion-mascot.jpg"
              alt="SY 프로필 아바타"
              fill
              className="object-cover"
            />
          </div>

          <h3 id="user-modal-title" className="text-xl font-bold tracking-tight">SY</h3>
          <p className="font-handwriting text-base text-[#D5AE5B] font-semibold mt-0.5">
            Small Steps, Big Dreams
          </p>
          <p className="text-xs text-white/80 mt-1">
            좋아하는 것들로 더 특별한 일상을 가꾸는 라이프스타일 크리에이터
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-[#E8E2D2] bg-[#F2EDE2] text-xs font-semibold text-[#172B4D]">
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === "profile"
                ? "bg-[#FAF8F5] text-[#172B4D] border-b-2 border-[#172B4D]"
                : "text-[#172B4D]/60 hover:text-[#172B4D]"
            }`}
          >
            소개 & 취향
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("newsletter")}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === "newsletter"
                ? "bg-[#FAF8F5] text-[#172B4D] border-b-2 border-[#172B4D]"
                : "text-[#172B4D]/60 hover:text-[#172B4D]"
            }`}
          >
            뉴스레터 구독
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bookmarks")}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === "bookmarks"
                ? "bg-[#FAF8F5] text-[#172B4D] border-b-2 border-[#172B4D]"
                : "text-[#172B4D]/60 hover:text-[#172B4D]"
            }`}
          >
            나의 보관함 ({bookmarks.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "profile" && (
            <div className="space-y-4">
              <div className="bg-white/80 p-3.5 rounded-xl border border-[#ECE5D8] text-xs leading-relaxed text-[#172B4D]/85">
                “작은 농장에서 건강한 채소를 수확하고, 좋아하는 영화와 드라마의 배경이 된 거리를 걷고, 매일 한 잔의 커피와 함께 다이어리를 채워갑니다.”
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#F0F6EE] border border-[#D5E6D1]">
                  <span className="block text-base font-bold text-[#365C45]">4종</span>
                  <span className="text-[11px] text-[#365C45]/80">반려작물</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FDF2F4] border border-[#F3CCD4]">
                  <span className="block text-base font-bold text-[#873F4B]">18곳</span>
                  <span className="text-[11px] text-[#873F4B]/80">영화 촬영지</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FDF7E9] border border-[#EEDFB8]">
                  <span className="block text-base font-bold text-[#D5AE5B]">42편</span>
                  <span className="text-[11px] text-[#916E25]">일상 기록</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-white text-[11px] font-medium border border-[#E6DFC9] text-[#172B4D]/80">
                  🌱 베란다 가드닝
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white text-[11px] font-medium border border-[#E6DFC9] text-[#172B4D]/80">
                  🎬 시네마 트래블
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white text-[11px] font-medium border border-[#E6DFC9] text-[#172B4D]/80">
                  ☕ 카페 & 만년필
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white text-[11px] font-medium border border-[#E6DFC9] text-[#172B4D]/80">
                  📖 에세이 기록
                </span>
              </div>
            </div>
          )}

          {activeTab === "newsletter" && (
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-sm font-bold text-[#172B4D]">
                  매주 금요일 아침, 작은 영감을 배달합니다
                </h4>
                <p className="text-xs text-[#172B4D]/70 mt-1">
                  이번 주 수확한 식물 소식과 추천 영화, 마음을 차분하게 해주는 글귀를 보내드려요.
                </p>
              </div>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-[#F0F6EE] border border-[#365C45]/20 text-center text-xs text-[#365C45] font-semibold animate-in zoom-in-95 duration-200">
                  🎉 구독 신청이 완료되었습니다! 따뜻한 이야기로 찾아뵐게요.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your-email@example.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden focus:border-[#172B4D]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#172B4D] text-[#F7F5F0] rounded-xl text-xs font-bold hover:bg-[#2A4365] transition-colors"
                  >
                    무료 뉴스레터 구독하기
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === "bookmarks" && (
            <div className="space-y-2">
              {bookmarks.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-xs text-[#172B4D]/70">
                    내가 저장해둔 소중한 글 목록입니다.
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {bookmarks.map((b, idx) => (
                      <li
                        key={idx}
                        className="p-2.5 rounded-lg bg-white border border-[#EAE3D4] flex items-center justify-between"
                      >
                        <span className="font-medium text-[#172B4D]">{b}</span>
                        <span className="text-[#365C45] text-[11px]">저장됨</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-[#172B4D]/60">
                  <p>아직 저장된 콘텐츠가 없습니다.</p>
                  <p className="mt-1 text-[#172B4D]/40">
                    마음에 드는 일기나 여행지, 레시피를 보관해보세요!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F2EDE2] border-t border-[#E8E2D2] flex justify-between items-center text-xs text-[#172B4D]/70">
          <Link
            href="/community"
            onClick={closeUserModal}
            className="hover:underline font-medium text-[#172B4D]"
          >
            커뮤니티에서 인사 나누기 →
          </Link>
          <button
            type="button"
            onClick={closeUserModal}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#DDD] hover:bg-[#EBE5D8]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
