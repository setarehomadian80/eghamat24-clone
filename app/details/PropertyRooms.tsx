import rooms from "@/data/rooms.json";
import Image from "next/image";
import { BedDouble, Users, Coffee } from "lucide-react";

export default function PropertyRooms() {
  return (
    <section className="mt-12">
      <h2
        className="
      text-[16px] 
      md:text-[18px] 
      xl:text-[20px] 
      font-bold mb-6 
      "
      >
        لیست اتاق ها
      </h2>

      <div className="flex flex-col gap-5">
        {rooms.map((room) => (
          <article
            key={room.id}
            className="
          border
          rounded-xl
          p-3
          flex
          flex-col
          md:flex-row
          md:gap-5
          "
          >
            {/* info */}
            <div
              className="
            mt-4
            md:mt-0
            flex-1
            md:flex 
            md:flex-col 
            md:justify-between

            "
            >
              <div>
                <h3
                  className="
              font-bold
              text-[14px] xl:text-[18px]
              mb-4
              line-clamp-1
              "
                >
                  {room.name}
                </h3>
                <div
                  className="
              flex
              flex-wrap
              gap-4
              text-gray-600
              text-[12px]
              "
                >
                  <span className="flex gap-1 items-center">
                    <Users size={15} />
                    {room.capacity.person} نفر
                  </span>

                  <span className="flex gap-1 items-center">
                    <BedDouble size={15} />
                    {room.bed.type}
                  </span>

                  <span className="flex gap-1 items-center">
                    <Coffee size={15} />
                    {room.mealPlan}
                  </span>
                </div>
              </div>

              {/* services */}

              <div
                className="
              flex
              flex-wrap
              gap-2
              mt-10
              "
              >
                {room.services.map((service) => (
                  <span
                    key={service}
                    className="
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  px-3
                  py-2
                  text-[11px]
                  text-gray-600
                  "
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* image */}
            <div
              className="
              mt-6
            relative
            w-full
            h-45
            md:w-60
            md:h-36
            shrink-0
            "
            >
              <Image
                src={room.image}
                alt={room.name}
                width={240}
                height={144}
                className="
     w-full
      h-full
      object-cover
      rounded-lg
    "
              />
            </div>

            {/* price */}

            <div
              className="
            mt-5
            pt-4
            border-t
            md:border-t-0
            md:border-r
            md:mt-0
            md:pt-0
            md:pr-5
            md:w-52
            flex
            flex-col
            justify-between
            "
            >
              <div
                className="
              flex 
              flex-row-reverse 
              items-center 
              justify-between
              md:flex-col
              "
              >
                <div>
                  <div
                    className="
                  text-gray-400 
                  text-[12px]
                  flex items-center
                  justify-between
                  "
                  >
                    <span className="line-through">
                      {room.price.old.toLocaleString()}
                    </span>
                    <span
                      className="
                  bg-[#e7f8ef] 
                  text-[#11b964]
                  py-1 px-1.5
                  rounded-[5px]
                  "
                    >
                      {room.price.offer.toLocaleString("fa-IR")}%
                    </span>
                  </div>

                  <p
                    className="
                  font-bold
                  mt-2
                  text-[14px]
                  flex gap-2
                  "
                  >
                    {room.price.final.toLocaleString()}

                    <span className="text-[12px] font-normal">
                      تومان / ۱ شب
                    </span>
                  </p>
                </div>

                <span
                  className="
                text-[#37a0fb]
                text-[13px]
                mt-4
                font-bold
                "
                >
                  {room.price.date}
                </span>
              </div>

              <button
                className="
              mt-4

              w-full

              bg-[#ff3541]

              text-white

              rounded-lg

              py-3

              text-[13px]
              "
              >
                انتخاب تاریخ
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
