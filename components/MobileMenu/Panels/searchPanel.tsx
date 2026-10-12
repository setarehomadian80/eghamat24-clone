"use client";

import { Hotel, House, Search, X } from "lucide-react";
import { useState } from "react";

import citiesHotel from "@/data/citiesHotel.json";
import citiesAccommodation from "@/data/citiesAccommodation.json";
import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";

type Props = {
  onClose: () => void;
};

// یکسان‌سازی حروف فارسی و عربی و فاصله‌ها برای جست‌وجو
function normalizeText(value: string) {
  return value
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/\u200c/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export default function SearchPanel({ onClose }: Props) {
  const [query, setQuery] = useState("");

  const searchQuery = normalizeText(query);

  // شهرهای مرتبط با هتل‌ها
  const hotelCityIds = new Set(
    citiesHotel
      .filter(
        (city) =>
          searchQuery !== "" &&
          normalizeText(city.name).includes(searchQuery)
      )
      .map((city) => city.cityId)
  );

  // شهرهای مرتبط با اقامتگاه‌ها
  const accommodationCityIds = new Set(
    citiesAccommodation
      .filter(
        (city) =>
          searchQuery !== "" &&
          normalizeText(city.name).includes(searchQuery)
      )
      .map((city) => city.cityId)
  );

  const filteredHotels = hotels.filter(
    (hotel) =>
      searchQuery !== "" &&
      (normalizeText(hotel.name).includes(searchQuery) ||
        hotelCityIds.has(hotel.cityId))
  );

  const filteredAccommodations = accommodation.filter(
    (item) =>
      searchQuery !== "" &&
      (normalizeText(item.name).includes(searchQuery) ||
        accommodationCityIds.has(item.cityId))
  );

  const results = [
    ...filteredHotels.map((hotel) => ({
      ...hotel,
      resultType: "hotel" as const,
    })),
    ...filteredAccommodations.map((item) => ({
      ...item,
      resultType: "accommodation" as const,
    })),
  ];

  return (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-white p-4"
      dir="rtl"
    >
      {/* header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[16px] font-bold">جستجو</h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="بستن جستجو"
          className="cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>

      {/* input */}
      <div className="relative">
        <Search
          size={17}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="نام هتل، اقامتگاه یا شهر را جستجو کنید"
          aria-label="جستجوی هتل، اقامتگاه یا شهر"
          autoFocus
          className="
            h-11 w-full rounded-lg
            border border-[#E5E7EB]
            pr-10 pl-3 text-[13px] outline-none
          "
        />
      </div>

      {/* results */}
      <div className="mt-5">
        {results.map((item) => {
          const Icon = item.resultType === "hotel" ? Hotel : House;

          return (
            <div
              key={`${item.resultType}-${item.id}`}
              className="
                flex items-center justify-between
                gap-3 border-b py-4
              "
            >
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <Icon size={20} className="shrink-0" />

                <div className="min-w-0">
                  <p className="truncate text-[12px]">{item.name}</p>

                  <span className="text-[10px] text-gray-400">
                    {item.resultType === "hotel" ? "هتل" : "اقامتگاه"}
                  </span>
                </div>
              </div>

              <div className="text-[12px] whitespace-nowrap">
                از {item.price} / شبی
              </div>
            </div>
          );
        })}

        {searchQuery !== "" && results.length === 0 && (
          <p className="py-8 text-center text-[13px] text-gray-500">
            هتل یا اقامتگاهی پیدا نشد.
          </p>
        )}
      </div>
    </div>
  );
}
