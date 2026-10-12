"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRight,
  Backpack,
  BookOpenText,
  ChevronLeft,
  FileText,
  Hotel,
  House,
  LucideIcon,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  PlaneTakeoff,
  Search,
  User,
  X,
} from "lucide-react";

import citiesHotel from "@/data/citiesHotel.json";
import citiesAccommodation from "@/data/citiesAccommodation.json";
import { useState } from "react";
import SearchPanel from "./Panels/searchPanel";
import OrderTracking from "./Panels/orderTrackingPanel";
import AccountPanel from "./Panels/accountPanel";

type ButtonText = {
  id: number;
  txt: string;
  link: string;
  icon: LucideIcon;
  filterType?: "iran" | "foreign";
  panelType?: PanelType;
  dataType?: "hotel" | "accommodation";
};

type City = {
  id: number;
  cityId: number;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
  location: {
    lat: number;
    lng: number;
  };
};


type PanelType =
  | "search"
  | "orderTracking"
  | "account"
  | "cityList"
  | "accommodation"
  | "tour"
  | "payment"
  | "ticket"
  | "registerProperty"
  | "agency"
  | "contact"
  | null;

const ButtonText: ButtonText[] = [
  { id: 1, txt: "جستجو", link: "#", icon: Search, panelType: "search" },
  {
    id: 2,
    txt: "پیگیری رزرو",
    link: "#",
    icon: MessageSquareText,
    panelType: "orderTracking",
  },
  { id: 3, txt: "حساب کاربری", link: "#", icon: User, panelType: "account" },

  {
    id: 4,
    txt: "هتل های داخلی",
    link: "#",
    icon: Hotel,
    filterType: "iran",
    panelType: "cityList",
    dataType: "hotel",
  },

  {
    id: 5,
    txt: "هتل های خارجی",
    link: "#",
    icon: Hotel,
    filterType: "foreign",
    panelType: "cityList",
    dataType: "hotel",
  },

  {
    id: 6,
    txt: "اقامتگاه های داخلی",
    link: "#",
    icon: House,
    filterType: "iran",
    panelType: "accommodation",
    dataType: "accommodation",
  },

  { id: 7, txt: "تور های داخلی", link: "#", icon: Backpack, panelType: "tour" },
  { id: 8, txt: "تور های خارجی", link: "#", icon: Backpack, panelType: "tour" },
  {
    id: 9,
    txt: "رزرو پرداخت",
    link: "#",
    icon: PlaneTakeoff,
    panelType: "payment",
  },
  { id: 10, txt: "بلیط تفریحات", link: "#", icon: MapPin, panelType: "ticket" },
  { id: 11, txt: "مجله اقامت 24", link: "#", icon: BookOpenText },
  {
    id: 12,
    txt: "ثبت هتل و اقامتگاه",
    link: "#",
    icon: Hotel,
    panelType: "registerProperty",
  },
  {
    id: 13,
    txt: "آژانس ها و سازمان ها",
    link: "#",
    icon: Hotel,
    panelType: "agency",
  },
  { id: 14, txt: "درباره ما", link: "#", icon: FileText },
  { id: 15, txt: "تماس با ما", link: "#", icon: Phone, panelType: "contact" },
];

export function SheetDemo() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [activePanel, setActivePanel] = useState<PanelType>(null);

  return (
    <Sheet>
      {/* دکمه باز کردن منو */}
      <SheetTrigger className="cursor-pointer">
        <Menu size={20} />
      </SheetTrigger>

      <SheetContent
        side="right"
        dir="rtl"
        showCloseButton={false}
        className="w-full! p-0!"
      >
        {/* Header */}
        <SheetHeader className="border-b p-0!">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex h-full items-center gap-2">
             <SheetClose
            type="button"
           className="cursor-pointer"
           aria-label="بستن منو"
>
  <ArrowRight size={22} />
 </SheetClose>
              <h2 className="text-[22px]">منو</h2>
            </div>

            <SheetClose className="cursor-pointer">
              <X size={20} />
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Menu */}
        <div className="h-[calc(100vh-65px)] w-full overflow-y-auto">
          {ButtonText.map((item) => {
            const Icon = item.icon;

            const isOpen = openItemId === item.id;

            // فقط برای آیتم‌هایی که filterType دارند شهرها را فیلتر می‌کنیم
            const source =
              item.dataType === "hotel"
                ? (citiesHotel as City[])
                : item.dataType === "accommodation"
                  ? (citiesAccommodation as City[])
                  : [];

            const filteredCities =
              item.filterType && Array.isArray(source)
                ? source.filter((city) => city.type === item.filterType)
                : [];

            return (
              <div key={item.id}>
                {/* آیتم اصلی منو */}
                <div
                  className={`flex h-16 w-full items-center gap-4 px-4 cursor-pointer ${
                    isOpen ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    if (item.filterType) {
                      setOpenItemId(isOpen ? null : item.id);
                    } else if (item.panelType) {
                      setActivePanel(item.panelType);
                    }
                  }}
                >
                  <Icon size={20} />

                  <span className="text-[12px]">{item.txt}</span>

                  {/* فلش برای آیتم‌هایی که زیرمنو دارند */}
                  {item.panelType && (
                    <ChevronLeft
                      size={16}
                      className={`mr-auto transition-transform duration-200 ${
                        isOpen ? "-rotate-90" : ""
                      }`}
                    />
                  )}
                </div>

                {/* شهرها */}
                {item.filterType && isOpen && (
                  <div className="bg-gray-50">
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city) => (
                        <div
                          key={city.id}
                          className="flex justify-between items-center h-12 text-[12px] px-6"
                        >
                          <a
                            href={city.href}
                            className="transition-colors hover:bg-gray-100"
                          >
                            {city.name}
                          </a>
                          <span
                            className="
                          bg-[#e7f8ef] 
                          text-[#41c880] 
                          px-2 py-1
                          rounded-[5px]
                          "
                          >
                            {city.discount}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="px-12 py-4 text-[12px] text-gray-500">
                        شهری پیدا نشد
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {activePanel === "search" && (
          <SearchPanel onClose={() => setActivePanel(null)} />
        )}
        {activePanel === "orderTracking" && (
          <OrderTracking onClose={() => setActivePanel(null)} />
        )}
        {activePanel === "account" && (
          <AccountPanel onClose={() => setActivePanel(null)} />
        )}
      </SheetContent>
    </Sheet>
  );
}
