import React from 'react'

export default function PropertySpecialFeatures() {
  return (
   <div className="p-5 overflow-y-auto max-h-screen scrollbar-none">
      <h1 className="mb-10 font-bold text-[18px]">ویژگی خاص هتل</h1>

      <strong className="text-gray-600">خدماتی که ارائه میشود</strong>

      <ul className="grid grid-cols-2 gap-6 text-[12px] my-5 text-gray-600">
         <li>
          طراحی و معماری زیبا
        </li>

        <li>
          خدمات پذیرایی ویژه
        </li>

        <li>
          امکانات رفاهی کامل
        </li>

        <li>
          فضای مناسب برای اقامت
        </li>
      </ul>
    </div>
  )
}
