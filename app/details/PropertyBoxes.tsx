import { SquareArrowOutUpRight } from "lucide-react";

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

export default function PropertyBoxes({ property }: Props) {
  return (
    <div
      className="
    mt-12 
    grid 
    grid-cols-1 
    md:grid-cols-2
    gap-5 
    *:h-[220px] 
    *:rounded-[14px]
    "
    >
      <div
        className="
      bg-[#f7fbff] 
      p-4 
      flex 
      flex-col 
      justify-between
      border
      border-transparent
      hover:border
      hover:border-blue-500
      "
      >
        <h1>نکات مهم {property.name}</h1>
        <p className="text-[12px] text-gray-700 leading-6">
          لازم به ذکر است استخر هتل برای افراد بالای 15 سال قابل استفاده
          می‌باشد.
        </p>
        <button
          className="flex 
        gap-1 
        text-[12px] 
        mx-auto 
        text-[#37a9fc]
        cursor-pointer
        "
        >
          مشاهده همه
          <SquareArrowOutUpRight size={18} />
        </button>
      </div>

      <div
        className="
       bg-[#fff6f8] 
       p-5 
       flex 
       flex-col 
       justify-between
       border
       border-transparent
       hover:border
      hover:border-red-400
       "
      >
        <h1>پیشنهاد ویژه</h1>
        <span className="text-[12px]">کنسلی رایگان</span>
        <p className="text-[12px] text-gray-700 leading-6 line-clamp-2">
          مهلت استفاده از این طرح از تاریخ 1405/05/04 تا 1405/06/31 می باشد،
          لازم بذکراست که حتما می بایست روز ورود از تاریخ 1405/05/04 تا
          1405/06/31 باشد.
        </p>
        <button className="flex gap-1 text-[12px] mx-auto text-[#37a9fc] cursor-pointer">
          مشاهده همه
          <SquareArrowOutUpRight size={18} />
        </button>
      </div>
    </div>
  );
}