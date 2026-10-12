"use client";

import { useState } from "react";
import questions from "@/data/questions.json";
import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";
import { MessageCircleQuestion, ThumbsUp, ThumbsDown } from "lucide-react";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

export default function PropertyQuestions({ slug, type }: Props) {
  const properties = type === "hotel" ? hotels : accommodation;

  const property = properties.find((item) => item.slug === slug);

  if (!property) return null;

  return (
    <section className="mt-14">
      {/* Title */}

      <h2
        className="
      text-[16px] 
      md:text-[18px] 
      xl:text-[20px] 
      font-bold 
      mb-8"
      >
        پرسش و پاسخ {property.name}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}

        <aside
          className="
          order-1
          lg:order-2
          border
          rounded-xl
          p-6
          h-fit
          lg:sticky
          lg:top-5
        "
        >
          <p
            className="
            text-xs
            text-gray-500
            leading-8
            text-center
          "
          >
            هر سوالی در مورد این مجموعه دارید، می‌توانید پس از ورود به حساب
            کاربری خود ثبت کنید.
          </p>

          <button
            className="
            w-full
            mt-8
            border
            rounded-lg
            py-3
            text-xs
            text-[#ff4d4f]
            font-bold
            hover:bg-red-50
            duration-200
          "
          >
            ورود و ثبت پرسش جدید
          </button>
        </aside>

        {/* Questions */}

        <div
          className="
          lg:col-span-3
          order-2
          lg:order-1
          space-y-4
        "
        >
          {questions.map((item) => (
            <QuestionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionCard({ item }: any) {
  const [open, setOpen] = useState(!!item.answer);

  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#3b82f6] text-sm font-medium"
          >
            {open ? "بستن پاسخ" : "ثبت پاسخ +"}
          </button>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MessageCircleQuestion size={15} />
            سوال من هم بود
          </div>
        </div>

        <h3
          className="
          mt-5
          text-[14px]
          font-bold
          leading-9
        "
        >
          {item.question}
        </h3>
      </div>

      {open && item.answer && (
        <div
          className="
          border-t
          bg-gray-50
          p-6
        "
        >
          <div
            className="
            flex
            items-center
            gap-5
            text-gray-400
            text-sm
            mb-5
          "
          >
            <ThumbsUp size={18} />

            <ThumbsDown size={18} />

            <span>آیا این پاسخ مفید بود؟</span>
          </div>

          <p
            className="
            text-xs
            leading-8
            text-gray-700
          "
          >
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}