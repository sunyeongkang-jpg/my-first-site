"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    category: "콘텐츠 & 협업",
    question: "블로그 콘텐츠나 협업(브랜디드 콘텐츠, 제휴) 제안은 어떻게 진행하나요?",
    answer:
      "라이프스타일, 가드닝, 도서 및 영화/미디어 관련 협업 제안은 언제나 환영합니다. 아래 1:1 문의 폼이나 공식 이메일(contact@sy-lifestyle.kr)로 세부 제안서나 내용을 보내주시면 영업일 기준 1~2일 내에 회신드립니다.",
  },
  {
    category: "나의 작은 농장",
    question: "텃밭 가꾸기 팁이나 추천 작물 질문을 남겨도 되나요?",
    answer:
      "물론입니다! 베란다 가드닝 및 주말농장 작물 재배에 관한 질문은 '커뮤니티' 게시판에 남겨주시면 다른 가드너분들과 함께 생생한 팁을 나눌 수 있으며, 개별적인 질문은 1:1 문의를 통해서도 답변해 드리고 있습니다.",
  },
  {
    category: "영화 & 드라마",
    question: "소개된 촬영지 코스나 추천작 정보는 자유롭게 스크랩해도 되나요?",
    answer:
      "개인적인 여행 계획이나 소장용 스크랩은 환영합니다. 다만 상업적 재배포나 무단 복제는 제한되니, 인용 시 반드시 출처(SY 라이프스타일)를 함께 표기해 주세요.",
  },
  {
    category: "커뮤니티",
    question: "커뮤니티 이용 중 불편사항이나 건의사항은 어디로 보내면 되나요?",
    answer:
      "게시판 이용 에티켓 위반 신고나 기능 개선 아이디어는 본 문의사항 페이지의 '사이트 이용/건의' 항목으로 남겨주시면 빠르게 검토 후 조치하겠습니다.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "협업/제휴 문의",
    subject: "",
    message: "",
    agreed: false,
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);
    // 모의 전송 딜레이
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      category: "협업/제휴 문의",
      subject: "",
      message: "",
      agreed: false,
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#172B4D] pb-24">
      {/* Hero Header */}
      <section className="border-b border-[#E8E4DA] bg-[#EFECE3]/60 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172B4D]/5 text-xs font-semibold tracking-wider text-[#172B4D] uppercase mb-4">
            <span>Contact & Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D] font-serif">
            문의사항
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#172B4D]/75 leading-relaxed max-w-2xl mx-auto">
            궁금하신 점이나 나누고 싶은 이야기가 있으신가요?
            <br className="hidden sm:inline" />
            협업 제안, 콘텐츠 문의, 건의사항 등 소중한 의견을 들려주세요.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info */}
            <div className="bg-[#FAF8F5] border border-[#E8E4DA] rounded-2xl p-6 sm:p-7 shadow-xs">
              <h2 className="text-xl font-bold font-serif mb-4 text-[#172B4D]">
                직접 연락하기
              </h2>
              <p className="text-sm text-[#172B4D]/75 leading-relaxed mb-6">
                메일 또는 공식 채널을 통해 언제든 편하게 메시지를 남겨주세요.
                정성껏 확인 후 답변드리겠습니다.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#EDE9DF]">
                  <div className="w-9 h-9 rounded-lg bg-[#172B4D]/5 flex items-center justify-center text-[#172B4D] shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#172B4D]/60 uppercase tracking-wider block">
                      공식 이메일
                    </span>
                    <a
                      href="mailto:contact@sy-lifestyle.kr"
                      className="text-sm font-semibold text-[#172B4D] hover:underline"
                    >
                      contact@sy-lifestyle.kr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#EDE9DF]">
                  <div className="w-9 h-9 rounded-lg bg-[#365C45]/10 flex items-center justify-center text-[#365C45] shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#172B4D]/60 uppercase tracking-wider block">
                      답변 운영 시간
                    </span>
                    <span className="text-sm text-[#172B4D]/85 font-medium">
                      평일 10:00 ~ 18:00 (주말·공휴일 제외)
                    </span>
                    <p className="text-xs text-[#172B4D]/60 mt-0.5">
                      접수 후 통상 24~48시간 이내에 회신합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#EDE9DF]">
                  <div className="w-9 h-9 rounded-lg bg-[#873F4B]/10 flex items-center justify-center text-[#873F4B] shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#172B4D]/60 uppercase tracking-wider block">
                      소셜 & 채널
                    </span>
                    <div className="flex items-center gap-3 mt-1 text-sm text-[#172B4D]">
                      <span className="font-medium hover:underline cursor-pointer">인스타그램 @sy_lifestyle</span>
                      <span className="text-[#172B4D]/30">|</span>
                      <span className="font-medium hover:underline cursor-pointer">브런치</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Box */}
            <div className="bg-[#EFECE3]/70 border border-[#E8E4DA] rounded-2xl p-6">
              <h3 className="font-bold text-sm text-[#172B4D] mb-2 flex items-center gap-2">
                <span>💡</span> 커뮤니티 게시판을 활용해보세요
              </h3>
              <p className="text-xs text-[#172B4D]/75 leading-relaxed mb-4">
                가드닝 노하우 공유나 영화/드라마에 대한 감상은 커뮤니티의 자유게시판에 올리시면 다양한 이웃들과 함께 소통하실 수 있습니다.
              </p>
              <Link
                href="/community"
                className="inline-flex items-center text-xs font-semibold text-[#172B4D] hover:underline gap-1"
              >
                커뮤니티 바로가기 <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] border border-[#E8E4DA] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h2 className="text-2xl font-bold font-serif text-[#172B4D]">
                  1:1 문의 남기기
                </h2>
                <p className="text-sm text-[#172B4D]/70 mt-1">
                  아래 항목을 작성해주시면 남겨주신 이메일로 답변을 보내드립니다.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#365C45]/10 text-[#365C45] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D] mb-2 font-serif">
                    문의가 정상적으로 접수되었습니다
                  </h3>
                  <p className="text-sm text-[#172B4D]/75 leading-relaxed max-w-md mx-auto mb-6">
                    소중한 메시지를 전달받았습니다. <strong>{formData.email}</strong> 주소로
                    영업일 기준 24~48시간 이내에 꼼꼼히 검토 후 연락드리겠습니다.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-[#172B4D] text-[#F7F5F0] font-semibold text-sm hover:bg-[#172B4D]/90 transition-colors shadow-xs"
                  >
                    추가 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#172B4D] mb-1.5">
                        이름 / 닉네임 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="홍길동"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED9CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#172B4D]/30 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#172B4D] mb-1.5">
                        회신받을 이메일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@email.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED9CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#172B4D]/30 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172B4D] mb-1.5">
                      문의 유형 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED9CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#172B4D]/30 transition text-[#172B4D]"
                    >
                      <option value="협업/제휴 문의">협업 / 제휴 문의</option>
                      <option value="콘텐츠 관련 문의">콘텐츠 관련 문의</option>
                      <option value="텃밭 및 가드닝 문의">텃밭 및 가드닝 문의</option>
                      <option value="사이트 이용 및 버그 제보">사이트 이용 및 버그 제보</option>
                      <option value="기타 건의사항">기타 건의사항</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172B4D] mb-1.5">
                      문의 제목 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="문의 내용의 핵심을 간략히 적어주세요"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED9CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#172B4D]/30 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172B4D] mb-1.5">
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="구체적인 문의 내용을 적어주시면 보다 정확하고 빠른 답변에 도움이 됩니다."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED9CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#172B4D]/30 transition resize-y"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="mt-0.5 rounded border-[#DED9CC] text-[#172B4D] focus:ring-[#172B4D]"
                      />
                      <span className="text-xs text-[#172B4D]/75 leading-tight">
                        답변 제공 및 문의 처리를 위한 <strong>개인정보(이름, 이메일) 수집 및 이용</strong>에 동의합니다.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#172B4D] text-[#F7F5F0] font-semibold text-sm hover:bg-[#172B4D]/90 active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                          <span>문의 접수 중...</span>
                        </>
                      ) : (
                        <span>문의 보내기</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#172B4D]">
              자주 묻는 질문 (FAQ)
            </h2>
            <p className="mt-2 text-sm text-[#172B4D]/70">
              문의 전 자주 묻는 질문을 확인해보시면 궁금하신 점을 더 빠르게 해결하실 수 있습니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] border border-[#E8E4DA] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F3EFE6] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#172B4D]/10 text-[#172B4D]">
                        {faq.category}
                      </span>
                      <span className="font-medium text-sm sm:text-base text-[#172B4D]">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`text-[#172B4D]/60 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#172B4D]/80 leading-relaxed border-t border-[#E8E4DA]/60 bg-white/40 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
