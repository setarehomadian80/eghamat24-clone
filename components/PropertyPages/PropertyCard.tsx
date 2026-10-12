import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Laugh } from "lucide-react";
import Link from "next/link";
import type { Property } from "./CityPropertiesPage";

type Props = {
  type: "hotel" | "accommodation";

  property: Property;
};

export default function PropertyCard({ property, type }: Props) {
  return (
    <Link href={`/details/${type}/${property.slug}`}>
      <Card className="rounded-xl! shadow-none! cursor-pointer">
        <CardMedia
          component="img"
          image={property.image}
          title={property.name}
          sx={{
            height: 180,
            objectFit: "cover",
          }}
        />

        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-[#f6b100]">
              {"★".repeat(property.stars ?? 0)}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">
                {property.reviewCount ?? 0}
              </span>

              <span className="flex items-center text-xs font-bold">
                {property.rating}

                <Laugh size={16} className="mr-1 text-green-500" />
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
            {property.name}
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
            {property.address}
          </Typography>

          <Typography
            sx={{
              mt: 2,

              fontFamily: "var(--font-iransans)",

              fontSize: "13px",
            }}
          >
            از {property.price}
          </Typography>

          <div className="mt-4">
            <span className="rounded-md bg-[#e7f8ef] px-2 py-1 text-xs text-[#11b95f]">
              تا {property.discount}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}