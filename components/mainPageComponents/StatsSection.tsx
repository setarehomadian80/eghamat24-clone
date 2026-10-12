import Image from "next/image";

const Items = [
  {
    imglink: "/StatsSectionIcon/reservation.svg",
    text: "۲ میلیون رزرو موفق در سال",
  },
  {
    imglink: "/StatsSectionIcon/location.svg",
    text: "بیش از 1700 هتل و اقامتگاه داخلی و خارجی",
  },
  {
    imglink: "/StatsSectionIcon/comment.svg",
    text: "یک میلیون امتیاز و نظر ثبت شده",
  },
  {
    imglink: "/StatsSectionIcon/support.svg",
    text: "پشتیبانی ۲۴ ساعته در ۷ روز هفته",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          flex w-full 
          flex-wrap
          rounded-lg
          bg-[#f4f4f4]
          px-4 py-3
          md:px-6
          xl:px-2
        "
      >
        {Items.map((item, index) => (
          <figure
            key={index}
            className="
              flex
              w-full
              items-center
              gap-3
              py-2
              text-[12px]
              md:w-1/2
              xl:w-1/4
              xl:justify-center
            "
          >
            <Image
              src={item.imglink}
              width={40}
              height={40}
              alt=""
              className="h-10 w-10 shrink-0"
            />

            <figcaption className="leading-6">
              {item.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}