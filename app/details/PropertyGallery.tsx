"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import hotels from "@/data/hotels.json";
import detailHotels from "@/data/detailHotel.json";
import detailAccommodation from "@/data/detailAccommodation.json";

import GalleryList from "./GalleryList";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

export default function HotelGallery({ slug, type }: Props) {
  const hotel = hotels.find((item) => item.slug === slug);

  const detail =
    type === "hotel"
      ? detailHotels.find((item) => item.slug === slug)
      : detailAccommodation.find((item) => item.slug === slug);

  const [showGallery, setShowGallery] = useState(false);

  if (!detail) return null;

  const mainImage = type === "hotel" ? hotel?.image : detail?.gallery[0];

  if (!mainImage) return null;

  const images = [
    mainImage,
    ...(detail.gallery.filter((img) => img !== mainImage) ?? []),
  ];

  const propertyName =
    type === "hotel" ? hotel?.name || "" : detail?.title || "";

  const [activeImage, setActiveImage] = useState(images[0]);

  if (showGallery) {
    return (
      <GalleryList
        slug={slug}
        type={type}
        name={propertyName}
        onClose={() => setShowGallery(false)}
      />
    );
  }

  return (
    <section
      className="
        w-full
        max-w-[1400px]
        mx-auto
        overflow-hidden
      "
    >
      {/* ================= موبایل ================= */}

      <div className="block md:hidden overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  w-full
                  h-[250px]
                "
              >
                <Image
                  src={image}
                  alt={propertyName}
                  width={900}
                  height={600}
                  priority={index === 0}
                  // sizes="100vw"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= md به بالا ================= */}

      <div
        className="
          hidden
          md:grid
          md:grid-cols-4
          gap-2
          md:mt-10
        "
      >
     

        {/* عکس اصلی */}

        <div
          className="
            col-span-2
            h-full
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            src={activeImage}
            alt={propertyName}
            width={1000}
            height={800}
            priority
            sizes="50vw"
            className="
              w-full
              h-full
              object-cover
              rounded-xl
            "
          />
        </div>

        {/* چهار عکس کوچک */}

        <div
          className="
            col-span-2
            grid
            grid-cols-2
            grid-rows-2
            gap-2
            h-full
            relative
          "
        >
          {images.slice(1, 5).map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className="
                relative
                overflow-hidden
                rounded-xl
              "
            >
              <Image
                src={image}
                alt={`${propertyName}-${index}`}
                width={500}
                height={400}
                sizes="25vw"
                className={`
                  w-full
                  h-full
                  object-cover
                  rounded-xl
                  transition
                  duration-200
                  ${
                    activeImage === image
                      ? "brightness-75"
                      : "hover:brightness-90"
                  }
                `}
              />
            </button>
          ))}

          <button
            onClick={() => setShowGallery(true)}
            className="
              absolute
              bottom-3
              left-3
              bg-white
              text-gray-800
              px-5
              py-2
              rounded-lg
              shadow-md
              text-sm
              font-medium
            "
          >
            مشاهده همه
          </button>
        </div>
      </div>
    </section>
  );
}
