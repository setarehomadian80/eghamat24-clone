import Image from "next/image";

export default function FooterBanners() {
  return (
    <section className="container mx-auto my-10">
      <div className="grid gap-10 lg:grid-cols-2 ">
        {/* Banner 1 */}
        <div className="relative h-52 rounded-3xl bg-[#f6f6f8]">
          {/* Illustration */}
          <img
            src="/footer/banner-call-mobile.png"
            alt="پشتیبانی"
            className="absolute -left-1.5 w-48 h-full
             z-10 select-none
            md:hidden
            "
          />
          <img
            src="/footer/banner-call.png"
            alt="پشتیبانی"
            className="absolute -left-1.5 bottom-0
              z-10 select-none
             hidden md:block
             "
          />

          {/* Content */}
          <div
            className="absolute inset-y-0 right-0 
          z-20 flex w-[58%] flex-col justify-center pr-4 text-right"
          >
            <h2 className="text-[16px] font-bold text-[#202020]">
              به راهنمایی نیاز دارید؟
            </h2>

            <p className="mt-4 text-[12px] leading-7 text-[#666]">
              در هر ساعت از شبانه‌روز می‌توانید با
              <br /> پشتیبانی اقامت۲۴ تماس بگیرید.
            </p>

            <div className="mt-5 flex items-center  gap-2">
              <span
                className="border-b-4 border-red-500
               text-3xl md:text-4xl font-extrabold text-[#ef4444]"
              >
                ۱۶۸۵
              </span>
              <p className="text-[12px] md:text-[14px] text-[#666]">
                (بدون پیش شماره)
              </p>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative h-52 rounded-3xl bg-[#f6f6f8]">
          {/* Illustration */}
          <img
            src="/footer/banner-app-mobile.png"
            alt="اپلیکیشن"
            className="absolute -left-1.5 w-48 h-full
             z-10 select-none md:hidden"
          />

          <img
            src="/footer/banner-app.png"
            alt="اپلیکیشن"
            className="absolute -left-1.5 bottom-0
             z-10 select-none hidden md:block"
          />

          {/* Content */}
          <div
            className="absolute inset-y-0 right-0 z-20
           flex w-[58%] flex-col justify-center pr-4 text-right"
          >
            <div className="flex gap-2">
              <h2
                className="text-[16px]
             font-bold text-[#202020]"
              >
                اپلیکیشن
              </h2>
              <div className="relative w-20 h-10">
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-7 text-[#666]">
              اپلیکیشن اقامت۲۴ را نصب کن <br />و خیال راحت سفر کن!
            </p>

            <div className="md:flex items-center gap-5">
              <button
                className="mt-4  rounded-[8px] 
               border-gray-300 bg-white w-42 px-0 py-3 text-[12px]
                font-bold text-red-500 shadow-sm transition hover:shadow-md"
              >
                دانلود اپلیکیشن
              </button>
              <div
                className="flex justify-between *:w-5 *:h-5
               *:object-cover mt-4 w-42"
              >
                <img src="/applogo/bazar-logo.svg" alt="bazar" />
                <img src="/applogo/google-play.svg" alt="" />
                <img src="/applogo/instagram-logo.svg" alt="" />
                <img src="/applogo/pwa.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
