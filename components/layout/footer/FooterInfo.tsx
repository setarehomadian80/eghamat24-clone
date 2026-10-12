import Image from "next/image";
import "./footer.css";

export default function FooterInfo() {
  return (
    <main className="footerContent">
      <div className="xl:grid xl:grid-cols-3 xl:gap-10">
        {/* 1 */}
        <div className="md:grid md:grid-cols-2 xl:grid-cols-1 gap-5 pb-10 border-b xl:col-span-1">
          {/* text */}
          <div>
            <div className="relative w-20 h-10">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <p>
              اقامت24 به عنوان اولین مرکز رسمی رزرواسیون هتل در ایران از سال
              1385 فعالیت خود را آغاز کرده و در حال حاضر علاوه‌بر رزرو هتل داخلی
              و خارجی، رزرو تور و بلیط هواپیما را نیز به خدمات خود افزوده است.
            </p>
            <p>
              <strong>مشهد : </strong> پارک علم و فناوری خراسان رضوی -جاده سنتو
              ساختمان مرکزی طبقه همکف سالن نصیر
            </p>
            <div className="text-[#727272] text-[12px] mt-6">
              <strong>ایمیل : </strong>9185173601
            </div>
            <div className="text-[#727272] text-[12px] my-2">
              <strong>کد پستی : </strong>info@eghamat24.com
            </div>

            <div className="flex mt-6 gap-2">
              <Image
                src="/footer/aparat-logo.svg"
                width={30}
                height={30}
                alt="logo"
              />
              <Image
                src="/footer/twitter-logo.svg"
                width={30}
                height={30}
                alt="logo"
              />
              <Image
                src="/footer/telegram-logo.svg"
                width={30}
                height={30}
                alt="logo"
              />
              <Image
                src="/footer/linkedin-logo.svg"
                width={30}
                height={30}
                alt="logo"
              />
              <Image
                src="/footer/instagram-logo.svg"
                width={30}
                height={30}
                alt="logo"
              />
            </div>
          </div>

          {/* register box */}
          <div className="mt-12 md:mt-0 xl:hidden">
            {/* namad */}
            <div
              className="w-full flex flex-wrap gap-8
              justify-between *:border *:rounded-[8px] *:p-1"
            >
              <Image
                src="/footer/cao-gov-ir.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/science-and-technology-park.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/social-marketing.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/farasa-cao-ir.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/logoaira.png"
                width={80}
                height={80}
                alt="namad"
                className="object-contain"
              />
              <Image
                src="/footer/samandehi-logo.png"
                width={80}
                height={80}
                alt="namad"
              />
            </div>
            <h2>با ثبت ایمیل، اولین نفر از تخفیف ها باخبر شوید</h2>
            <button
              className="border rounded-lg p-2
         w-full relative h-12 text-right text-[#727272] text-[12px]"
            >
              ایمیل شما
              <span
                className="bg-[#fb373e] h-12 w-24 absolute
         left-0 bottom-0 flex justify-center items-center
         text-white! font-bold rounded-l-lg"
              >
                عضویت
              </span>
            </button>

            <h3 className="text-[#727272] text-[12px] mt-6 leading-7">
              برای عضویت در خبرنامه پیامکی، عدد 3 را به شماره 30002143 پیامک
              کنید.
            </h3>
          </div>
        </div>
        {/* 2 */}
        <div className="xl:grid xl:grid-cols-2 pt-10 border-b pb-10 xl:col-span-2 xl:gap-10">
          <div className="flex justify-between md:justify-around">
            <div className="flex flex-col gap-4">
              <strong className="text-[12px]">اقامت 24</strong>
              <span>رزرو هتل</span>
              <span>بلیط هواپیما</span>
              <span>تور مسافرتی</span>
              <span>رزرو هتل از روی نقشه</span>
              <span>وبلاگ اقامت24</span>
              <span>درباره ما</span>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-[12px]">لینک های مفید</strong>
              <span>بلیط تفریحات کیش</span>
              <span>بلیط تفریحات دبی</span>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-[12px]">راهکارهای سازمانی</strong>
              <span>خدمات آژانسی</span>
              <span>خدمات سازمانی</span>
              <span>دریافت سود کانتر</span>
            </div>
          </div>

          {/* register box */}
          <div className="mt-12 md:mt-0 hidden xl:block">
            {/* namad */}
            <div
              className="w-full grid grid-cols-3 gap-4 *:object-cover
         justify-between *:border *:rounded-[8px] *:p-1"
            >
              <Image
                src="/footer/cao-gov-ir.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/science-and-technology-park.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/social-marketing.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/farasa-cao-ir.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/logoaira.png"
                width={80}
                height={80}
                alt="namad"
              />
              <Image
                src="/footer/samandehi-logo.png"
                width={80}
                height={80}
                alt="namad"
              />
            </div>
            <h2>با ثبت ایمیل، اولین نفر از تخفیف ها باخبر شوید</h2>
            <button
              className="border rounded-lg p-2
         w-full relative h-12 text-right text-[#727272] text-[12px]"
            >
              ایمیل شما
              <span
                className="bg-[#fb373e] h-12 w-24 absolute
         left-0 bottom-0 flex justify-center items-center
         text-white! font-bold rounded-l-lg"
              >
                عضویت
              </span>
            </button>

            <h3 className="text-[#727272] text-[12px] mt-6 leading-7">
              برای عضویت در خبرنامه پیامکی، عدد 3 را به شماره 30002143 پیامک
              کنید.
            </h3>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="my-5 *:p-1">
        <span className="border-l">1388 - 1404</span>
        <span className="border-l">اقامت24</span>
        <span>
          تمامی خدمات این وب سایت دارای مجوزهای لازم از مراجع مربوطه می باشد و
          فعالیت های این سایت تابع قوانین و مقررات جمهوری اسلامی ایران است.
        </span>
      </div>
    </main>
  );
}
