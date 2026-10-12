"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import MoreAmenities from "./PropertyMoreAmenities";

export default function PropertyAmenities() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-t lg:border-none mt-6 pt-6">

      {/* امکانات */}
      <div
        className="
        relative
        h-45
        overflow-hidden
        lg:h-auto
        lg:overflow-visible
        
        "
      >

        <div
          className="
          flex 
          *:w-1/2 
          text-gray-500 
          text-[12px]
          **:mb-5
          **:text-center
          "
        >
          <ul>
            <h2 className="text-[16px] text-black mb-2">
              امکانات عمومی
            </h2>

            <li>ترانسفر رفت با هزینه</li>
            <li>اتاق بازی</li>
            <li>پارکینگ</li>
            <li>استخر</li>
            <li>رستوران</li>
            <li>کافی شاپ</li>
            <li>لابی</li>
          </ul>


          <ul>
            <h2 className="text-[16px] text-black mb-2">
              امکانات اتاق ها
            </h2>

            <li>یخچال</li>
            <li>دمپایی</li>
            <li>چای ساز</li>
            <li>آب رایگان</li>
            <li>تلویزیون</li>
            <li>سیستم گرمایشی</li>
            <li>سیستم سرمایشی</li>
          </ul>

        </div>


        {/* لایه تار پایین */}
        <div
          className="
          absolute
          bottom-0
          right-0
          left-0
          h-12
          bg-gradient-to-t
          from-white
          to-transparent
          lg:hidden
          "
        />
      </div>



      {/* دکمه */}
      <button
        className="
        text-[#37a6fc] 
        text-center
        w-full
        text-[14px]
        flex
        gap-1
        justify-center
        cursor-pointer
        mt-5
        relative
        z-10
        "
        onClick={() => setShowMore(true)}
      >
        مشاهده همه
        <SquareArrowOutUpRight size={20} />
      </button>


      {showMore && (
        <MoreAmenities 
          onClose={() => setShowMore(false)}
        />
      )}

    </div>
  );
}