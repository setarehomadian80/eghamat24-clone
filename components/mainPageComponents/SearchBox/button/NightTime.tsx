import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

type Night = {
  nightHotel: string;
  date: string;
};
const night: Night[] = [
  { nightHotel: "1 شب", date: "(1405/05/04)" },
  { nightHotel: "2 شب", date: "(1405/05/05)" },
  { nightHotel: "3 شب", date: "(1405/05/06)" },
  { nightHotel: "4 شب", date: "(1405/05/07)" },
  { nightHotel: "5 شب", date: "(1405/05/08)" },
  { nightHotel: "6 شب", date: "(1405/05/09)" },
  { nightHotel: "7 شب", date: "(1405/05/10)" },
  { nightHotel: "8 شب", date: "(1405/05/11)" },
  { nightHotel: "9 شب", date: "(1405/05/12)" },
  { nightHotel: "10 شب", date: "(1405/05/13)" },
];

export function Night() {
  const [activeItem, setActiveItem] = useState<Night | null>(null);

  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <Input
          type="text"
          className="border w-full p-4 h-auto
         rounded-[12px] text-[12px]!"
          placeholder="به مدت"
          value={
            activeItem ? `${activeItem.nightHotel} ${activeItem.date}` : ""
          }
          readOnly
        />
      </SheetTrigger>

      <SheetContent side="bottom" showCloseButton={false} className="p-5">
        {night.map((item) => (
          <SheetClose key={item.nightHotel}>
            <div
              onClick={() => setActiveItem(item)}
              className="flex justify-between my-2"
            >
              <span>{item.nightHotel}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
}
