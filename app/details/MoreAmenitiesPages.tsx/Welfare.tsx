export default function Welfare() {
  return (
    <div className="p-5">
      <h1 className="mb-10 font-bold text-[18px]">
        رفاهی
      </h1>

      <strong className="text-gray-600">
        خدماتی که ارائه میشود
      </strong>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[12px] my-5 text-gray-600">
        <li>رستوران</li>
        <li>کافی شاپ</li>
        <li>صبحانه</li>
        <li>خدمات روم سرویس</li>
        <li>پذیرش ۲۴ ساعته</li>
        <li>خدمات خانه داری</li>
        <li>خدمات خشک شویی</li>
        <li>لاندری</li>
        <li>پارکینگ</li>
        <li>اینترنت رایگان</li>
        <li>لابی مجهز</li>
        <li>فضای استراحت</li>
        <li>صندوق امانات</li>
        <li>خدمات بیدار باش</li>
        <li>تاکسی سرویس</li>
        <li>انبار نگهداری چمدان</li>
        <li>نمازخانه</li>
        <li>آسانسور</li>
        <li>سیستم تهویه مطبوع</li>
        <li>سیستم گرمایش و سرمایش</li>
        <li>تلفن در اتاق و لابی</li>
        <li>خدمات پذیرایی</li>
        <li>خدمات نظافت روزانه</li>
        <li>امکان پرداخت با کارت بانکی</li>
      </ul>


      <strong className="text-gray-600">
        خدماتی که ارائه نمیشود
      </strong>

      <ul className="grid grid-cols-2 gap-6 text-[12px] my-5 text-gray-600 *:line-through">
        <li>خدمات نگهداری کودک</li>
        <li>سالن آرایش</li>
        <li>استخر</li>
        <li>سونا و جکوزی</li>
        <li>خدمات ماساژ</li>
        <li>مینی بار رایگان</li>
        <li>خدمات پزشکی داخل هتل</li>
        <li>اجاره خودرو</li>
        <li>خدمات VIP اختصاصی</li>
        <li>ترانسفر فرودگاهی رایگان</li>
      </ul>

    </div>
  );
}