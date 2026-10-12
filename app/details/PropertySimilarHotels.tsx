"use client";

import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Laugh } from "lucide-react";
import Link from "next/link";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

export default function PropertySimilarHotels({ slug, type }: Props) {
  const properties = type === "hotel" ? hotels : accommodation;

  const property = properties.find((item) => item.slug === slug);

  if (!property) return null;

  const similarHotels = properties
    .filter(
      (item) => item.slug !== property.slug && item.cityId === property.cityId,
    )
    .map((item) => {
      const priceDifference = Math.abs(
        Number(item.price) - Number(property.price),
      );

      const starDifference = Math.abs(
        Number(item.stars ?? 0) - Number(property.stars ?? 0),
      );

      return {
        ...item,
        score: priceDifference + starDifference * 100,
      };
    })
    .sort((a, b) => a.score - b.score)
    .slice(0, 4);

  if (!similarHotels.length) return null;

  return (
    <main className="mt-16">
      <h2
        className="
          mb-6
          text-[16px]
          md:text-[18px]
          xl:text-[20px]
          font-bold
        "
      >
        {type === "hotel"
          ? `هتل‌های مشابه ${property.name}`
          : `اقامتگاه‌های مشابه ${property.name}`}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-auto">
        {similarHotels.map((place) => (
          <Link
            key={place.slug}
            href={`/details/${type}/${place.slug}`}
            className="block"
          >
            <Card className="rounded-xl! shadow-none! cursor-pointer h-full">
              <CardMedia
                component="img"
                image={place.image}
                alt={place.name}
                sx={{
                  height: 180,
                  objectFit: "cover",
                }}
              />

              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-[#f6b100]">
                    {"★".repeat(place.stars ?? 0)}
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">
                      {place.reviewCount ?? 0}
                    </span>

                    <span className="flex items-center text-xs font-bold">
                      {place.rating}

                      <Laugh
                        size={16}
                        className="mr-1 text-green-500"
                      />
                    </span>
                  </div>
                </div>

                <Typography
                  className="line-clamp-1"
                  sx={{
                    mt: 1,
                    fontFamily: "var(--font-iransans)",
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  {place.name}
                </Typography>

                <Typography
                  className="line-clamp-1"
                  sx={{
                    mt: 1,
                    color: "text.secondary",
                    fontSize: "12px",
                    fontFamily: "var(--font-iransans)",
                  }}
                >
                  {place.address}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontFamily: "var(--font-iransans)",
                    fontSize: "13px",
                  }}
                >
                  از {place.price}
                </Typography>

                <div className="mt-4">
                  <span className="rounded-md bg-[#e7f8ef] px-2 py-1 text-xs text-[#11b95f]">
                    تا {place.discount}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}