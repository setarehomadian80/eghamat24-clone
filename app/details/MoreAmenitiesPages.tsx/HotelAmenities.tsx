import React from "react";

export default function HotelAmenities() {
  return (
    <div className="p-5">
      <h1 className="mb-10 font-bold text-[18px]">
        امکانات اختصاصی هتل
      </h1>

      <strong className="text-gray-600">
        امکاناتی که ارائه میشود
      </strong>

      <ul 
      className="
      grid
      grid-cols-2
      md:grid-cols-3 
      gap-6 
      text-[12px] 
      my-5 
      text-gray-600">
        <li>پارکینگ اختصاصی</li>
        <li>رستوران</li>
        <li>کافی شاپ</li>
        <li>سالن همایش</li>
        <li>سالن کنفرانس</li>
        <li>فضای سبز</li>
        <li>لابی بزرگ و مجهز</li>
        <li>پذیرش ۲۴ ساعته</li>
        <li>خدمات خانه داری</li>
        <li>خدمات خشک شویی</li>
        <li>خدمات تاکسی سرویس</li>
        <li>انبار نگهداری چمدان</li>
        <li>خودپرداز</li>
        <li>نمازخانه</li>
        <li>آسانسور</li>
        <li>اینترنت رایگان در تمام بخش‌ها</li>
        <li>سیستم اعلام حریق</li>
        <li>سیستم تهویه مرکزی</li>
      </ul>


      <strong className="text-gray-600">
        امکاناتی که ارائه نمیشود
      </strong>

      <ul className="grid grid-cols-2 gap-6 text-[12px] my-5 text-gray-600 *:line-through">
        <li>استخر</li>
        <li>سونا و جکوزی</li>
        <li>باشگاه ورزشی</li>
        <li>خدمات ماساژ</li>
        <li>زمین بازی کودکان</li>
        <li>خدمات نگهداری کودک</li>
      </ul>

    </div>
  );
}