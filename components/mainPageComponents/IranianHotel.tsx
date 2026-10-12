"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import citiesHotel from "@/data/citiesHotel.json";

import "swiper/css";

const banners = [
  {
    cityName: "تهران",
    image: "/iranianHotel/tehran.jpg",
  },
  {
    cityName: "یزد",
    image: "/iranianHotel/yazd.jpg",
  },
  {
    cityName: "تبریز",
    image: "/iranianHotel/tabriz.jpg",
  },
  {
    cityName: "شیراز",
    image: "/iranianHotel/shiraz.jpg",
  },
  {
    cityName: "گرگان",
    image: "/iranianHotel/gorgan.jpg",
  },
  {
    cityName: "بوشهر",
    image: "/iranianHotel/bushehr.jpg",
  },
  {
    cityName: "اصفهان",
    image: "/iranianHotel/esfahan.jpg",
  },
  {
    cityName: "کیش",
    image: "/iranianHotel/kish.jpg",
  },
  {
    cityName: "مشهد",
    image: "/iranianHotel/mashhad.jpg",
  },
];

// اتصال تصویر هر شهر به اطلاعات و لینک موجود در JSON
const cityBanners = banners.flatMap((banner) => {
  const city = citiesHotel.find(
    (item) =>
      item.city === banner.cityName &&
      item.type === "iran"
  );

  if (!city?.href) return [];

  return [
    {
      id: city.id,
      title: city.name,
      href: city.href,
      image: banner.image,
    },
  ];
});

export default function IranianHotelSlider() {
  return (
    <section className="w-full" dir="rtl">
      <div className="relative z-10 my-4 flex items-center justify-between">
        <h1 className="text-[16px] font-bold lg:text-[18px]">
          هتل‌های ایران
        </h1>

        {/* آدرس واقعی صفحه همه شهرها را جایگزین # کن */}
        <Link
          href="#"
          className="flex items-center text-[14px] text-[#37a0fb] lg:text-[16px]"
        >
          همه شهرها
          <ChevronLeft size={20} />
        </Link>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={cityBanners.length > 6}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="rounded-xl"
      >
        {cityBanners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <Link
              href={banner.href}
              className="block"
              aria-label={banner.title}
            >
              <div
                className="
                  relative h-35 overflow-hidden rounded-lg
                  md:h-50 lg:h-65
                "
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 767px) 33vw, (max-width: 1023px) 25vw, 16vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-2 text-center text-[12px] font-medium lg:text-[14px]">
                {banner.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
