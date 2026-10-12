"use client";

import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// import "./DataPicker.css"

type MyDataPickerProps = {
  className?: string
}

export default function MyDatePicker({
  className = "",
}) {

  const today = new DateObject({
    calendar: persian,
    locale: persian_fa,
  });

  const [date, setDate] = useState(today.format("dddd D MMMM YYYY"));

  return (
    <div className="w-full">
      <DatePicker
      containerClassName="w-full"
        calendar={persian}
        locale={persian_fa}
        onChange={(value) => {
          if (value) {
            setDate(value.format("dddd D MMMM YYYY"));
          }
        }}
        render={(value, openCalendar) => (
          <input
            value={date}
            onFocus={openCalendar}
            readOnly
            // placeholder="تاریخ پرواز"
            className={`w-full p-4 outline-none cursor-pointer
              border text-[12px] ${className}`}
          />
        )}
      />
    </div>
  );
}