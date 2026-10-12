"use client";

import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Alert, FormControl} from "@mui/material";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ages = [
  { childAge: "2 تا 3 سال" },
  { childAge: "3 تا 4 سال" },
  { childAge: "4 تا 5 سال" },
  { childAge: "5 تا 6 سال" },
  { childAge: "6 تا 7 سال" },
  { childAge: "7 تا 8 سال" },
  { childAge: "8 تا 9 سال" },
  { childAge: "9 تا 10 سال" },
  { childAge: "10 تا 11 سال" },
  { childAge: "11 تا 12 سال" },
];

export function MobileStayOptions() {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [guestText, setGuestText] = useState("تعداد افراد");

  const [error, setError] = useState("");
  const [errorAdult, setErrorAdult] = useState("");
  const [childrenAges, setChildrenAges] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const showError = (message: string) => {
    setError(message);

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const showAdultError = (message: string) => {
    setErrorAdult(message);

    setTimeout(() => {
      setErrorAdult("");
    }, 3000);
  };

  // بزرگسال +
  const addAdult = () => {
    if (adult + child >= 9) {
      showAdultError(
        "تعداد بزرگسال و کودک (بالای 2 سال) در هر رزرو حداکثر میتواند 9 نفر باشد",
      );
      return;
    }
    setAdult((prev) => prev + 1);
    setErrorAdult("");
  };

  // بزرگسال -
  const minusAdult = () => {
    if (adult > 1) {
      const newAdult = adult - 1;

      setAdult(newAdult);

      // اگر نوزاد بیشتر از بزرگسال جدید بود کم شود
      if (infant > newAdult) {
        setInfant(newAdult);
      }

      setError("");
    }
  };

  // نوزاد +
  const addInfant = () => {
    if (infant === adult) {
      showError("به ازای هر نوزاد، وجود یک بزرگسال الزامی است");
      return;
    }

    setInfant((prev) => prev + 1);
    setError("");
  };

  // نوزاد -
  const minusInfant = () => {
    if (infant > 0) {
      setInfant((prev) => prev - 1);
      setError("");
    }
  };

  // کودک +
  const addChild = () => {
    if (adult + child >= 9) {
      showAdultError(
        "تعداد بزرگسال و کودک (بالای 2 سال) در هر رزرو حداکثر میتواند 9 نفر باشد",
      );
      return;
    }
    setChild((prev) => prev + 1);
    setChildrenAges((prev) => [...prev, ""]);
  };
  // کودک -
  const minusChild = () => {
    if (child > 0) {
      setChild((prev) => prev - 1);
      setChildrenAges((prev) => prev.slice(0, -1));
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
          <h1 className="text-[18px]">تعداد افراد و اتاق‌ها</h1>
        </SheetHeader>

        <div className="p-4">
          <div>
            <h1 className="text-[16px]">اتاق 1</h1>
          </div>
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
                      adult + child >= 9
                        ? "opacity-40 cursor-not-allowed"
                        : "text-red-500"
                    }
                    `}
                >
                  <Plus />
                </button>

                <span className="px-5">{adult}</span>

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
                      adult + child >= 9
                        ? "opacity-40 cursor-not-allowed"
                        : "text-red-500"
                    }
                    `}
                >
                  <Plus />
                </button>

                <span className="px-5">{child}</span>

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

                <span className="px-5">{infant}</span>

                <button onClick={minusInfant} className="border p-3 rounded-lg">
                  <Minus />
                </button>
              </div>
            </div>
          </div>

          {error && (
            <Alert
              severity="warning"
              icon={false}
              sx={{
                mt: 2,
                color: "#ec8322",
                backgroundColor: "#fef9f5",
                border: "1px solid #ec8322",
                fontSize: 12,
                fontFamily: "IRANSans",
              }}
            >
              {error}
            </Alert>
          )}
          {/* ////////////// */}
          {errorAdult && (
            <Alert
              severity="warning"
              icon={false}
              sx={{
                mt: 2,
                color: "#ec8322",
                backgroundColor: "#fef9f5",
                fontSize: 12,
                border: "1px solid #ec8322",
                fontFamily: "IRANSans",
              }}
            >
              {errorAdult}
            </Alert>
          )}
          {/* ////////////////////////////////////// */}
          <div className=" max-h-75 overflow-y-auto">
            {childrenAges.map((age, index) => (
              <FormControl
                key={index}
                fullWidth
                sx={{ mt: 2, overflowY: "auto" }}
              >
                {/* <InputLabel>سن دقیق کودک {index + 1}</InputLabel> */}

                <Select
                  value={age}
                  renderValue={(selected) =>
                    selected || `سن دقیق کودک ${index + 1}`
                  }
                  onChange={(e) => {
                    const newAges = [...childrenAges];
                    newAges[index] = e.target.value;
                    setChildrenAges(newAges);
                  }}
                  displayEmpty
                  MenuProps={{
                    disablePortal: true,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    slotProps: {
                      paper: {
                        sx: {
                          mt: 0.5,
                          borderRadius: 2,
                          maxHeight: 250,
                          overflowY: "auto",
                        },
                      },
                    },
                  }}
                >
                  {ages.map((age, index) => (
                    <MenuItem key={index} value={age.childAge}>
                      {age.childAge}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </div>
        </div>
        {/* footer (button) */}
        <div
          className="sticky bottom-0 right-0 m-4
         grid grid-cols-2 *:p-3 gap-6 *:rounded-[12px]"
        >
          <button className="text-[#fb373e] border">افزودن اتاق</button>
            <button 
            onClick={() => {
              handleConfirm();
              setOpen(false);
            }} className="bg-[#fb373e] text-white">
            تایید
          </button>
          
        </div>
      </SheetContent>
    </Sheet>
  );
}
