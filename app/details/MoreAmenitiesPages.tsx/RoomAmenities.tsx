import React from "react";

export default function RoomAmenities() {
  return (
    <div className="p-5">
      <h1 className="mb-10 font-bold text-[18px]">
        امکانات اتاق
      </h1>

      <strong className="text-gray-600">
        امکاناتی که ارائه میشود
      </strong>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[12px] my-5 text-gray-600">
        <li>تلویزیون</li>
        <li>یخچال</li>
        <li>سیستم تهویه مطبوع</li>
        <li>اینترنت داخل اتاق</li>
        <li>تلفن</li>
        <li>کمد لباس</li>
        <li>میز و صندلی</li>
        <li>سرویس بهداشتی داخل اتاق</li>
        <li>حمام</li>
        <li>حوله</li>
        <li>سشوار</li>
        <li>دمپایی</li>
        <li>چای ساز</li>
        <li>آب معدنی رایگان</li>
        <li>صندوق امانات</li>
        <li>سیستم گرمایش</li>
        <li>سیستم سرمایش</li>
        <li>نظافت روزانه اتاق</li>
      </ul>


      <strong className="text-gray-600">
        امکاناتی که ارائه نمیشود
      </strong>

      <ul className="grid grid-cols-2 gap-6 text-[12px] my-5 text-gray-600 *:line-through">
        <li>بالکن</li>
        <li>وان حمام</li>
        <li>جکوزی داخل اتاق</li>
        <li>مینی بار رایگان</li>
        <li>اتاق متصل</li>
        <li>ماشین لباسشویی</li>
      </ul>

    </div>
  );
}