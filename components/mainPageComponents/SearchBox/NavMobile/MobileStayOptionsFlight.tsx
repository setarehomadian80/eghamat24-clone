"use client";

import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function MobileStayOptionsFlight() {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [guestText, setGuestText] = useState("تعداد افراد");

  const [open, setOpen] = useState(false);



  // بزرگسال +
  const addAdult = () => {
    if (adult  < 10) {
          setAdult((prev) => prev + 1);
    }
  };

  // بزرگسال -
  const minusAdult = () => {
    if (adult > 1) {
      const newAdult = adult - 1;

      setAdult(newAdult);
  };
  }
  // نوزاد +
  const addInfant = () => {
    if (infant < 10) {
      setInfant((prev) => prev + 1);
    }
  };

  // نوزاد -
  const minusInfant = () => {
    if (infant > 0) {
      setInfant((prev) => prev - 1);
    }
  };

  // کودک +
  const addChild = () => {
    if (child < 10) {
    setChild((prev) => prev + 1);
    }
      };
  // کودک -
  const minusChild = () => {
    if (child > 0) {
      setChild((prev) => prev - 1);
    }
  };

  const handleConfirm = () => {
    const text = `${adult} بزرگسال ${child} کودک ${infant} نوزاد`;

    setGuestText(text);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="w-full">
        <Input
          className="border w-full p-4 h-auto text-[12px]! rounded-[12px]"
          readOnly
          value={guestText}
        />
      </SheetTrigger>

      <SheetContent side="bottom" showCloseButton={false}>
        <SheetHeader>
          <h1 className="text-[18px]">تعداد افراد</h1>
        </SheetHeader>

        <div className="p-4">
          <div className=" pt-4 rounded-xl space-y-5">
            {/* بزرگسال */}
            <div className="flex justify-between items-center">
              <div>
                <strong>بزرگسال</strong>
                <p className="text-gray-400">(۱۲ سال به بالا)</p>
              </div>

              <div className="flex items-center">
                <button
                  onClick={addAdult}
                  className={`border p-3 rounded-lg text-red-500
                    ${
                      adult === 10 
                        ? "opacity-40 cursor-not-allowed"
                        : "text-red-500"
                    }
                    `}
                >
                  <Plus />
                </button>

                <span className=" w-10 flex justify-center items-center">{adult}</span>

                <button onClick={minusAdult} className="border p-3 rounded-lg">
                  <Minus />
                </button>
              </div>
            </div>

            {/* کودک */}
            <div className="flex justify-between items-center">
              <div>
                <strong>کودک</strong>
                <p className="text-gray-400">(2 تا 12 سال)</p>
              </div>

              <div className="flex items-center">
                <button
                  onClick={addChild}
                  className={`border p-3 rounded-lg text-red-500
                    ${
                       child === 10
                        ? "opacity-40 cursor-not-allowed"
                        : "text-red-500"
                    }
                    `}
                >
                  <Plus />
                </button>

                <span className=" w-10 flex justify-center items-center">{child}</span>

                <button onClick={minusChild} className="border p-3 rounded-lg">
                  <Minus />
                </button>
              </div>
            </div>

            {/* نوزاد */}
            <div className="flex justify-between items-center">
              <div>
                <strong>نوزاد</strong>
                <p className="text-gray-400">(تا ۲ سال)</p>
              </div>

              <div className="flex items-center">
                <button
                  onClick={addInfant}
                  className={`border p-3 rounded-lg ${
                    infant === adult
                      ? "opacity-40 cursor-not-allowed"
                      : "text-red-500"
                  }`}
                >
                  <Plus />
                </button>

                <span className=" w-10 flex justify-center items-center">{infant}</span>

                <button onClick={minusInfant} className="border p-3 rounded-lg">
                  <Minus />
                </button>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////// */}
        </div>
        {/* footer (button) */}
        <div
          className="sticky bottom-0 right-0 w-full p-4
         *:p-3 *:rounded-[12px] "
        >
            <button 
            onClick={() => {
              handleConfirm();
              setOpen(false);
            }} className="bg-[#fb373e] text-white w-full">
            جستجوی بلیط
          </button>
          
        </div>
      </SheetContent>
    </Sheet>
  );
}
