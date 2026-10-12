"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideIcon, Map, X, Search } from "lucide-react";
import { useState } from "react";
import cities from "@/data/cities.json";

type CityName = {
  id: number;
  city: string;
  link: string;
  map: string;
  icon: LucideIcon;
  discount: string;
};

export type CityNameProps = {
  placeholder?: string;
  searchPlaceholder?: string;
  title?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function MobileNavCityName({
  placeholder = "",
  searchPlaceholder = "",
  title = "",
  className = "rounded-[12px]",
  value = "",
  onChange,
}: CityNameProps) {
  const [valueInput, setValueInput] = useState("");

  const filteredCities = cities.filter((item) => {
    const search = valueInput.trim();
    return item.city.includes(search) || item.map.includes(search);
  });

//   const [selectCity, setSelectCity] = useState("");

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className=" w-full">
        <input
          className={`border w-full p-4 text-[12px] ${className}`}
          type="text"
          placeholder={placeholder}
          value={value}
          readOnly
        />
      </SheetTrigger>

      <SheetContent
        side="right"
        dir="rtl"
        showCloseButton={false}
        className="w-full!"
      >
        <SheetHeader className="p-0! border-b f">
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center gap-2 h-full!">
              <h2 className="text-[16px]">{title}</h2>
            </div>
            <SheetClose>
              <X />
            </SheetClose>
          </div>
        </SheetHeader>

        {/* container */}
        <div className="p-4 overflow-y-auto">
          {/* search input */}
          <div className="w-full border flex p-5 justify-between rounded-[12px] my-4">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="border-none outline-none focus:outline-none focus:ring-0"
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
            <Search />
          </div>

          <div className="w-full ">
            {filteredCities.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center
                  justify-between cursor-pointer
                  gap-4 h-16 p-4"
                  onClick={() => {
                    onChange?.(item.city);
                    setOpen(false);
                    setValueInput("");
                  }}
                >
                  <div
                    className="flex items-center
                  justify-between cursor-pointer
                  gap-4 h-16 "
                  >
                    <Map size={20} />
                    <div>
                      <button className="text-[12px]">{item.city}</button>
                      <p className="text-gray-500 text-[11px] mt-1">
                        {item.map}
                      </p>
                    </div>
                  </div>

                  {/* تخفیف */}
                  <p
                    className="text-[#53cc8b] bg-[#e7f8ef]
                 w-16 flex justify-center p-1 rounded-[8px] text-[12px]"
                  >
                    {item.discount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
