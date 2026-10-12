"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Minus, Plus } from "lucide-react";

const ages = [
  "2 تا 3 سال",
  "3 تا 4 سال",
  "4 تا 5 سال",
  "5 تا 6 سال",
  "6 تا 7 سال",
  "7 تا 8 سال",
  "8 تا 9 سال",
  "9 تا 10 سال",
  "10 تا 11 سال",
  "11 تا 12 سال",
];

export default function DesktopStayOptionsFlight() {
  const [adult, setAdult] = useState(1);
  const [infant, setInfant] = useState(0);
  const [childrenAges, setChildrenAges] = useState<string[]>([]);

  const [guestText, setGuestText] = useState("تعداد افراد");

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(
    null
  );

  const child = childrenAges.length;
  const open = Boolean(anchorEl);

  const addAdult = () => {
    setAdult((prev) => Math.min(prev + 1, 10));
  };

  const minusAdult = () => {
    setAdult((prev) => Math.max(prev - 1, 1));
  };

  const addChild = () => {
    setChildrenAges((prev) =>
      prev.length < 10 ? [...prev, ""] : prev
    );
  };

  const minusChild = () => {
    setChildrenAges((prev) => prev.slice(0, -1));
  };

  const addInfant = () => {
    setInfant((prev) => Math.min(prev + 1, 10));
  };

  const minusInfant = () => {
    setInfant((prev) => Math.max(prev - 1, 0));
  };

  const handleConfirm = () => {
    setGuestText(
      `${adult} بزرگسال، ${child} کودک، ${infant} نوزاد`
    );

    setAnchorEl(null);
  };

  return (
    <div dir="rtl" className="w-full">
      <TextField
        value={guestText}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        fullWidth
        placeholder="تعداد افراد"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            fontFamily: "inherit",
            fontSize: "12px",
            width: "100%",
          },
          "& .MuiInputBase-input": {
            cursor: "pointer",
          },
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        disableScrollLock
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div
          dir="rtl"
          className="w-87.5 max-w-[calc(100vw-32px)] p-5"
        >
          <h2 className="mb-5 text-[14px] font-bold">
            تعداد افراد
          </h2>

          {/* بزرگسال */}
          <div className="mb-5 flex items-center justify-between text-[12px]">
            <div>
              <strong>بزرگسال</strong>
              <p className="text-gray-400">۱۲ سال به بالا</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={addAdult}
                disabled={adult >= 10}
                aria-label="افزایش تعداد بزرگسال"
                className="rounded-lg border p-2 text-red-500 disabled:opacity-40"
              >
                <Plus />
              </button>

              <span className="flex w-5 items-center justify-center">
                {adult}
              </span>

              <button
                type="button"
                onClick={minusAdult}
                disabled={adult <= 1}
                aria-label="کاهش تعداد بزرگسال"
                className="rounded-lg border p-2 disabled:opacity-40"
              >
                <Minus />
              </button>
            </div>
          </div>

          {/* کودک */}
          <div className="mb-5 flex items-center justify-between text-[12px]">
            <div>
              <strong>کودک</strong>
              <p className="text-gray-400">۲ تا ۱۲ سال</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={addChild}
                disabled={child >= 10}
                aria-label="افزایش تعداد کودک"
                className="rounded-lg border p-2 text-red-500 disabled:opacity-40"
              >
                <Plus />
              </button>

              <span className="flex w-5 items-center justify-center">
                {child}
              </span>

              <button
                type="button"
                onClick={minusChild}
                disabled={child === 0}
                aria-label="کاهش تعداد کودک"
                className="rounded-lg border p-2 disabled:opacity-40"
              >
                <Minus />
              </button>
            </div>
          </div>

          {/* نوزاد */}
          <div className="flex items-center justify-between text-[12px]">
            <div>
              <strong>نوزاد</strong>
              <p className="text-gray-400">تا ۲ سال</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={addInfant}
                disabled={infant >= 10}
                aria-label="افزایش تعداد نوزاد"
                className="rounded-lg border p-2 text-red-500 disabled:opacity-40"
              >
                <Plus />
              </button>

              <span className="flex w-5 items-center justify-center">
                {infant}
              </span>

              <button
                type="button"
                onClick={minusInfant}
                disabled={infant === 0}
                aria-label="کاهش تعداد نوزاد"
                className="rounded-lg border p-2 disabled:opacity-40"
              >
                <Minus />
              </button>
            </div>
          </div>

          {/* سن کودکان */}
          {childrenAges.map((age, index) => (
            <FormControl
              key={index}
              fullWidth
              sx={{ mt: 2 }}
            >
              <Select
                value={age}
                displayEmpty
                inputProps={{
                  "aria-label": `سن کودک ${index + 1}`,
                }}
                MenuProps={{
                  disableScrollLock: true,
                }}
                onChange={(event) => {
                  const selectedAge = event.target.value;

                  setChildrenAges((prev) =>
                    prev.map((value, childIndex) =>
                      childIndex === index ? selectedAge : value
                    )
                  );
                }}
                sx={{
                  fontFamily: "inherit",
                  fontSize: "12px",
                }}
              >
                <MenuItem value="">
                  سن کودک {index + 1}
                </MenuItem>

                {ages.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}

          <div className="mt-5 grid grid-cols-2 gap-4 text-[12px]">
            <button
              type="button"
              className="rounded-xl border p-3 text-red-500"
            >
              افزودن اتاق
            </button>

            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-xl bg-[#fb373e] p-3 text-white"
            >
              تایید
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
}
