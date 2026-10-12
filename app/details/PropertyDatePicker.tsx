"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DateBottomSheet, { formatJalaliDate } from "./DateBottomSheet";
import DurationBottomSheet from "./DurationBottomSheet";

type Props = {
  detail: any;
};

type ActiveField = "checkin" | "duration" | null;

export default function PropertyDatePicker({ detail }: Props) {
  const [activeField, setActiveField] = useState<ActiveField>(null);
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [nights, setNights] = useState<number | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-[18px] font-semibold">{detail.roomList}</h2>

      <div
        className="
          relative
          mt-6
          w-full
          md:w-[500px]
          md:border
          rounded-[12px]
          flex
          py-3
        "
      >
        {/* شروع اقامت */}
        <div className="relative w-1/2">
          <button
            type="button"
            onClick={() => setActiveField(activeField === "checkin" ? null : "checkin")}
            className="
              w-full
              px-4
              text-right
              border-l
              cursor-pointer
            "
          >
            <span className="block text-[12px] text-gray-500">شروع اقامت</span>

            <span className="mt-1 flex items-center justify-between text-[12px]">
              {checkinDate ? formatJalaliDate(checkinDate) : "انتخاب کنید"}
              <ChevronDown size={18} />
            </span>
          </button>

          {activeField === "checkin" && (
            <DateBottomSheet
              value={checkinDate ?? undefined}
              onClose={() => setActiveField(null)}
              onChange={(date) => {
                setCheckinDate(date);
                // با تغییر تاریخ ورود، مدت اقامت قبلی دیگه معتبر نیست
                setNights(null);
                setCheckoutDate(null);
                setActiveField(null);
              }}
            />
          )}
        </div>

        {/* مدت اقامت */}
        <div className="relative w-1/2">
          <button
            type="button"
            disabled={!checkinDate}
            onClick={() => {
              if (!checkinDate) return; // اول باید تاریخ ورود انتخاب بشه
              setActiveField(activeField === "duration" ? null : "duration");
            }}
            className={`
              w-full
              px-4
              text-right
              cursor-pointer
              ${!checkinDate ? "opacity-40 cursor-not-allowed" : ""}
            `}
          >
            <span className="block text-[12px] text-gray-500">مدت اقامت</span>

            <span className="mt-1 flex items-center justify-between text-[12px]">
              {nights ? `${nights} شب` : "انتخاب کنید"}
              <ChevronDown size={18} />
            </span>
          </button>

          {activeField === "duration" && checkinDate && (
            <DurationBottomSheet
              checkinDate={checkinDate}
              onClose={() => setActiveField(null)}
              onChange={(n, checkout) => {
                setNights(n);
                setCheckoutDate(checkout);
                setActiveField(null);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}