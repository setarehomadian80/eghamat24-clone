"use client";

import Image from "next/image";

import detailHotel from "@/data/detailHotel.json";
import detailAccommodation from "@/data/detailAccommodation.json";
import { useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
  name: string;
  onClose: () => void;
};

export default function GalleryList({ slug, type, name, onClose }: Props) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // پیدا کردن دیتای مربوطه
  const detail =
    type === "hotel"
      ? detailHotel.find((item) => item.slug === slug)
      : detailAccommodation.find((item) => item.slug === slug);

  if (!detail) return null;

  const images = detail.gallery;

  return (
    <main
      className="
        fixed
        inset-0
        z-50
        bg-black/50
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          bg-white
          w-[80%]
          md:w-[70%]
          h-[80%]
          rounded-xl
          p-5
          overflow-y-auto
          scrollbar-thin
        "
      >
        {/* header */}

        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-lg">تصاویر {name}</h2>

          <button
            onClick={onClose}
            className="
              px-4
              py-2
              rounded-lg
              text-gray-600
            "
          >
            <X />
          </button>
        </div>

        {/* gallery */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-3
          "
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="
                relative
                h-[180px]
                rounded-xl
                overflow-hidden
              "
            >
              <Image
                src={image}
                alt={`${name}-${index}`}
                fill
                sizes="
    (max-width: 1024px) 50vw,
    (max-width: 1280px) 33vw,
    25vw
  "
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
