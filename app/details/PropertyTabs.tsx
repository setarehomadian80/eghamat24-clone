export default function DetailTabs() {
  return (
    <div className="w-full max-w-full overflow-hidden! mt-6 md:hidden">
      <div
        className="
          flex
          w-full
          max-w-full
          overflow-x-scroll
          overflow-y-hidden
          gap-2
          h-10
          border-b-2
         scrollbar-none
        "
      >
        <div
          className="flex
         w-max 
         text-[12px]
         *:w-[100px]
         *:shrink-0
         *:text-center
         *:rounded-2xl
         *:cursor-pointer
         *:text-gray-600
         "
        >
          <span>درباره هتل</span>

          <span>اتاق ها</span>

          <span>قوانین</span>

          <span>نقشه</span>

          <span>نظرات</span>

          <span>پرسش و پاسخ</span>
        </div>
      </div>
    </div>
  );
}
