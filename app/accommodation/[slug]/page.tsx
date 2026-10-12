import CityPropertiesPage, {
  Property,
} from "@/components/PropertyPages/CityPropertiesPage";

import citiesAccommodation from "@/data/citiesAccommodation.json";
import accommodations from "@/data/accommodation.json";

import { notFound } from "next/navigation";


type CityAccommodation = {
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


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function Page({ params }: Props) {

  const { slug } = await params;


  const city = (citiesAccommodation as CityAccommodation[]).find(
    (item) => item.slug === slug
  );


  if (!city) {
    notFound();
  }


  const filteredAccommodation = accommodations.filter(
    (accommodation) =>
      accommodation.cityId === city.cityId
  );


  return (
    <CityPropertiesPage
  city={city}
  properties={filteredAccommodation}
  type="accommodation"
/>
  );
}