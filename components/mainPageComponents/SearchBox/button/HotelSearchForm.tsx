import React from "react";
import MyDatePicker from "./DatePicker";
import CityNameSearchbox from "./cityNameSearchbox";
import { Night } from "./NightTime";
import DesktopNavCityName from "../NavDesktop/DesktopNavCityName";
import DesktopNavNight from "../NavDesktop/DesktopNavNight";

export default function HotelSearchForm() {
  return (
    <div
      className="grid grid-cols-1
     md:grid-cols-2 lg:grid-cols-4
      gap-5 *:rounded-[12px] p-5"
    >
      <div className="md:hidden">
        <CityNameSearchbox />
      </div>
      <div className="hidden md:flex">
        <DesktopNavCityName
          placeholder="نام شهر یا هتل"
          dropdownWidth="100%"
          borderRadius="12px"
        />
      </div>

      <MyDatePicker className="rounded-[12px]" />
      {/* night */}
      <div className="md:hidden">
        <Night />
      </div>
      <div className="hidden md:flex">
        <DesktopNavNight />
      </div>

      <button className="text-white text-[12px] bg-[#ea363d] w-full p-4">
        جستجوی هتل
      </button>
    </div>
  );
}
