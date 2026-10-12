type Props = {
  property: {
    stars?: number;
    reviewCount?: number;
    rating?: string;
    name: string;
    address?: string;
  };

  type: "hotel" | "accommodation";
};

export default async function PropertyInfo({ property, type }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* stars */}
        <p className="text-yellow-500">
          {"★".repeat(property.stars ?? 0)}

          <span className="text-sm text-yellow-600 mr-2">
            {type === "hotel"
              ? `هتل ${property.stars ?? 0} ستاره`
              : `اقامتگاه ${property.stars ?? 0} ستاره`}
          </span>
        </p>

        {/* rate */}
        <p className="md:hidden">
          <span className="text-sm text-gray-500 ml-2">
            ({property.reviewCount ?? 0} نظر)
          </span>
          <span>{property.rating}</span>
        </p>
      </div>

      {/* title */}
      <h1 className="text-xl font-bold mt-5">{property.name}</h1>

      {/* address */}
      <p className="text-[14px] mt-3 text-gray-600">
        {property.address ?? ""}
        {property.address && (
          <>
            |
            <span className="text-[#37a0fb] text-[12px]">
              {" "}
              مشاهده روی نقشه{" "}
            </span>
          </>
        )}
      </p>
    </div>
  );
}