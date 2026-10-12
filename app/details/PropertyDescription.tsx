"use client";

import { useState } from "react";

export default function PropertyDescription() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="mt-14">
      <h2 className="mb-3 text-[12px] lg:text-[14px] font-bold">
        درباره هتل
      </h2>

      <div className="relative">

        <div
          className={`overflow-hidden transition-all duration-500 ${
            showMore ? "max-h-[5000px]" : "max-h-[330px]"
          }`}
        >
          <div className="space-y-7 text-justify leading-8">

            <p className="text-[11px] lg:text-[12px] text-[#555]">
              این مجموعه اقامتی یکی از گزینه‌های مناسب برای مسافرانی است که به
              دنبال تجربه اقامتی راحت، آرام و با کیفیت هستند. این هتل با طراحی
              زیبا، امکانات رفاهی مناسب و خدمات حرفه‌ای، شرایطی فراهم کرده است
              تا مهمانان در طول سفر خود اقامتی خاطره‌انگیز داشته باشند.
            </p>

            <p className="text-[11px] lg:text-[12px] text-[#555]">
              موقعیت مکانی مناسب این مجموعه باعث شده دسترسی آسانی به مراکز
              مهم شهر، مراکز خرید، جاذبه‌های گردشگری و مسیرهای اصلی وجود داشته
              باشد. فضای آرام، کارکنان مجرب و امکانات متنوع از ویژگی‌هایی است
              که باعث رضایت بیشتر مهمانان می‌شود.
            </p>


            <h3 className="mb-3 text-[12px] lg:text-[14px] font-bold">
              اتاق‌ها و واحدهای اقامتی
            </h3>

            <p className="text-[11px] lg:text-[12px] text-[#555]">
              واحدهای اقامتی با طراحی مناسب و امکانات کامل برای انواع سفرهای
              خانوادگی، کاری و تفریحی آماده شده‌اند. مهمانان می‌توانند با توجه
              به تعداد نفرات و نیاز خود، اتاق یا سوئیت مناسب را انتخاب کنند.
            </p>

            <ul 
            className="
            list-disc pr-5 space-y-2
            text-[11px] lg:text-[12px] text-[#555]">
              <li>اتاق‌های یک تخته و دو تخته</li>
              <li>سوئیت‌های خانوادگی</li>
              <li>امکانات رفاهی داخل اتاق</li>
              <li>خدمات نظافت روزانه</li>
            </ul>


            <h3 className="mb-3 text-[12px] lg:text-[14px] font-bold">
              امکانات و خدمات هتل
            </h3>

            <p className="text-[11px] lg:text-[12px] text-[#555]">
              برای رفاه بیشتر مهمانان، خدماتی مانند پذیرش ۲۴ ساعته، اینترنت
              رایگان، رستوران، کافی‌شاپ، پارکینگ، آسانسور و سایر امکانات رفاهی
              ارائه می‌شود. امکانات هر مجموعه با توجه به نوع هتل یا اقامتگاه
              متفاوت خواهد بود.
            </p>


            <h3 className="mb-3 text-[12px] lg:text-[14px] font-bold">
              موقعیت مکانی
            </h3>

            <p className="text-[11px] lg:text-[12px] text-[#555]">
              قرارگیری در موقعیتی مناسب، امکان دسترسی سریع‌تر به مراکز تفریحی،
              گردشگری و خدمات شهری را فراهم کرده و باعث می‌شود مهمانان زمان
              کمتری را صرف رفت‌وآمد کنند.
            </p>


            <h3 className="mb-3 text-[12px] lg:text-[14px] font-bold">
              رزرو هتل
            </h3>

            <p className="text-[11px] lg:text-[12px] text-[#555]">
              برای انتخاب بهترین گزینه، پیشنهاد می‌شود قبل از رزرو تصاویر،
              امکانات، قوانین اقامت و نظرات کاربران را بررسی کنید تا متناسب
              با بودجه و نیاز خود بهترین اتاق را انتخاب نمایید.
            </p>

          </div>
        </div>


        {!showMore && (
          <div
            className="
            absolute
            bottom-0
            left-0
            right-0
            h-28
            bg-gradient-to-t
            from-white
            via-white/80
            to-transparent
            "
          />
        )}


        <div className="relative flex justify-center mt-[-5px]">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
            bg-white
            px-8
            py-5
            text-[12px]
            font-medium
            text-[#41a4fa]
            "
          >
            {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
          </button>
        </div>

      </div>
    </section>
  );
}