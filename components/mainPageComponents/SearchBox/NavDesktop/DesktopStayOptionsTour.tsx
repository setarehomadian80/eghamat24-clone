"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
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

export default function DesktopStayOptions() {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const [guestText, setGuestText] = useState("تعداد افراد");

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(
    null
  );

  const [childrenAges, setChildrenAges] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [errorAdult, setErrorAdult] = useState("");

  const open = Boolean(anchorEl);

  const showError = (message: string) => {
    setError(message);
    setTimeout(() => setError(""), 3000);
  };

  const addAdult = () => {
    if (adult + child >= 9) {
      setErrorAdult(
        "تعداد بزرگسال و کودک (بالای 2 سال) در هر رزرو حداکثر می‌تواند 9 نفر باشد."
      );
      return;
    }

    setAdult((prev) => prev + 1);
  };

  const minusAdult = () => {
    if (adult > 1) {
      setAdult((prev) => prev - 1);
    }
  };

  const addChild = () => {
    if (adult + child >= 9) {
      setErrorAdult(
        "تعداد بزرگسال و کودک (بالای 2 سال) در هر رزرو حداکثر می‌تواند 9 نفر باشد."
      );
      return;
    }

    setChild((prev) => prev + 1);
    setChildrenAges((prev) => [...prev, ""]);
  };

  const minusChild = () => {
    if (child > 0) {
      setChild((prev) => prev - 1);
      setChildrenAges((prev) => prev.slice(0, -1));
    }
  };

  const addInfant = () => {
    if (infant >= adult) {
      showError(
        "به ازای هر نوزاد در پرواز، وجود یک بزرگسال الزامی است."
      );
      return;
    }

    setInfant((prev) => prev + 1);
  };

  const minusInfant = () => {
    if (infant > 0) {
      setInfant((prev) => prev - 1);
    }
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
            cursor: "pointer",
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
          <h2 className="mb-5 font-bold">اتاق 1</h2>

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
                aria-label="افزایش تعداد بزرگسال"
                className="rounded-lg border p-2 text-red-500"
              >
                <Plus />
              </button>

              <span className="flex w-5 items-center justify-center">
                {adult}
              </span>

              <button
                type="button"
                onClick={minusAdult}
                aria-label="کاهش تعداد بزرگسال"
                className="rounded-lg border p-2"
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
                aria-label="افزایش تعداد کودک"
                className="rounded-lg border p-2 text-red-500"
              >
                <Plus />
              </button>

              <span className="flex w-5 items-center justify-center">
                {child}
              </span>

              <button
                type="button"
                onClick={minusChild}
                aria-label="کاهش تعداد کودک"
                className="rounded-lg border p-2"
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
                aria-label="افزایش تعداد نوزاد"
                className="rounded-lg border p-2 text-red-500"
              >
                <Plus />
              </button>

              <span className="flex w-5 items-center justify-center">
                {infant}
              </span>

              <button
                type="button"
                onClick={minusInfant}
                aria-label="کاهش تعداد نوزاد"
                className="rounded-lg border p-2"
              >
                <Minus />
              </button>
            </div>
          </div>

          {/* سن کودکان */}
          {childrenAges.map((age, index) => (
            <FormControl
              fullWidth
              sx={{ mt: 2 }}
              key={index}
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
                  const copy = [...childrenAges];
                  copy[index] = event.target.value;
                  setChildrenAges(copy);
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

          {errorAdult && (
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
              {errorAdult}
            </Alert>
          )}

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
