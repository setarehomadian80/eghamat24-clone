"use client";

// ─────────────────────────────────────────────────────────────
// این فایل به توابع jalaliOf / addDays / toPersianDigits نیاز داره.
// اگه از DateBottomSheet.tsx export نشدن، همین‌جا (پایین فایل) یه نسخه‌ی
// مستقل ازشون گذاشتم که وابسته به فایل دیگه‌ای نباشه.
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

function toPersianDigits(n: number | string) {
  const map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(n).replace(/[0-9]/g, (d) => map[parseInt(d, 10)]);
}

// فرمت "۱۴۰۵/۰۶/۲۳" — دقیقاً مثل عکس
function formatSlashDate(date: Date) {
  const p = jalaliOf(date);
  const mm = String(p.month).padStart(2, "0");
  const dd = String(p.day).padStart(2, "0");
  return toPersianDigits(`${p.year}/${mm}/${dd}`);
}

// ─────────────────────────────────────────────────────────────

type Props = {
  checkinDate: Date;
  onClose: () => void;
  onChange: (nights: number, checkoutDate: Date) => void;
  maxNights?: number;
};

export default function DurationBottomSheet({
  checkinDate,
  onClose,
  onChange,
  maxNights = 10,
}: Props) {
  const nights = Array.from({ length: maxNights }, (_, i) => i + 1);

  return (
    <>
      {/* پس‌زمینه — فقط موبایل */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        aria-hidden="true"
      />

      {/* موبایل: شیت از پایین | تبلت به بالا: popover نزدیک دکمه */}
      <div
        dir="rtl"
        className="
          fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl max-h-[70vh] overflow-y-auto scrollbar-thin
          md:absolute md:inset-x-auto md:bottom-auto md:top-full md:right-0 md:mt-2
          md:w-[300px] md:max-h-[360px] md:rounded-2xl md:border md:border-gray-200 md:shadow-xl
        "
      >
        {/* دستگیره — فقط موبایل */}
        <div className="flex justify-center pt-3 pb-2 md:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* لیست شب‌ها */}
        <div className="pb-4">
          {nights.map((n) => {
            const checkoutDate = addDays(checkinDate, n);
            return (
              <button
                key={n}
                type="button"
                onClick={() => onChange(n, checkoutDate)}
                className="
                  w-full flex items-center justify-between
                  px-5 py-4 text-[14px] text-gray-800
                  border-b border-gray-100 last:border-b-0
                  hover:bg-gray-50
                "
              >
                <span>
                  {toPersianDigits(n)} شب
                </span>
                <span className="text-gray-400 text-[13px]">
                  ({formatSlashDate(checkoutDate)})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}