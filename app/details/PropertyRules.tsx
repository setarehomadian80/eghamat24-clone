import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";

import {
  DoorOpen,
  Venus,
  BookOpenText,
  Baby,
  BookX,
  FileText,
  LucideIcon,
} from "lucide-react";

type RulesItem = {
  icon: LucideIcon;
  title: string;
  des: string;
};

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

const PropertyRulesItem: RulesItem[] = [
  {
    icon: DoorOpen,
    title: "ورود و خروج",
    des: "ساعت تحویل اتاق :  14:00  ساعت تخلیه اتاق: 12:00",
  },
  {
    icon: Venus,
    title: "پذیرش خانم مجرد",
    des: "با مدرک شناسایی معتبر (غیر بومی)",
  },
  { icon: BookOpenText, title: "صیغه نامه", des: "با مهر برجسته محضر" },
  {
    icon: Baby,
    title: "نیم بهاء",
    des: "اقامت کودک زیر 2 سال (درصورت عدم استفاده از سرویس) رایگان می‌باشد و بازه سنی برای اقامت کودک بین 2 الی 7 سال (درصورت عدم استفاده از سرویس) نیم بها محاسبه می‌گردد. لازم به ذکر است : اقامت رایگان و نیم بها تنها برای یک کودک محاسبه می‌گردد.",
  },
  {
    icon: BookX,
    title: "کنسلی",
    des: "کنسلی رزرو در ایام پیک و غیر پیک: با توجه به اینکه نرخ کنسلی در ایام مختلف و هتل های مختلف متفاوت می باشد، مبلغ دقیق کنسلی بعد از استعلام از هتل مشخص می گردد.",
  },
  {
    icon: FileText,
    title: "قوانین هتل",
    des: "پذیرش مهمان بومی امکان پذیر نمی باشد",
  },
];

export default function PropertyRules({ slug, type }: Props) {
  const property =
    type === "hotel"
      ? hotels.find((item) => item.slug === slug)
      : accommodation.find((item) => item.slug === slug);

  if (!property) return null;

  return (
    <main className="mt-12">
      <strong
        className="
        text-[16px] md:text-[18px] xl:text-[20px]
        "
      >
        قوانین {property.name}
      </strong>

      <div
        className="
        mt-6
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        gap-5
        "
      >
        {PropertyRulesItem.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
              border 
              rounded-lg
              p-5
              text-[12px]
              flex flex-col
              gap-4
              "
            >
              <Icon size={26} className="text-gray-500 " />

              <h2 className="text-[14px] md:text-[16px] xl:text-[18px]">
                {item.title}
              </h2>

              <p className="text-gray-500 leading-6">{item.des}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}