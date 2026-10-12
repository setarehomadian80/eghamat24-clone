"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarMinus2,
  ListSortDescending,
  Map,
  SlidersHorizontal,
} from "lucide-react";

import PropertyFilterSidebar from "./PropertyFilterSidebar";
import PropertyCard from "./PropertyCard";
import SearchBoxPages from "./searchBoxPages";

type CityData = {
  id: number;
  cityId: number;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
  location: {
    lat: number;
    lng: number;
  };
};

export interface Property {
  id: number;

  name: string;

  slug: string;

  cityId: number;

  price: string;

  discount: string;

  image: string;

  // hotel / accommodation
  address?: string;
  stars?: number;
  rating?: string;
  reviewCount?: number;
  area?: string;
  amenities?: string[];
  beds?: number;
  mealPlan?: string;
  badge?: string;
}

type Props = {
  city: CityData;
  properties: Property[];
  type: "hotel" | "accommodation";
};

export default function CityPropertiesPage({ city, properties, type }: Props) {
  const [sortType, setSortType] = useState<
    "default" | "cheap" | "expensive" | "rating"
  >("default");

  const getPrice = (price: string) => {
    return Number(price.replace(/\./g, "").replace("تومان", "").trim());
  };

  const getRate = (rating?: string) => {
    if (!rating) return 0;

    return Number(rating.split("/")[0]);
  };

  // تاریخ روز
  const date = new Date();

  const onlineDate = date.toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
  });

  // ////////////////////////////ّFilter logic
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([500000, 50000000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBeds, setSelectedBeds] = useState<number[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const areas = Array.from(
    new Set(
      properties
        .map((property) => property.area)
        .filter((area): area is string => Boolean(area)),
    ),
  );

  // search
  const searchFilteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // stars
  const starFilteredHotels = searchFilteredProperties.filter((property) => {
    if (selectedStars.length === 0) {
      return true;
    }

    return selectedStars.includes(property.stars ?? 0);
  });

  // Rating
  const ratingFilteredHotels = starFilteredHotels.filter((property) => {
    const rating = getRate(property.rating);

    if (selectedRating === 9) {
      return rating >= 9;
    }

    if (selectedRating === 8) {
      return rating >= 8 && rating < 9;
    }

    if (selectedRating === 7) {
      return rating >= 7 && rating < 8;
    }

    if (selectedRating === 6) {
      return rating >= 6 && rating < 7;
    }

    return true;
  });

  // Bed
  const BedFilteredHotels = ratingFilteredHotels.filter((property) => {
    if (selectedBeds.length === 0) {
      return true;
    }

    return selectedBeds.includes(property.beds ?? 0);
  });

  // food
  const mealPlanFilteredHotels = BedFilteredHotels.filter((property) => {
    if (selectedFood.length === 0) {
      return true;
    }

    return selectedFood.includes(property.mealPlan ?? "");
  });

  // area
  const areaFilteredHotels = mealPlanFilteredHotels.filter((property) => {
    if (selectedAreas.length === 0) {
      return true;
    }

    return selectedAreas.includes(property.area ?? "");
  });

  // amenities
  const amenitiesFilteredHotels = areaFilteredHotels.filter((property) => {
    if (selectedAmenities.length === 0) {
      return true;
    }

    return selectedAmenities.every((amenity) =>
      property.amenities?.includes(amenity),
    );
  });

  // price
  const priceFilteredHotels = amenitiesFilteredHotels.filter((property) => {
    const price = getPrice(property.price);

    return price >= priceRange[0] && price <= priceRange[1];
  });

  // Bade
  const badgeFilteredHotels = priceFilteredHotels.filter((property) => {
    if (selectedBadges.length === 0) {
      return true;
    }

    return selectedBadges.includes(property.badge ?? "");
  });

  const sortedProperties = [...badgeFilteredHotels].sort((a, b) => {
    switch (sortType) {
      case "cheap":
        return getPrice(a.price) - getPrice(b.price);

      case "expensive":
        return getPrice(b.price) - getPrice(a.price);

      case "rating":
        return getRate(b.rating) - getRate(a.rating);

      default:
        return 0;
    }
  });

  // Mobile Nav

  const [activeSheet, setActiveSheet] = useState<
    "filter" | "sort" | "map" | null
  >(null);

  return (
    <main>
      {/*  */}
      <div className="xl:container mx-auto mt-8
       px-5">
      <SearchBoxPages />
      </div>
      {/*  */}
      <div
        className="xl:container mx-auto mt-8
       px-5  lg:flex gap-5 h-32"
      >
        {/* map */}
        <div className="w-75 hidden lg:block">
          <iframe
            src={`https://maps.google.com/maps?q=${city.location.lat},${city.location.lng}&z=13&output=embed`}
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            title={city.name}
          />
        </div>

        {/* text */}
        <div className="flex-1 flex flex-col justify-evenly gap-4">
          <p>
            لیست {type === "hotel" ? "هتل‌های" : "اقامتگاه‌های"}{" "}
            <span>{city.name}</span>
          </p>

          <div
            className="flex justify-between
          text-[12px] bg-[#eaf5fe] p-3 rounded-lg"
          >
            <p>
              قیمت ها برای امروز
              <span className="text-[#2E8ADA] mr-1">{onlineDate}</span> نمایش
              داده شده اند
            </p>

            <p
              className="flex items-center
             gap-2 text-[#2E8ADA] cursor-pointer"
            >
              تغییر تاریخ <CalendarMinus2 size={18} />
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto lg:py-8 px-5 lg:flex gap-5 relative">
        {/* فیلتر و مرتب سازی و نقشه در موبایل */}
        <div
          className="flex justify-around items-center
         md:hidden *:flex *:items-center *:gap-1 mb-5 text-[14px]
         *:cursor-pointer
         "
        >
          <button onClick={() => setActiveSheet("filter")}>
            <SlidersHorizontal size={20} />
            فیلتر ها
          </button>

          <button onClick={() => setActiveSheet("sort")}>
            <ListSortDescending size={20} />
            مرتب سازی
          </button>

          <button onClick={() => setActiveSheet("map")}>
            <Map size={20} />
            نقشه
          </button>
        </div>

        {/* باکس فیلتر در سمت راست صفحه */}
        <div className="hidden lg:block lg:sticky right-0 top-0 self-start">
          <PropertyFilterSidebar
            type={type}
            areas={areas}
            selectedStars={selectedStars}
            setSelectedStars={setSelectedStars}
            selectedAreas={selectedAreas}
            setSelectedAreas={setSelectedAreas}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            selectedBeds={selectedBeds}
            setSelectedBeds={setSelectedBeds}
            selectedFood={selectedFood}
            setSelectedFood={setSelectedFood}
            selectedAmenities={selectedAmenities}
            setSelectedAmenities={setSelectedAmenities}
            selectedBadges={selectedBadges}
            setSelectedBadges={setSelectedBadges}
          />
        </div>

        {/* left */}
        <div className="flex-1">
          {/* مرتب سازی */}
          <div
            className="mb-8 hidden md:flex flex-wrap
            items-center gap-5 *:text-[12px] "
          >
            <strong>نمایش بر اساس :</strong>

            <button
              onClick={() => setSortType("default")}
              className={sortType === "default" ? "text-red-500 font-bold" : ""}
            >
              پیش فرض
            </button>

            <button
              onClick={() => setSortType("cheap")}
              className={sortType === "cheap" ? "text-red-500 font-bold" : ""}
            >
              کمترین قیمت
            </button>

            <button
              onClick={() => setSortType("expensive")}
              className={
                sortType === "expensive" ? "text-red-500 font-bold" : ""
              }
            >
              بیشترین قیمت
            </button>

            <button
              onClick={() => setSortType("rating")}
              className={sortType === "rating" ? "text-red-500 font-bold" : ""}
            >
              بالاترین امتیاز
            </button>
          </div>

          {/* لیست هتل‌ها */}
          <div
            className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5
        "
          >
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} type={type} />
            ))}
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////// */}
      <div
        onClick={() => setActiveSheet(null)}
        className={`fixed inset-0 bg-black/50 z-40
           transition-opacity duration-300 md:hidden ${
          activeSheet ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* پنل فیلتر (موبایل) */}
      <div>
        <div>
          <PropertyFilterSidebar
            type={type}
            className={`fixed top-0 bottom-0 right-0 w-full! z-50 md:hidden
            transition-transform duration-300 ease-out
            ${activeSheet === "filter" ? "translate-x-0" : "translate-x-full"}`}
            areas={areas}
            selectedStars={selectedStars}
            setSelectedStars={setSelectedStars}
            selectedAreas={selectedAreas}
            setSelectedAreas={setSelectedAreas}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            selectedBeds={selectedBeds}
            setSelectedBeds={setSelectedBeds}
            selectedFood={selectedFood}
            setSelectedFood={setSelectedFood}
            selectedAmenities={selectedAmenities}
            setSelectedAmenities={setSelectedAmenities}
            selectedBadges={selectedBadges}
            setSelectedBadges={setSelectedBadges}
            onClose={() => setActiveSheet(null)}
            filteredCount={sortedProperties.length}
          />
        </div>
      </div>

      {/* پنل مرتب‌سازی (موبایل) */}
      <div
        className={`fixed bottom-0 right-0 h-[30%] w-full bg-white z-50 md:hidden
          transition-transform duration-300 ease-out rounded-tl-[14px] rounded-tr-[14px]
          ${activeSheet === "sort" ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold">مرتب سازی</span>
          <button onClick={() => setActiveSheet(null)}>✕</button>
        </div>

        <div className="flex flex-col p-4 gap-5">
          {[
            { id: "default", label: "پیش فرض" },
            { id: "cheap", label: "کمترین قیمت" },
            { id: "expensive", label: "بیشترین قیمت" },
            { id: "rating", label: "بالاترین امتیاز" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setSortType(opt.id as typeof sortType);
                setActiveSheet(null);
              }}
              className={`text-right text-[12px] ${
                sortType === opt.id
                  ? "border-red-500 text-red-500 font-bold"
                  : "border-gray-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* پنل نقشه (موبایل) */}
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 bg-white z-50 md:hidden
          transition-transform duration-300 ease-out
          ${activeSheet === "map" ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={() => setActiveSheet(null)} aria-label="بستن نقشه">
            <ArrowRight size={20} />
          </button>

          <span className="font-bold">
            نقشه {type === "hotel" ? "هتل‌ها" : "اقامتگاه‌ها"}
          </span>

          <span className="w-5" />
        </div>

        <div className="h-[calc(100%-64px)]">
          <iframe
            src={`https://maps.google.com/maps?q=${city.location.lat},${city.location.lng}&z=13&output=embed`}
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            title={city.name}
          />
        </div>
      </div>
    </main>
  );
}
