"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "./Providers";

export default function Header() {
  const pathname = usePathname();
  const { openSearch, openUserModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "홈", href: "/" },
    { label: "나의 작은 농장", href: "/farm" },
    { label: "영화 & 드라마", href: "/media" },
    { label: "일상기록", href: "/daily" },
    { label: "커뮤니티", href: "/community" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F5F0]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#E8E4DA]"
          : "bg-[#F7F5F0] py-4 sm:py-5 border-b border-[#EDE9DF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: SY Logo + Slogan */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            id="nav-logo"
            aria-label="SY 홈으로 이동"
          >
            <div className="w-10 h-10 rounded-full bg-[#172B4D] text-[#F7F5F0] flex items-center justify-center font-bold text-lg tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105">
              SY
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#172B4D] leading-tight">
                SY
              </span>
              <span className="text-[11px] sm:text-xs text-[#172B4D]/70 font-medium tracking-wide">
                Small Steps, Big Dreams
              </span>
            </div>
          </Link>

          {/* Right: Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="메인 내비게이션">
            <ul className="flex items-center gap-6 lg:gap-8 text-sm lg:text-[15px] font-medium text-[#172B4D]">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="relative py-1">
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 hover:text-[#172B4D] ${
                        active
                          ? "text-[#172B4D] font-bold"
                          : "text-[#172B4D]/75 hover:text-[#172B4D]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#172B4D] rounded-full animate-in fade-in duration-300" />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Utility Icons */}
            <div className="flex items-center gap-2 pl-4 border-l border-[#DED9CC]">
              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                className="p-2 rounded-full text-[#172B4D] hover:bg-[#EBE7DC] transition-colors"
                id="search-btn"
                aria-label="통합 검색 열기"
                title="검색 (단축키: /)"
              >
                <svg
                  className="w-5 h-5"
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
              </button>

              {/* User Profile Button */}
              <button
                type="button"
                onClick={openUserModal}
                className="p-2 rounded-full text-[#172B4D] hover:bg-[#EBE7DC] transition-colors"
                id="user-profile-btn"
                aria-label="사용자 프로필 열기"
                title="SY 프로필 및 북마크"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Right Buttons (Search, Profile, Hamburger) */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={openSearch}
              className="p-2 text-[#172B4D] rounded-lg hover:bg-[#EBE7DC]"
              aria-label="검색 열기"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={openUserModal}
              className="p-2 text-[#172B4D] rounded-lg hover:bg-[#EBE7DC]"
              aria-label="프로필 열기"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#172B4D] rounded-lg hover:bg-[#EBE7DC] transition-colors"
              id="mobile-menu-btn"
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E4DA] bg-[#FAF8F5]/98 px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-base font-medium rounded-lg transition-colors ${
                      active
                        ? "text-[#172B4D] font-bold border-l-4 border-[#172B4D] pl-3 bg-[#EFECE3]"
                        : "text-[#172B4D]/80 hover:text-[#172B4D] pl-1"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-[#172B4D]/40">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 border-t border-[#E8E4DA] flex items-center justify-between text-xs text-[#172B4D]/70">
            <span>Small Steps, Big Dreams</span>
            <span className="font-serif italic">SY Lifestyle</span>
          </div>
        </div>
      )}
    </header>
  );
}
