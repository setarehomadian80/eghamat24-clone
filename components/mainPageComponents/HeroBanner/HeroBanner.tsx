"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  "/banners/آراز-موبایل.webp",
  "/banners/ارزان-مشهد.jpg",
  "/banners/اسپیناس-هومپیج-موبایل.webp",
  "/banners/اقامتگاه-های-شمال.jpg",
  "/banners/گرانمیراثموبایل.jpg",
  "/banners/هتلنورحیات-موبایل.webp",
];

const bannersDesktop = [
  "/banners/آراز-دسکتاپ.webp",
  "/banners/ارزان-مشهد.jpg",
  "/banners/اسپیناس-هومپیج-دسکتاپ--2.webp",
  "/banners/اقامتگاه-های-شمال.jpg",
  "/banners/گران-دسکتاپ.webp",
  "/banners/هتلنورحیات-دسکتاپ.webp",
];

export default function HeroBanner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-40
             md:h-50 lg:h-57.5 xl:h-75">

              {/* Mobile */}
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover md:hidden"
                sizes="(max-width: 768px) 100vw"
              />

              {/* Desktop */}
              <Image
                src={bannersDesktop[index]}
                alt={`Banner desktop ${index + 1}`}
                fill
                priority={index === 0}
                className="hidden md:block lg:object-cover"
                sizes="(min-width: 768px) 100vw"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}