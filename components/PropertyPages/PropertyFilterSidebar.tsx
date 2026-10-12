"use client";

import { ChevronDown, Star, Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

type Props = {
  type: "hotel" | "accommodation";
  areas: string[];

  selectedStars: number[];
  setSelectedStars: (value: number[]) => void;

  selectedAreas: string[];
  setSelectedAreas: (value: string[]) => void;

  priceRange: number[];
  setPriceRange: (value: number[]) => void;

  searchTerm: string;
  setSearchTerm: (value: string) => void;

  selectedRating: number | null;
  setSelectedRating: (value: number | null) => void;

  selectedBeds: number[];
  setSelectedBeds: (value: number[]) => void;

  selectedFood: string[];
  setSelectedFood: (value: string[]) => void;

  selectedAmenities: string[];
  setSelectedAmenities: (value: string[]) => void;

  selectedBadges: string[];
  setSelectedBadges: (value: string[]) => void;

  className?: string;

  onClose?: () => void;

  filteredCount?: number;
};

export default function PropertyFilterSidebar({
  type,
  areas,
  selectedStars,
  setSelectedStars,
  selectedAreas,
  setSelectedAreas,
  priceRange,
  setPriceRange,
  searchTerm,
  setSearchTerm,
  selectedRating,
  setSelectedRating,
  selectedBeds,
  setSelectedBeds,
  selectedFood,
  setSelectedFood,
  selectedAmenities,
  setSelectedAmenities,
  selectedBadges,
  setSelectedBadges,
  className,
  onClose,
  filteredCount,
}: Props) {
  const [openSections, setOpenSections] = useState<string[]>(["price"]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section],
    );
  };

  const toggleStar = (star: number) => {
    setSelectedStars(
      selectedStars.includes(star)
        ? selectedStars.filter((item) => item !== star)
        : [...selectedStars, star],
    );
  };

  const toggleArea = (area: string) => {
    setSelectedAreas(
      selectedAreas.includes(area)
        ? selectedAreas.filter((item) => item !== area)
        : [...selectedAreas, area],
    );
  };

  const toggleBadge = (offer: string) => {
    setSelectedBadges(
      selectedBadges.includes(offer)
        ? selectedBadges.filter((item) => item !== offer)
        : [...selectedBadges, offer],
    );
  };

  return (
    <div
      dir="rtl"
      className={`
      flex
      flex-col
      border
      border-[#E5E7EB]
      bg-white
      overflow-x-hidden
      shadow-[0_2px_8px_rgba(0,0,0,.06)]
      ${className ?? "sticky top-5 w-75 rounded-xl "}
    `}
    >
      <h1 className="p-4 font-bold flex items-center gap-1.5">
        <button onClick={onClose} aria-label="بستن فیلتر" className="md:hidden">
          <ArrowRight size={18} />
        </button>

        {type === "hotel" ? "فیلتر های هتل" : "فیلتر های اقامتگاه"}
      </h1>

      {/* باکس فیلتر ها به صورت جدا برای اسکرول */}
      <div className="overflow-y-auto max-h-[calc(100vh-40px)] mb-20 md:mb-0">
        {/* سرچ هتل */}

        <div className="border-b border-[#ECECEC] p-4">
          <div className="relative">
            <Search
              size={17}
              className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="نام هتل را جستجو کنید"
              className="
              h-11
              w-full
              rounded-lg
              border
              border-[#E5E7EB]
              pr-10
              pl-3
              text-[13px]
              outline-none
              focus:border-[#00A6A6]
            "
            />
          </div>
        </div>

        {/* مجموع قیمت */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("price")}
            className="
      flex
      w-full
      items-center
      justify-between
      px-4
      py-4
    "
          >
            <span className="text-[14px] font-medium text-gray-800">
              مجموع قیمت
              <span className="mr-1 text-xs text-gray-400">(تومان)</span>
            </span>

            <ChevronDown
              size={18}
              className={openSections.includes("price") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("price") && (
            <div className="px-4 pb-5" dir="rtl">
              <Slider.Root
                className="relative flex h-5 w-full touch-none select-none items-center"
                value={priceRange}
                onValueChange={setPriceRange}
                min={500000}
                max={50000000}
                step={100000}
                dir="rtl"
              >
                <Slider.Track className="relative h-2 grow rounded-full bg-gray-200">
                  <Slider.Range className="absolute h-full rounded-full bg-[#00A19A]" />
                </Slider.Track>

                <Slider.Thumb className="block h-5 w-5 rounded-full bg-[#00A19A]" />
                <Slider.Thumb className="block h-5 w-5 rounded-full bg-[#00A19A]" />
              </Slider.Root>

              <div
                className="
          mt-3
          flex
          justify-between
          text-xs
          text-gray-500
        "
              >
                <span>ارزان</span>
                <span>گران</span>
              </div>

              <div className="mt-4 flex gap-3">
                <div
                  className="
            flex-1
            rounded-lg
            border
            border-gray-200
            p-2
            text-center
            text-xs
          "
                >
                  {priceRange[0].toLocaleString("fa-IR")}

                  <div className="mt-1 text-[11px] text-gray-400">
                    ارزان‌ترین
                  </div>
                </div>

                <div
                  className="
            flex-1
            rounded-lg
            border
            border-gray-200
            p-2
            text-center
            text-xs
          "
                >
                  {priceRange[1].toLocaleString("fa-IR")}

                  <div className="mt-1 text-[11px] text-gray-400">
                    گران‌ترین
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ستاره هتل */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("stars")}
            className="
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
          "
          >
            <span className="flex items-center gap-2 text-[14px] font-medium">
              <Star size={16} className="text-yellow-500" />
              ستاره هتل
            </span>

            <ChevronDown
              size={18}
              className={openSections.includes("stars") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("stars") && (
            <div className="space-y-3 px-4 pb-5">
              {[5, 4, 3, 2, 1].map((star) => (
                <label
                  key={star}
                  className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      text-[13px]
                    "
                >
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(star)}
                    onChange={() => toggleStar(star)}
                    className="
                        accent-[#00A19A]
                      "
                  />

                  <div className="flex">
                    {Array.from({
                      length: star,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="
                              fill-yellow-400
                              text-yellow-400
                            "
                      />
                    ))}
                  </div>

                  <span className="text-xs text-gray-400">({star} ستاره)</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* تعداد تخت */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("beds")}
            className="
      flex
      w-full
      items-center
      justify-between
      px-4
      py-4
    "
          >
            <span className="text-[14px] font-medium text-gray-800">
              تعداد تخت
            </span>

            <ChevronDown
              size={18}
              className={openSections.includes("beds") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("beds") && (
            <div className="space-y-3 px-4 pb-5">
              {[
                {
                  bed: "1 تخته",
                  value: 1,
                },
                {
                  bed: "2 تخته",
                  value: 2,
                },
                {
                  bed: "3 تخته",
                  value: 3,
                },
                {
                  bed: "4 تخته",
                  value: 4,
                },
              ].map((item) => (
                <label
                  key={item.value}
                  className="
            flex
            cursor-pointer
            items-center
            justify-between
            text-[13px]
            text-gray-700
          "
                >
                  <span>{item.bed}</span>

                  <input
                    type="checkbox"
                    className="accent-[#00A19A]"
                    checked={selectedBeds.includes(item.value)}
                    onChange={() => {
                      if (selectedBeds.includes(item.value)) {
                        // حذف تعداد تخت انتخاب شده
                        setSelectedBeds(
                          selectedBeds.filter((bed) => bed !== item.value),
                        );
                      } else {
                        // اضافه کردن تعداد تخت جدید
                        setSelectedBeds([...selectedBeds, item.value]);
                      }
                    }}
                  />
                </label>
              ))}
            </div>
          )}
        </div>

        {/* امتیاز کاربران */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("rating")}
            className="
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
          "
          >
            <span className="text-[14px] font-medium text-gray-800">
              امتیاز کاربران
            </span>

            <ChevronDown
              size={18}
              className={openSections.includes("rating") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("rating") && (
            <div className="space-y-3 px-4 pb-5">
              {[
                {
                  title: "عالی",
                  score: "۹ به بالا",
                  value: 9,
                },
                {
                  title: "خیلی خوب",
                  score: "۸ تا ۹",
                  value: 8,
                },
                {
                  title: "خوب",
                  score: "۷ تا ۸",
                  value: 7,
                },
                {
                  title: "متوسط",
                  score: "۶ تا ۷",
                  value: 6,
                },
              ].map((item) => (
                <label
                  key={item.title}
                  className="
                      flex
                      cursor-pointer
                      items-center
                      justify-between
                      text-[13px]
                      text-gray-700
                    "
                >
                  <div className="flex items-center gap-2">
                    <input
                      checked={selectedRating === item.value}
                      onChange={() =>
                        setSelectedRating(
                          selectedRating === item.value ? null : item.value,
                        )
                      }
                      type="checkbox"
                      className="accent-[#00A19A]"
                    />

                    <span>{item.title}</span>
                  </div>

                  <span className="text-xs text-gray-400">{item.score}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* وعده غذایی */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("meal")}
            className="
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
          "
          >
            <span className="text-[14px] font-medium text-gray-800">
              وعده غذایی
            </span>

            <ChevronDown
              size={18}
              className={openSections.includes("meal") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("meal") && (
            <div className="space-y-3 px-4 pb-5">
              {[
                { title: "صبحانه", value: "صبحانه" },
                { title: "بدون وعده غذایی", value: "بدون وعده غذایی" },
                { title: "صبحانه + ناهار", value: "صبحانه + ناهار" },
                {
                  title: "صبحانه + ناهار + شام",
                  value: "صبحانه + ناهار + شام",
                },
                {
                  title: "صبحانه + ناهار یا شام",
                  value: "صبحانه + ناهار یا شام",
                },
              ].map((item) => (
                <label
                  key={item.title}
                  className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      text-[13px]
                      text-gray-700
                    "
                >
                  <input
                    checked={selectedFood.includes(item.value)}
                    type="checkbox"
                    className="accent-[#00A19A]"
                    onChange={() => {
                      if (selectedFood.includes(item.value)) {
                        setSelectedFood(
                          selectedFood.filter((meal) => meal !== item.value),
                        );
                      } else {
                        setSelectedFood([...selectedFood, item.value]);
                      }
                    }}
                  />

                  <span>{item.title}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* محدوده */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("area")}
            className="
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
          "
          >
            <span className="text-[14px] font-medium text-gray-800">
              محدوده
            </span>

            <ChevronDown
              size={18}
              className={openSections.includes("area") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("area") && (
            <div className="space-y-3 px-4 pb-5">
              {areas.map((area) => (
                <label
                  key={area}
                  className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      text-[13px]
                      text-gray-700
                    "
                >
                  <input
                    type="checkbox"
                    checked={selectedAreas.includes(area)}
                    onChange={() => toggleArea(area)}
                    className="accent-[#00A19A]"
                  />

                  <span>{area}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* امکانات هتل */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("facilities")}
            className="
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
          "
          >
            <span className="text-[14px] font-medium text-gray-800">
              امکانات هتل
            </span>

            <ChevronDown
              size={18}
              className={
                openSections.includes("facilities") ? "rotate-180" : ""
              }
            />
          </button>

          {openSections.includes("facilities") && (
            <div className="px-4 pb-5">
              <input
                type="text"
                placeholder="جستجوی امکانات"
                className="
                  mb-4
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-gray-200
                  px-3
                  text-[12px]
                  outline-none
                  focus:border-[#00A19A]
                "
              />

              <div className="space-y-3">
                {[
                  "پارکینگ",
                  "اینترنت رایگان",
                  "صبحانه",
                  "استخر",
                  "سونا",
                  "جکوزی",
                  "رستوران",
                  "کافی شاپ",
                  "روم سرویس",
                  "آسانسور",
                  "عکس رایگان",
                  "پذیرایی رایگان",
                  "مجموعه آبی رایگان",
                  "ترانسفر استقبال فرودگاهی",
                  "مینی بار رایگان",
                  "پارک آبی",
                  "ساحل اختصاصی",
                ].map((item) => (
                  <label
                    key={item}
                    className="
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        text-[13px]
                        text-gray-700
                      "
                  >
                    <input
                      checked={selectedAmenities.includes(item)}
                      type="checkbox"
                      className="accent-[#00A19A]"
                      onChange={() => {
                        if (selectedAmenities.includes(item)) {
                          setSelectedAmenities(
                            selectedAmenities.filter(
                              (facility) => facility !== item,
                            ),
                          );
                        } else {
                          setSelectedAmenities([...selectedAmenities, item]);
                        }
                      }}
                    />

                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* آفر */}

        <div className="border-b border-[#ECECEC]">
          <button
            onClick={() => toggleSection("offer")}
            className="
            flex
            w-full
            items-center
            justify-between
            px-4
            py-4
          "
          >
            <span className="text-[14px] font-medium text-gray-800">آفر</span>

            <ChevronDown
              size={18}
              className={openSections.includes("offer") ? "rotate-180" : ""}
            />
          </button>

          {openSections.includes("offer") && (
            <div className="space-y-3 px-4 pb-5">
              {["تخفیف ویژه", "پیشنهاد لحظه‌ای", "رزرو با تخفیف"].map(
                (offer) => (
                  <label
                    key={offer}
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      text-[13px]
                      text-gray-700
                    "
                  >
                    <input
                      type="checkbox"
                      className="accent-[#00A19A]"
                      checked={selectedBadges.includes(offer)}
                      onChange={() => {
                        if (selectedBadges.includes(offer)) {
                          setSelectedBadges(
                            selectedBadges.filter((badge) => badge !== offer),
                          );
                        } else {
                          setSelectedBadges([...selectedBadges, offer]);
                        }
                      }}
                    />

                    <span>{offer}</span>
                  </label>
                ),
              )}
            </div>
          )}
        </div>
      </div>

      {/* تعداد هتل */}
      <div
        className="
        md:hidden
        w-full *:w-full
        fixed bottom-0 z-60
        flex items-center justify-center 
        px-3 *:py-3 font-bold *:rounded-[12px]
         cursor-pointer h-20"
      >
        <button 
         onClick={onClose}
        className="text-white bg-[#fb373e]">
          نمایش {(filteredCount ?? 0).toLocaleString("fa-IR")} هتل
        </button>
      </div>
    </div>
  );
}