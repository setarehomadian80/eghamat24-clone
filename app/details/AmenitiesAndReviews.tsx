import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";
import Image from "next/image";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

export default function AmenitiesAndReviews({ slug, type }: Props) {
  const hotel =
    type === "hotel" ? hotels.find((item) => item.slug === slug) : undefined;

  const accommodationProperty =
    type === "accommodation"
      ? accommodation.find((item) => item.slug === slug)
      : undefined;

  const property = hotel || accommodationProperty;

  if (!property) return null;

  return (
    <main className="mt-12">
      {/* Exclusive amenities */}
      <div>
        <strong
          className="
        my-6
        text-[16px] md:text-[18px] xl:text-[20px]
        "
        >
          امکانات اختصاصی {property.name}
        </strong>

        <div
          className="
        w-full 
        md:h-50
        mt-6
        flex
        border 
        rounded-lg 
        p-5
        md:flex-row
        justify-between 
        md:items-center
        "
        >
          {/* description */}
          <div className="h-full grid grid-cols-1 text-[12px]">
            {/* title */}
            <h2 className="mb-4">
              {hotel?.restaurant || accommodationProperty?.restaurant}
            </h2>

            <ul className="grid grid-col-1 md:grid-cols-2 gap-y-4 md:gap-x-10 mt-10">
              <li>ظرفیت 60 نفر</li>
              <li>نوع غذا ایرانی</li>
              <li>مکان لابی هتل</li>
              <li>نوع سرو انتخابی</li>
            </ul>
          </div>

          {/* image */}
          <div
            className="
          w-30
          h-30
          md:w-50
          md:h-37.5 
          relative
          object-cover
          overflow-hidden
          "
          >
            <Image
              src="/DetailGallery/2.webp"
              alt="picture"
              width={200}
              height={150}
              sizes="(max-width: 768px) 120px, 200px"
              className="
      w-full
      h-full
      object-cover
      rounded-[5px]
    "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
