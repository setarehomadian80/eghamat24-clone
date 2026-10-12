import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";
import citiesHotel from "@/data/citiesHotel.json";
import citiesAccommodation from "@/data/citiesAccommodation.json";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

export default function PropertyCategories({ slug, type }: Props) {
  const properties = type === "hotel" ? hotels : accommodation;
  const cities = type === "hotel" ? citiesHotel : citiesAccommodation;

  const property = properties.find((item) => item.slug === slug);

  if (!property) return null;

  const city = cities.find((item) => item.cityId === property.cityId);

  // فقط اسم شهر باقی می‌ماند
  const cityName = city?.city?.trim() ?? "";

  const categories =
    type === "hotel"
      ? [
          `هتل های ۱ ستاره ${cityName}`,
          `هتل های ۲ ستاره ${cityName}`,
          `هتل های ۳ ستاره ${cityName}`,
          `هتل های ۴ ستاره ${cityName}`,
          `هتل های ۵ ستاره ${cityName}`,
          `هتل های لوکس ${cityName}`,
          `هتل های ارزان ${cityName}`,
          `هتل های قیمت مناسب ${cityName}`,
          `هتل های نزدیک مرکز شهر ${cityName}`,
          `هتل آپارتمان های ${cityName}`,
          `هتل های نزدیک جاذبه های ${cityName}`,
        ]
      : [
          `اقامتگاه های سنتی ${cityName}`,
          `اقامتگاه های بوم گردی ${cityName}`,
          `ویلاهای ${cityName}`,
          `سوئیت های ${cityName}`,
          `آپارتمان های مبله ${cityName}`,
          `اقامتگاه های ارزان ${cityName}`,
          `اقامتگاه های لوکس ${cityName}`,
          `اقامتگاه های مناسب خانواده ${cityName}`,
          `اقامتگاه های نزدیک مرکز شهر ${cityName}`,
          `اقامتگاه های نزدیک جاذبه های ${cityName}`,
        ];

  const suggestions =
    type === "hotel"
      ? [`بلیط هواپیما ${cityName}`]
      : [`راهنمای سفر ${cityName}`];

  return (
    <section className="mt-16">
      <h2
        className="
      text-[16px] 
      md:text-[18px] 
      xl:text-[20px] font-bold mb-8"
      >
        {type === "hotel"
          ? `دسته‌بندی هتل های ${cityName}`
          : `دسته‌بندی اقامتگاه های ${cityName}`}
      </h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <Link
            key={item}
            href="#"
            className="flex items-center gap-2 rounded-lg
             border p-3 text-[10px] transition
             hover:border-red-500 hover:text-red-500"
          >
            <ChevronLeft size={16} />
            {item}
          </Link>
        ))}
      </div>

      <h2
        className="
      text-[16px] md:text-[18px] xl:text-[20px]
      font-bold mt-14 mb-8"
      >
        پیشنهادات دیگر
      </h2>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <Link
            key={item}
            href="#"
            className="flex items-center gap-2 text-xs
             rounded-lg border px-5 py-3 transition
             hover:border-red-500 hover:text-red-500"
          >
            <ChevronLeft size={16} />
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
}