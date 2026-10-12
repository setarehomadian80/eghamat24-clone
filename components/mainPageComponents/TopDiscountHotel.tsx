"use client";
import hotels from "@/data/hotels.json";
import { useMemo } from "react";
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

export default function TopDiscountHotels() {
  const TopDiscount = useMemo(() => {
    const sortedHotels = [...(hotels as HotelType[])]
      .sort((a, b) => {
        const discountA = Number( a.discount.replace("% تخفیف", "") );;
        const discountB = Number( b.discount.replace("% تخفیف", "") );
        return discountB - discountA;
      })
      return sortedHotels.slice(0, 6);
  }, []);

  return (
    <div className="rounded-lg">
      <div>
        <h1 className="text-[16px] lg:text-[18px] font-bold"> بیشترین تخفیف ها</h1>
      </div>

      {/* hotel cards */}

      <Swiper
        slidesPerView="auto"
        spaceBetween={14}
        className="mt-8"
      >
        {TopDiscount.map((hotel) => (
          <SwiperSlide key={hotel.id} className="border-none w-70!">
            <Card className="rounded-lg! border-none! shadow-none! w-full">
              <CardMedia
                sx={{
                  height: 180,
                  cursor: "pointer",
                }}
                className="rounded-lg"
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
    </div>
  );
}
