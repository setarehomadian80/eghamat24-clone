"use client";

type Props = {
  onClose: () => void;
};

export default function OrderTracking({ onClose }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-59 bg-black/30 "
      />
      <main
        dir="rtl"
        className="
        fixed
         bg-white 
         bottom-0! 
         left-0 
         z-60 
         w-full 
         h-50 
         p-5
         rounded-tl-2xl
         rounded-tr-2xl
         "
      >
        <div className="max-w-md mx-auto relative">
          <h1 className="text-[16px] font-bold mb-5">کد پیگیری رزرو</h1>

          <input
            type="text"
            placeholder="کد پیگیری رزرو"
            className="
          w-full
          h-12
          rounded-lg
          border
          border-[#E5E7EB]
          px-3
          text-[13px]
          text-gray-700
          outline-none
          focus:border-[#fb3733]
          "
          />

          <button
            onClick={onClose}
            className="
          mt-4
          w-full
          h-12
          rounded-lg
          bg-[#fb373e]
          text-white
          text-[14px]
          font-bold
          "
          >
            مشاهده
          </button>
        </div>
      </main>
    </>
  );
}
