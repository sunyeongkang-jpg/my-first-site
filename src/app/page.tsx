import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import AboutSection from "@/components/home/AboutSection";
import LatestPreviewSection from "@/components/home/LatestPreviewSection";

export default function HomePage() {
  return (
    <div className="w-full space-y-4">
      {/* 1. Main Hero Banner */}
      <HeroSection />

      {/* 2. Four Main Category Cards */}
      <CategoryGrid />

      {/* 3. Editorial Highlights */}
      <LatestPreviewSection />

      {/* 4. About SY Brand Section */}
      <AboutSection />
    </div>
  );
}
