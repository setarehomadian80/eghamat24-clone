"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import HotelGeneral from "./MoreAmenitiesPages.tsx/HotelGeneral";
import RoomAmenities from "./MoreAmenitiesPages.tsx/RoomAmenities";
import HotelAmenities from "./MoreAmenitiesPages.tsx/HotelAmenities";
import SpecialServices from "./MoreAmenitiesPages.tsx/SpecialServices";
import Welfare from "./MoreAmenitiesPages.tsx/Welfare";
import SportEntertainment from "./MoreAmenitiesPages.tsx/SportEntertainment";
import PropertySpecialServices from "./MoreAmenitiesPages.tsx/PropertySpecialServices";
import PropertySpecialFeatures from "./MoreAmenitiesPages.tsx/PropertySpecialFeatures";

const tabs = [
  { id: 1, title: "عمومی هتل" },
  { id: 2, title: "امکانات اتاق" },
  { id: 3, title: "امکانات اختصاصی هتل" },
  { id: 4, title: "خدمات ویژه اقامت 24" },
  { id: 5, title: "رفاهی" },
  { id: 6, title: "ورزشی تفریحی" },
  { id: 7, title: "خدمات ویژه" },
  { id: 8, title: "ویژگی خاص هتل" },
];

type Props = {
  onClose: () => void;
};

export default function MoreAmenities({ onClose }: Props) {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex flex-col
      xl:inset-auto
  xl:w-[70%]
  xl:h-[85%]
  xl:top-1/2
  xl:left-1/2
  xl:-translate-x-1/2
  xl:-translate-y-1/2
  xl:rounded-xl
  xl:shadow-xl
 
    "
    >
      <button onClick={onClose}>
        <h1 className="flex gap-1 p-4">
          {" "}
          <ArrowRight /> امکانات بیشتر
        </h1>
      </button>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex items-center w-max min-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative h-14 px-3 text-[12px] whitespace-nowrap transition-colors
                  ${
                    activeTab === tab.id
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {tab.title}

                {activeTab === tab.id && (
                  <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-red-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className=" overflow-y-auto
  scrollbar-none">
        {activeTab === 1 && <HotelGeneral />}
        {activeTab === 2 && <RoomAmenities />}
        {activeTab === 3 && <HotelAmenities />}
        {activeTab === 4 && <SpecialServices />}
        {activeTab === 5 && <Welfare />}
        {activeTab === 6 && <SportEntertainment />}
        {activeTab === 7 && <PropertySpecialServices />}
        {activeTab === 8 && <PropertySpecialFeatures />}
      </div>
    </div>
  );
}
