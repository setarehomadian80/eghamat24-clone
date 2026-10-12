import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function AccountPanel({ onClose }: Props) {
  return (
    <main>
      <div
        className="
        bg-white 
        fixed 
        inset-0
        p-4
        "
      >
        <button onClick={onClose}>
          <ArrowRight size={20}/>
        </button>

        {/* register box */}
        <div className="mt-40">
          <Image
            className="object-cover mx-auto my-10"
            src="/logo.svg"
            width={120}
            height={50}
            alt="logo"
          />
          <p className="mb-5! font-bold text-[20px]">ورود / ثبت نام</p>
          <p className="mb-5! text-gray-500">شماره موبایل خود را وارد کنید</p>

          {/* input */}
          <div className="mt-10">
            <p className="text-gray-500 text-[12px] px-2">شماره موبایل</p>
            <input type="text" className="border rounded-[5px] w-full py-3 mt-2" />
          </div>
        </div>
      </div>
    </main>
  );
}
