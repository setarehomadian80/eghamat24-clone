
export default function SportEntertainment() {
  return (
    <div className="p-5">
      <h1 className="mb-10 font-bold text-[18px]">
        ورزشی  تفریحی
      </h1>

      <strong className="text-gray-600">
        خدماتی که ارائه میشود
      </strong>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[12px] my-5 text-gray-600">
        <li>استخر</li>
        <li>سونا</li>
        <li>جکوزی</li>
        <li>باشگاه ورزشی</li>
        <li>سالن بدنسازی</li>
        <li>زمین بازی کودکان</li>
        <li>زمین تنیس</li>
        <li>اتاق بازی</li>
        <li>بیلیارد</li>
        <li>فوتبال دستی</li>
        <li>ماساژ</li>
        <li>سالن ورزشی چند منظوره</li>
        <li>فضای پیاده‌روی</li>
        <li>فضای سبز تفریحی</li>
        <li>دوچرخه‌سواری</li>
        <li>برنامه‌های تفریحی هتل</li>
        <li>موسیقی زنده</li>
        <li>سالن سرگرمی</li>
        <li>تورهای تفریحی</li>
        <li>تفریحات آبی</li>
      </ul>


      <strong className="text-gray-600">
        خدماتی که ارائه نمیشود
      </strong>

      <ul className="grid grid-cols-2 gap-6 text-[12px] my-5 text-gray-600 *:line-through">
        <li>استخر روباز</li>
        <li>زمین گلف</li>
        <li>پارک آبی</li>
        <li>باشگاه اختصاصی کودکان</li>
        <li>اجاره تجهیزات ورزشی</li>
        <li>مربی ورزشی اختصاصی</li>
        <li>سالن بولینگ</li>
        <li>تفریحات دریایی</li>
        <li>کمپ ورزشی</li>
        <li>برنامه ورزشی روزانه</li>
      </ul>

    </div>
  );
}