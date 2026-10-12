"use client";

import { useState } from "react";
import citiesAccommodation from "@/data/citiesAccommodation.json";
import citiesHotel from "@/data/citiesHotel.json";
import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

const Locations = [
  { place: "بیمارستان", min: "6 دقیقه با خودرو", Distance: "3 کیلومتر مسافت" },
  { place: "سفارت", min: "15 دقیقه با خودرو", Distance: "11 کیلومتر مسافت" },
  { place: "رستوران", min: "8 دقیقه با خودرو", Distance: "7 کیلومتر مسافت" },
  { place: "پارک", min: "12 دقیقه با خودرو", Distance: "10 کیلومتر مسافت" },
  { place: "بوستان", min: "14 دقیقه با خودرو", Distance: "12 کیلومتر مسافت" },
  { place: "سینما", min: "16 دقیقه با خودرو", Distance: "14 کیلومتر مسافت" },
  { place: "باغ موزه", min: "9 دقیقه با خودرو", Distance: "7 کیلومتر مسافت" },
  {
    place: "ایستگاه قطار",
    min: "30 دقیقه با خودرو",
    Distance: "20 کیلومتر مسافت",
  },
  {
    place: "مجموعه فرهنگی",
    min: "15 دقیقه با خودرو",
    Distance: "10 کیلومتر مسافت",
  },
  { place: "پل طبیعت", min: "20 دقیقه با خودرو", Distance: "18 کیلومتر مسافت" },
  { place: "موزه فرش", min: "25 دقیقه با خودرو", Distance: "20 کیلومتر مسافت" },
];

export default function PropertyDistance({ slug, type }: Props) {
  const [activeBox, setActiveBox] = useState<
    "مهم ترین مکان ها" | "نزدیک ترین مکان ها"
  >("مهم ترین مکان ها");

  const property =
    type === "hotel"
      ? hotels.find((item) => item.slug === slug)
      : accommodation.find((item) => item.slug === slug);

  if (!property) return null;

  const city =
    type === "hotel"
      ? citiesHotel.find((item) => item.cityId === property.cityId)
      : citiesAccommodation.find((item) => item.cityId === property.cityId);

  if (!city) return null;

  const { lat, lng } = city.location;

  return (
    <main className="mt-10">
      <div>
        <strong
          className="
        text-[16px] 
        md:text-[18px] 
        xl:text-[20px]
        "
        >
          فاصله تا مکان های مهم شهر
        </strong>

        <div
          className="grid grid-cols-1 lg:grid-cols-3
         gap-10 mt-6 text-[12px] md:text-[14px]"
        >
          {/* description */}
          <div className="lg:col-span-2">
            {/* head */}
            <div className="flex gap-2 border-b">
              <button
                onClick={() => setActiveBox("مهم ترین مکان ها")}
                className={`px-4 py-2 ${
                  activeBox === "مهم ترین مکان ها"
                    ? "border-b-2 border-red-500 text-red-500"
                    : "text-gray-500"
                }`}
              >
                مهم ترین مکان ها
              </button>

              <button
                onClick={() => setActiveBox("نزدیک ترین مکان ها")}
                className={`px-4 py-2 ${
                  activeBox === "نزدیک ترین مکان ها"
                    ? "border-b-2 border-red-500 text-red-500"
                    : "text-gray-500"
                }`}
              >
                نزدیک ترین مکان ها
              </button>
            </div>

            {/* body */}

            {/* box 1 */}
            {activeBox === "مهم ترین مکان ها" && (
              <div className="h-75 px-5">
                <div className="flex flex-wrap gap-2 justify-between my-5">
                  <span>نمایشگاه بین المللی</span>

                  <p className="flex gap-5">
                    <span>13 دقیقه با خودرو</span>
                    <span>6 کیلومتر مسافت</span>
                  </p>
                </div>
              </div>
            )}

            {/* box 2 */}
            {activeBox === "نزدیک ترین مکان ها" && (
              <div className="h-75 overflow-y-auto scrollbar-thin px-5">
                {Locations.map((item) => (
                  <div
                    className="flex flex-wrap gap-2 justify-between my-5"
                    key={item.place}
                  >
                    <span>{item.place}</span>

                    <p className="flex gap-5">
                      <span>{item.min}</span>
                      <span>{item.Distance}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ============== map ==============*/}
          <div className="w-full h-75 lg:mt-10 lg:col-span-1 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}