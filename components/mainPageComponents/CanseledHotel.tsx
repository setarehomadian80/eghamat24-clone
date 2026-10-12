"use client";

import cities from "@/data/cities.json";
import hotels from "@/data/hotels.json";
import { ChevronLeft, Hotel, Laugh } from "lucide-react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

type CityName = {
  id: number;
  city: string;
};

const cityList = cities as CityName[];

export default function CanseledHotel() {
  const [active, setActive] = useState<number>(cityList[0]?.id);

  const selectedCity = cityList.find((city) => city.id === active);

  const filteredHotels = (hotels as HotelType[]).filter(
    (hotel) => hotel.cityId === active,
  );

  return (
    <div className="bg-[#fee5e6] p-4 rounded-lg">
      {/* title */}
      <div className="w-full">
        <h1 className="text-[#e23238] font-bold flex items-center">
          <Hotel size={22} className="ml-2" />
          هتل‌ها با کنسلی رایگان
        </h1>
      </div>
      {/* cities Name */}
      <div className="xl:flex justify-between items-center mt-10">
        {/* cities */}
        <div
          className="
            overflow-x-auto! flex whitespace-nowrap 
            scrollbar-none! gap-2 lg:gap-0
           *:text-[14px]
            *:text-center
          "
        >
          {cityList.slice(0, 10).map((city) => (
            <button
              key={city.id}
              onClick={() => setActive(city.id)}
              className={`
                cursor-pointer
                  w-[80px] min-w-[80px] shrink-0
                 whitespace-nowrap text-gray-600
                  p-2 text-[12px] lg:text-[14px]
                 transition-all duration-300 ease-in-out
                ${
                  active === city.id
                    ? "bg-white border border-red-500 rounded-2xl text-red-500"
                    : "text-black border border-transparent"
                }
              `}
            >
              {city.city}
            </button>
          ))}
        </div>

        {/* show all */}
        <button
          className="text-[12px] lg:text-[14px] text-[#37a0fb] hidden xl:flex
         font-bold whitespace-nowrap cursor-pointer"
        >
          مشاهده همه هتل‌های {selectedCity?.city}
          <ChevronLeft />
        </button>
      </div>
    
      {/* hotel cards */}

      <Swiper
        slidesPerView="auto"
        spaceBetween={14}
        className="mt-8"
      >
        {filteredHotels.slice(0, 10).map((hotel) => (
          <SwiperSlide key={hotel.id} className="w-[280px]!">
            <Card className="rounded-lg! shadow-none! w-full">
              <CardMedia
                sx={{
                  height: 180,
                  cursor: "pointer",
                }}
                image={hotel.image}
                title={hotel.name}
              />

              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="mb-2 flex text-[#f6b100]">
                    {"★".repeat(hotel.stars)}
                  </div>
                  <div className="flex items-center ">
                    <span className="text-xs text-gray-500 ">
                      {hotel.reviewCount}
                    </span>
                    <span
                      className="rounded-lg px-2 flex items-center
                      text-xs font-bold text-black"
                    >
                      {hotel.rating}
                      <Laugh className="text-green-300 mr-1" size={18} />
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
                    {" "}
                    تا {hotel.discount}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* show all */}
      <div className="xl:hidden w-full
      flex justify-center items-center mt-10">
        <button
          className="text-[14px] text-[#37a0fb] 
          justify-center items-center
         font-bold whitespace-nowrap flex cursor-pointer"
        >
          مشاهده همه هتل‌های {selectedCity?.city}
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
