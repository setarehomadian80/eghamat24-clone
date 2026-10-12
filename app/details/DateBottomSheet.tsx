"use client";

import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

// ─────────────────────────────────────────────────────────────
// محاسبات تقویم شمسی با Intl API (بدون کتابخانه‌ی خارجی)
// ─────────────────────────────────────────────────────────────

type JalaliParts = { year: number; month: number; day: number };

function jalaliOf(date: Date): JalaliParts {
  const parts = new Intl.DateTimeFormat("en-US-u-ca-persian", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const o: Record<string, number> = {};
  for (const p of parts) {
    if (p.type !== "literal") o[p.type] = parseInt(p.value, 10);
  }
  return { year: o.year, month: o.month, day: o.day };
}

function addDays(date: Date, n: number): Date {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + n);
  return d;
}

// اولین روز یه ماه شمسی خاص رو به‌صورت تاریخ میلادی پیدا می‌کنه
function firstOfJalaliMonth(year: number, month: number): Date {
  let guess = new Date();

  // همگرایی درشت: چند بار می‌پره تا نزدیک ماه هدف بشه
  for (let i = 0; i < 8; i++) {
    const p = jalaliOf(guess);
    const diff = (year - p.year) * 12 + (month - p.month);
    if (diff === 0) break;
    guess = addDays(guess, diff * 29);
  }

  // همگرایی ریز: روز به روز تنظیم می‌کنه تا دقیقاً به ماه هدف برسه
  let p = jalaliOf(guess);
  let safety = 60;
  while ((p.year !== year || p.month !== month) && safety-- > 0) {
    const diff = (year - p.year) * 12 + (month - p.month);
    guess = addDays(guess, diff > 0 ? 5 : -5);
    p = jalaliOf(guess);
  }

  // حالا guess جایی داخل ماه هدفه؛ برش می‌گردونیم به روز ۱
  return addDays(guess, -(p.day - 1));
}

function getMonthGrid(year: number, month: number) {
  const day1 = firstOfJalaliMonth(year, month);
  const days: { date: Date; jDay: number }[] = [];

  let d = day1;
  while (true) {
    const p = jalaliOf(d);
    if (p.year !== year || p.month !== month) break;
    days.push({ date: d, jDay: p.day });
    d = addDays(d, 1);
  }

  // JS: یکشنبه=0 ... شنبه=6  →  ما می‌خوایم شنبه=0 ... جمعه=6
  const firstWeekday = (day1.getDay() + 1) % 7;

  return { days, firstWeekday };
}

const MONTH_NAMES = [
  "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",
];

const WEEKDAY_LABELS = ["شنبه", "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];

export function toPersianDigits(n: number | string) {
  const map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(n).replace(/[0-9]/g, (d) => map[parseInt(d, 10)]);
}

// برای نمایش تاریخ انتخاب‌شده روی دکمه‌ها (مثلاً "۲۱ شهریور")
export function formatJalaliDate(date: Date) {
  const p = jalaliOf(date);
  return `${toPersianDigits(p.day)} ${MONTH_NAMES[p.month - 1]}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// ─────────────────────────────────────────────────────────────

type Props = {
  onClose: () => void;
  value?: Date;
  onChange?: (date: Date) => void;
};

export default function DateBottomSheet({ onClose, value, onChange }: Props) {
  const today = useMemo(() => new Date(), []);
  const todayJalali = useMemo(() => jalaliOf(today), [today]);

  const [viewYear, setViewYear] = useState(todayJalali.year);
  const [viewMonth, setViewMonth] = useState(todayJalali.month);
  const [selected, setSelected] = useState<Date>(value ?? today);

  const { days, firstWeekday } = useMemo(
    () => getMonthGrid(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const goPrevMonth = () => {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handlePick = (date: Date) => {
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return; // روز گذشته انتخاب‌ناپذیره
    setSelected(date);
    onChange?.(date);
  };

  return (
    <>
      {/* پس‌زمینه — فقط موبایل، چون از تبلت به بعد به‌صورت popover کنار دکمه‌ست */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        aria-hidden="true"
      />

      {/* موبایل: شیت از پایین | تبلت به بالا: popover نزدیک دکمه */}
      <div
        dir="rtl"
        className="
          fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto
          md:absolute md:inset-x-auto md:bottom-auto md:top-full md:right-0 md:mt-2 md:pt-5
          md:w-[360px] md:rounded-2xl md:border md:border-gray-200 md:shadow-xl
        "
      >
        {/* دستگیره — فقط موبایل */}
        <div className="flex justify-center pt-3 pb-2 md:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* برچسب بالا */}
        <div className="px-5 pb-3">
          <span className="text-[13px] text-[#2E8ADA] cursor-pointer">
            تقویم میلادی
          </span>
        </div>

        {/* هدر ماه */}
        <div className="flex items-center justify-between px-5 pb-4">
          <button
            onClick={goPrevMonth}
            aria-label="ماه قبل"
            className="p-1 text-gray-400 rotate-180"
          >
            <ChevronRight size={20} />
          </button>

          <span className="text-[15px] font-bold text-gray-900">
            {toPersianDigits(viewYear)} {MONTH_NAMES[viewMonth - 1]}
          </span>

          <button onClick={goNextMonth} aria-label="ماه بعد" className="p-1 text-gray-400">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* هدر روزهای هفته */}
        <div className="grid grid-cols-7 px-5 pb-2 text-center">
          {WEEKDAY_LABELS.map((label) => (
            <span key={label} className="text-[11px] text-gray-400">
              {label}
            </span>
          ))}
        </div>

        {/* شبکه‌ی روزها */}
        <div className="grid grid-cols-7 px-5 pb-8 gap-y-3">
          {Array.from({ length: firstWeekday }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {days.map(({ date, jDay }) => {
            const isPast =
              date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const isToday = isSameDay(date, today);
            const isSelected = isSameDay(date, selected);

            return (
              <button
                key={jDay}
                disabled={isPast}
                onClick={() => handlePick(date)}
                className="relative flex items-center justify-center h-9 text-[14px]"
              >
                <span
                  className={
                    isPast
                      ? "text-gray-300"
                      : isSelected || isToday
                      ? "font-bold text-gray-900"
                      : "text-gray-800"
                  }
                >
                  {toPersianDigits(jDay)}
                </span>

                {/* خط مورب روی روزهای گذشته */}
                {isPast && (
                  <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="w-6 h-px bg-gray-300 rotate-[-45deg]" />
                  </span>
                )}

         
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}