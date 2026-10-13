import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import UserModal from "@/components/UserModal";
import { Providers } from "@/components/Providers";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SY | Small Steps, Big Dreams - 좋아하는 것들로 더 특별한 일상을",
  description:
    "나의 작은 농장, 좋아하는 영화와 드라마, 소소한 일상기록, 그리고 함께 나누는 따뜻한 커뮤니티. 감성 라이프스타일 플랫폼 SY.",
  keywords: ["SY", "Small Steps Big Dreams", "라이프스타일", "텃밭", "영화", "드라마", "일상기록", "커뮤니티"],
  openGraph: {
    title: "SY | Small Steps, Big Dreams",
    description: "좋아하는 것들로 더 특별한 일상을 채워가는 감성 라이프스타일 공간",
    siteName: "SY",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#172B4D] font-sans selection:bg-[#172B4D] selection:text-[#F7F5F0]">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <SearchModal />
          <UserModal />
        </Providers>
      </body>
    </html>
  );
}
