 "use client";

import hotels from "@/data/hotels.json";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Laugh } from "lucide-react";

type HotelType = {
  id: number;
  name: string;
  slug: string;
  cityId: number;
  address: string;
  stars: number;
  price: string;
  discount: string;
  rating: string;
  reviewCount: number;
  image: string;
  amenities: string[];
};

export default function TopHotels() {
  const [topHotels, setTopHotels] = useState<HotelType[]>([]);

 useEffect(() => {
  const storageKey = "topHotelIds";

  const fiveStarHotels = (hotels as HotelType[]).filter(
    (hotel) => hotel.stars === 5
  );

  let selectedHotels: HotelType[] = [];

  try {
    // حذف اطلاعات کامل و قدیمی هتل‌ها
    localStorage.removeItem("topHotels");

    const saved: unknown = JSON.parse(
      localStorage.getItem(storageKey) ?? "[]"
    );

    if (Array.isArray(saved)) {
      const savedIds = [
        ...new Set(
          saved.filter((id): id is number => typeof id === "number")
        ),
      ];

      selectedHotels = savedIds
        .map((id) => fiveStarHotels.find((hotel) => hotel.id === id))
        .filter((hotel): hotel is HotelType => hotel !== undefined)
        .slice(0, 6);
    }
  } catch {
    // اگر ذخیره‌سازی در دسترس نبود یا داده خراب بود،
    // انتخاب هتل‌ها بدون اطلاعات ذخیره‌شده ادامه پیدا می‌کند.
  }

  const selectedIds = new Set(selectedHotels.map((hotel) => hotel.id));

  const remainingHotels = fiveStarHotels.filter(
    (hotel) => !selectedIds.has(hotel.id)
  );

  // مخلوط‌کردن تصادفی هتل‌های باقی‌مانده
  for (let i = remainingHotels.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [remainingHotels[i], remainingHotels[j]] = [
      remainingHotels[j],
      remainingHotels[i],
    ];
  }

  selectedHotels = [
    ...selectedHotels,
    ...remainingHotels.slice(0, 6 - selectedHotels.length),
  ];

  setTopHotels(selectedHotels);

  try {
    localStorage.setItem(
      storageKey,
      JSON.stringify(selectedHotels.map((hotel) => hotel.id))
    );
  } catch {
    // نمایش هتل‌ها به موفقیت ذخیره‌سازی وابسته نیست.
  }
}, []);

  return (
    <div>
      <h2
        className="text-[16px] lg:text-[18px] font-bold"
        style={{
          fontFamily: "var(--font-iransans)",
        }}
      >
        هتل های برتر و پربازدید
      </h2>

      {/* hotel cards */}

      <Swiper
        slidesPerView="auto"
        spaceBetween={14}
        className="mt-8"
      >
        {topHotels.map((hotel) => (
          <SwiperSlide key={hotel.id} className="border-none w-70!">
            <Card className="rounded-lg! border-none! shadow-none! w-full!">
              <CardMedia
                sx={{
                  height: 180,
                  cursor: "pointer",
                }}
                className="rounded-lg object-cover"
                image={hotel.image}
                title={hotel.name}
              />

              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="mb-2 flex text-[#f6b100]">
                    {"★".repeat(hotel.stars)}
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">
                      {hotel.reviewCount}
                    </span>

                    <span
                      className="rounded-lg px-2 flex items-center
                      text-xs font-bold text-black"
                    >
                      {hotel.rating}

                      <Laugh
                        className="text-green-300 mr-1"
                        size={18}
                      />
                    </span>
                  </div>
                </div>

                <Typography
                  variant="h6"
                  className="line-clamp-1"
                  sx={{
                    fontFamily: "var(--font-iransans)",
                    fontSize: "14px",
                  }}
                >
                  {hotel.name}
                </Typography>

                <Typography
                  variant="body2"
                  className="line-clamp-1"
                  sx={{
                    color: "text.secondary",
                    fontFamily: "var(--font-iransans)",
                    fontSize: "12px",
                    marginTop: "5px",
                  }}
                >
                  {hotel.address}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "var(--font-iransans)",
                    mt: 2,
                    fontSize: "12px",
                  }}
                >
                  از {hotel.price} / 1 شب
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "var(--font-iransans)",
                    mt: 3,
                    fontSize: "12px",
                  }}
                >
                  <span
                    className="text-[#11b95f]
                    bg-[#e7f8ef] p-1.5 rounded-[5px]"
                  >
                    تا {hotel.discount}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
