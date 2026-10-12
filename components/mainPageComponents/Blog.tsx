import { ChevronLeft } from "lucide-react";
import Image from "next/image";

const Items = [
  {
    title: "۳۹ تا از غذاهای اصفهانی؛ غذاهای سنتی و معروف اصفهان را بشناسید!",
    text: "غذاهای اصفهانی را که نوش جان می‌کنید، عطر و طعم خاص آن‌ها تا سال‌ها در ذهن شما باقی می‌ماند. در این مقاله با بیش از 30 غذای اصفهانی آشنا می‌شوید.",
    img: "/Blog/Isfahan-cuisine.webp",
    more: "مشاهده مطلب",
  },
  {
    title: "بهترین زمان سفر به همدان؛ از بازدید گرفته تا خرید",
    text: "بهترین زمان سفر به همدان؛ از بازدید گرفته تا خرید بستگی به سلیقه و هدف شما از سفر دارد. در این مطلب همه جنبه‌ها را بررسی کرده‌ایم تا بتوانید تصمیم درست بگیرید.",
    img: "/Blog/Hamadan-Best-Travel-Time.webp",
    more: "مشاهده مطلب",
  },
  {
    title: "دشت دریاسر تنکابن؛ معرفی کامل، مسیر دسترسی و بهترین فصل سفر",
    text: "اگر دوست دارید طبیعت بکر و آرامش کوهستان را یکجا تجربه کنید، دشت دریاسر تنکابن را دریابید. این دشت یکی از زیباترین دشت‌ های ایران و مقصدی متفاوت در میان جاهای دیدنی مازندران و بهتر بگوییم، جاهای دیدنی شمال کشور ...",
    img: "/Blog/daryasar-plain-esel-mahalleh.webp",
    more: "مشاهده مطلب",
  },
  {
    title: "۲۰ تا از سوغات ارومیه؛ ارومیه چه سوغاتی دارد؟",
    text: "اگر می‌پرسید سوغات ارومیه چیست، به نُقل ارومیه اکتفا نکنید؛ چون پاسخی پر از طعم و عطر در انتظار شماست. این شهر تاریخی، تنوع بالایی از سوغاتی‌های خوراکی و صنایع دستی دارد که هر کدام ...",
    img: "/Blog/urmia-souvenirs.webp",
    more: "مشاهده مطلب",
  },
];

export default function Blog() {
  return (
    <main>
      <div className="w-full">
        <div className="w-full mb-10 flex justify-between items-center">
          <p>آخرین مطالب وبلاگ</p>
          <span
            className="text-[#37a0fb]
           text-[12px] flex items-center"
          >
            مجله گردشگری <ChevronLeft size={18} />
          </span>
        </div>
        {/* box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Items.map((item) => (
            <article
              key={item.title}
              className="flex gap-3 border-gray-200 pb-5"
            >
              <div className="flex flex-1 flex-col">
                <h3 className="line-clamp-2 text-[13px] font-bold leading-6">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-[12px] leading-6 text-gray-500">
                  {item.text}
                </p>

                <button className="mt-3 w-fit text-[12px] font-medium text-sky-500">
                  مشاهده مطلب
                </button>
              </div>

              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
