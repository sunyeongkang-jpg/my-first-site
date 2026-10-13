"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/Providers";

interface Comment {
  id: string;
  author: string;
  date: string;
  text: string;
}

interface Post {
  id: string;
  category: "자유게시판" | "취미 공유" | "영화·드라마 이야기" | "여행 이야기";
  title: string;
  author: string;
  date: string;
  content: string;
  likes: number;
  comments: Comment[];
  isPinned?: boolean;
}

const INITIAL_POSTS: Post[] = [
  {
    id: "c-pin-1",
    category: "자유게시판",
    title: "공지: SY 커뮤니티에 오신 것을 환영합니다! (이용 수칙 & 다정한 나눔)",
    author: "SY 운영자",
    date: "2026.10.01",
    content:
      "안녕하세요, 작은 걸음들이 모여 큰 꿈이 되는 공간 SY 커뮤니티입니다. 이곳은 서로의 소소한 취향과 일상을 다정하게 존중하는 열린 마당입니다. 식물 가꾸기 팁, 감명 깊게 본 영화, 따뜻한 일상 이야기를 자유롭게 나눠주세요.",
    likes: 48,
    comments: [
      { id: "cm-1", author: "초록이", date: "2026.10.02", text: "따뜻한 공간 만들어주셔서 감사합니다! 자주 올게요." },
      { id: "cm-2", author: "시네필", date: "2026.10.03", text: "영화 이야기 많이 나누고 싶습니다. 환영해요!" },
    ],
    isPinned: true,
  },
  {
    id: "c-1",
    category: "취미 공유",
    title: "베란다에서 애플민트 키우시는 분들, 잎 마름 어떻게 해결하시나요?",
    author: "가드너꿈나무",
    date: "2026.10.12",
    content:
      "얼마 전 양재 꽃시장에서 데려온 애플민트인데, 아침마다 잎 끝이 조금씩 바스락거려요. 바람이 잘 통하는 곳에 두고 겉흙 마르면 물을 주고 있는데 혹시 직사광선이 너무 강해서일까요? 선배 가드너님들의 조언 부탁드립니다!",
    likes: 14,
    comments: [
      { id: "cm-3", author: "SY", date: "2026.10.12", text: "민트류는 물을 좋아하지만 통풍이 부족하거나 한낮 직사광선에 타는 경우가 있어요! 반양지나 유리창을 거친 햇빛 아래로 옮겨보세요 :)" },
    ],
  },
  {
    id: "c-2",
    category: "영화·드라마 이야기",
    title: "가을에 혼자 따뜻한 차 마시며 보기 좋은 인생 영화 3편 추천해요",
    author: "달콤한시네마",
    date: "2026.10.10",
    content:
      "날씨가 쌀쌀해지면 저는 꼭 이 세 편을 복습합니다. 1. 카모메 식당 (담백한 위로), 2. 리틀 포레스트 (사계절의 음식과 자연), 3. 미드나잇 인 파리 (시간을 초월한 낭만). 여러분의 가을 인생 영화도 댓글로 알려주세요!",
    likes: 29,
    comments: [
      { id: "cm-4", author: "커피향기", date: "2026.10.11", text: "카모메 식당 시나몬 롤 장면은 언제 봐도 마음이 몽글몽글해지죠." },
    ],
  },
  {
    id: "c-3",
    category: "여행 이야기",
    title: "경북 군위 화본역과 혜원의 집 다녀왔습니다 (포토 후기)",
    author: "여행자수진",
    date: "2026.10.08",
    content:
      "홈페이지에 소개된 리틀 포레스트 촬영지 코스를 보고 지난 주말 군위에 다녀왔습니다. 가을 들판이 황금빛으로 물들어서 기차역 풍경이 그림 같았어요. 혜원의 집 마루에 앉아 텀블러에 담아간 따뜻한 둥굴레차를 마시니 일주일치 스트레스가 다 날아갔습니다.",
    likes: 35,
    comments: [
      { id: "cm-5", author: "바람결", date: "2026.10.09", text: "사진만 봐도 힐링되네요! 이번 주말에 꼭 가봐야겠어요." },
    ],
  },
  {
    id: "c-4",
    category: "자유게시판",
    title: "주말 아침 30분 일찍 일어나는 것만으로 삶이 달라지네요",
    author: "모닝러버",
    date: "2026.10.06",
    content:
      "평소엔 9시까지 늦잠 자다가 오늘 7시에 눈떠서 스트레칭하고 창문 활짝 열어 환기시켰습니다. 좋아하는 음악 틀어두고 따뜻한 보리차 한 잔 마셨을 뿐인데 하루가 두 배로 길어진 느낌이에요.",
    likes: 22,
    comments: [],
  },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [currentTab, setCurrentTab] = useState<string>("전체");

  // Post detail modal
  const [viewingPost, setViewingPost] = useState<Post | null>(null);
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState("");

  // Write new post modal
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<Post["category"]>("자유게시판");
  const [newAuthor, setNewAuthor] = useState("");
  const [newContent, setNewContent] = useState("");

  const tabs = ["전체", "자유게시판", "취미 공유", "영화·드라마 이야기", "여행 이야기"];

  const filteredPosts = posts.filter((post) => {
    if (currentTab === "전체") return true;
    return post.category === currentTab;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPostItem: Post = {
      id: `c-user-${Date.now()}`,
      category: newCategory,
      title: newTitle,
      author: newAuthor.trim() || "다정한이웃",
      date: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      content: newContent,
      likes: 0,
      comments: [],
    };

    setPosts([newPostItem, ...posts]);
    setIsWriteModalOpen(false);
    setNewTitle("");
    setNewContent("");
    setNewAuthor("");
  };

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
    if (viewingPost && viewingPost.id === postId) {
      setViewingPost((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!viewingPost || !newCommentText.trim()) return;

    const commentObj: Comment = {
      id: `cm-${Date.now()}`,
      author: newCommentAuthor.trim() || "방문자",
      date: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      text: newCommentText,
    };

    const updated = {
      ...viewingPost,
      comments: [...viewingPost.comments, commentObj],
    };

    setViewingPost(updated);
    setPosts((prev) => prev.map((p) => (p.id === viewingPost.id ? updated : p)));
    setNewCommentText("");
  };

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#527CA4] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
              <span>☕ Community & Stories</span>
              <span>•</span>
              <span>취향을 나누는 온기 가득한 마당</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              커뮤니티
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed break-keep">
              식물을 사랑하는 사람들의 팁 나눔, 영화와 드라마가 남긴 여운, 소소한 일상과 여행의 설렘.
              같은 관심사를 가진 사람들과 다정하게 연결되는 공간입니다.
            </p>
          </div>
        </div>

        {/* Decorative people dialogue watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
          <svg className="w-96 h-96 text-white fill-current" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        {/* Top Control Bar: Tabs & New Post Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#E3DDD0] pb-4 gap-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setCurrentTab(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentTab === tab
                    ? "bg-[#527CA4] text-white shadow-xs"
                    : "bg-white/80 text-[#172B4D]/75 hover:bg-white border border-[#E8E2D5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsWriteModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#172B4D] hover:bg-[#2A4365] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 self-end sm:self-auto"
          >
            <span>✏️ 글쓰기</span>
          </button>
        </div>

        {/* Posts List */}
        <div id="board" className="space-y-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setViewingPost(post)}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-0.5 ${
                post.isPinned
                  ? "bg-[#FAF7EF] border-[#E5DBBF]"
                  : "bg-white border-[#E8E2D5] hover:border-[#CCD5E0]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs">
                  {post.isPinned && (
                    <span className="px-2 py-0.5 rounded-full bg-[#172B4D] text-white font-bold text-[10px]">
                      공지
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EEF4FA] text-[#527CA4] font-bold">
                    {post.category}
                  </span>
                  <span className="font-medium text-[#172B4D]/75">{post.author}</span>
                  <span className="text-[#172B4D]/40">•</span>
                  <span className="font-mono text-[#172B4D]/50">{post.date}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#172B4D]/60">
                  <span className="flex items-center gap-1">
                    ❤️ {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    💬 {post.comments.length}
                  </span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#172B4D] mt-2 group-hover:text-[#527CA4]">
                {post.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-[#172B4D]/75 line-clamp-2">
                {post.content}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Post Detail Modal */}
      {viewingPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setViewingPost(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E8E2D5] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EEF4FA] text-[#527CA4] font-bold">
                  {viewingPost.category}
                </span>
                <span className="font-bold text-[#172B4D]">{viewingPost.author}</span>
                <span className="text-[#172B4D]/50 font-mono">{viewingPost.date}</span>
              </div>
              <button
                type="button"
                onClick={() => setViewingPost(null)}
                className="p-1 rounded-full text-[#172B4D]/60 hover:text-[#172B4D] hover:bg-[#EAE5D8]"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D] leading-snug mb-4">
              {viewingPost.title}
            </h2>

            <div className="py-4 border-y border-[#E8E2D5] text-sm text-[#172B4D]/85 leading-relaxed break-keep whitespace-pre-wrap">
              {viewingPost.content}
            </div>

            {/* Like Action */}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleLike(viewingPost.id)}
                className="px-4 py-2 rounded-xl bg-white border border-[#E8E2D5] hover:border-[#527CA4] text-xs font-bold text-[#527CA4] flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-all"
              >
                <span>❤️ 공감해요</span>
                <span>({viewingPost.likes})</span>
              </button>

              <span className="text-xs text-[#172B4D]/50 font-handwriting text-base">
                Small Steps ♡
              </span>
            </div>

            {/* Comments Section */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D5] space-y-4">
              <h4 className="text-sm font-bold text-[#172B4D] flex items-center gap-1.5">
                <span>댓글</span>
                <span className="text-[#527CA4]">({viewingPost.comments.length})</span>
              </h4>

              {/* Comment Input */}
              <form onSubmit={handleAddComment} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCommentAuthor}
                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                    placeholder="작성자 닉네임"
                    className="w-1/3 px-3 py-2 text-xs rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden focus:border-[#527CA4]"
                  />
                  <input
                    type="text"
                    required
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="다정한 댓글을 남겨주세요..."
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden focus:border-[#527CA4]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#527CA4] text-white rounded-xl text-xs font-bold hover:bg-[#3D6388] shrink-0"
                  >
                    등록
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-2 pt-2">
                {viewingPost.comments.length > 0 ? (
                  viewingPost.comments.map((cm) => (
                    <div
                      key={cm.id}
                      className="p-3 bg-white rounded-xl border border-[#ECE5D8] text-xs"
                    >
                      <div className="flex justify-between text-[#172B4D]/60 mb-1">
                        <span className="font-bold text-[#172B4D]">{cm.author}</span>
                        <span className="font-mono text-[11px]">{cm.date}</span>
                      </div>
                      <p className="text-[#172B4D]/85 leading-relaxed">{cm.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-[#172B4D]/40 text-center py-4">
                    첫 번째 댓글의 주인공이 되어보세요!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Write New Post Modal */}
      {isWriteModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsWriteModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E8E2D5] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-bold text-[#172B4D]">새로운 이야기 나누기</h3>
              <button
                type="button"
                onClick={() => setIsWriteModalOpen(false)}
                className="p-1 rounded-full text-[#172B4D]/60 hover:text-[#172B4D]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#172B4D] mb-1">카테고리</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as Post["category"])}
                  className="w-full p-2.5 rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden"
                >
                  <option value="자유게시판">자유게시판</option>
                  <option value="취미 공유">취미 공유</option>
                  <option value="영화·드라마 이야기">영화·드라마 이야기</option>
                  <option value="여행 이야기">여행 이야기</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#172B4D] mb-1">닉네임</label>
                <input
                  type="text"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="작성자 닉네임 (미입력시 '다정한이웃')"
                  className="w-full p-2.5 rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-[#172B4D] mb-1">제목</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="글 제목을 입력하세요"
                  className="w-full p-2.5 rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-[#172B4D] mb-1">내용</label>
                <textarea
                  required
                  rows={5}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="좋아하는 것들에 대한 따뜻한 이야기를 들려주세요..."
                  className="w-full p-2.5 rounded-xl border border-[#DED8C6] bg-white text-[#172B4D] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-[#DDD] hover:bg-[#EBE5D8]"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#172B4D] text-white font-bold hover:bg-[#2A4365]"
                >
                  게시하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
