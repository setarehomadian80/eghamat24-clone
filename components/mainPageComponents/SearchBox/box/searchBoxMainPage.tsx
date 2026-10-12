"use client";
import {
  Backpack,
  FerrisWheel,
  Hotel,
  House,
  LucideIcon,
  PlaneTakeoff,
} from "lucide-react";
import { useState } from "react";
import HotelSearchForm from "../button/HotelSearchForm";
import ResidencySearchForm from "./ResidencySearchForm";
import TourSearchForm from "./TourSearchForm";
import FlightSearchForm from "./FlightSearchForm";
import ActivitiesSearchForm from "./ActivitiesSearchForm";

type Detail = {
  id: number;
  title: string;
  icon: LucideIcon;
  value: string;
  component: React.ReactNode;
};

const detail: Detail[] = [
  {
    id: 1,
    title: "هتل",
    icon: Hotel,
    value: "hotel",
    component: <HotelSearchForm />,
  },
  {
    id: 2,
    title: "اقامتگاه",
    icon: House,
    value: "Residency",
    component: <ResidencySearchForm />,
  },
  {
    id: 3,
    title: "تور",
    icon: Backpack,
    value: "Tour",
    component: <TourSearchForm />,
  },
  {
    id: 4,
    title: "پرواز",
    icon: PlaneTakeoff,
    value: "Flight",
    component: <FlightSearchForm />,
  },
  {
    id: 5,
    title: "تفریحات",
    icon: FerrisWheel,
    value: "Activities",
    component: <ActivitiesSearchForm />,
  },
];

export default function SearchBoxMainPage() {


  const [activeTab, setActiveTab] = useState("hotel");
  const activeContent = detail.find((item) => item.value === activeTab);


  return (
    <div className="border w-full rounded-[12px] overflow-hidden">
      {/* title button box*/}
      <div
        className="border text-[14px] 
          flex justify-around overflow-x-auto"
      >
        {detail.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.value)}
              className={`flex min-w-20 flex-col
              items-center gap-2 py-3 md:py-5 transition-all
               cursor-pointer md:flex-row
              ${
                activeTab === item.value
                  ? "border-b border-red-600 text-red-600"
                  : "text-gray-600"
              }`}
            >
              <Icon size={22} />
              <span> {item.title}</span>
            </button>
          );
        })}
      </div>
      {/* sort box */}
      <div>
        {activeContent?.component}
      </div>
    </div>
  );
}
