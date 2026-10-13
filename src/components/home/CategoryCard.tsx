import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  buttonText: string;
  themeColor: string;
  bgPastel: string;
  borderPastel: string;
  icon: React.ReactNode;
  tag: string;
}

export default function CategoryCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  buttonText,
  themeColor,
  bgPastel,
  borderPastel,
  icon,
  tag,
}: CategoryCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between h-full rounded-3xl ${bgPastel} ${borderPastel} border shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
    >
      <div>
        {/* Uniform Aspect Ratio Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />

          {/* Floating Category Pill */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm backdrop-blur-xs"
              style={{ backgroundColor: themeColor }}
            >
              {icon}
              <span>{tag}</span>
            </span>
          </div>
        </div>

        {/* Text Content Area */}
        <div className="p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#172B4D] tracking-tight group-hover:text-[#172B4D]">
              {title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#172B4D]/75 leading-relaxed break-keep min-h-[40px]">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Button fixed at the bottom for strict uniformity */}
      <div className="px-5 sm:px-6 pb-6 pt-0">
        <Link
          href={href}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white text-xs sm:text-sm font-bold border transition-all duration-200 shadow-2xs group-hover:shadow-sm"
          style={{ borderColor: themeColor, color: themeColor }}
        >
          <span>{buttonText}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1 font-mono font-bold">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
