import CityPropertiesPage from "@/components/PropertyPages/CityPropertiesPage";
import citiesHotel from "@/data/citiesHotel.json";
import hotels from "@/data/hotels.json";
import { notFound } from "next/navigation";

type CityHotel = {
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

export interface Hotel {
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
  area: string;
  amenities: string[];
  beds: number;
  mealPlan: string;
   badge: string;
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {

  const { slug } = await params;

  // پیدا کردن شهر از روی slug
  const city = (citiesHotel as CityHotel[]).find(
    (item) => item.slug === slug
  );

  if (!city) {
    notFound();
  }

  // فیلتر هتل‌های همان شهر
  const filteredHotels = (hotels as Hotel[]).filter(
    (hotel) => hotel.cityId === city.cityId
  );

  return (
   <CityPropertiesPage
  city={city}
  properties={filteredHotels}
  type="hotel"
/>
  );
}