import Image from "next/image";
import Link from "next/link";

export default function BannerLeft() {
  return (
    <main className="h-full w-full">
      <div
        className="flex flex-col
         justify-between items-end h-full"
      >
        <Link 
          href="#"
          className="relative w-full h-23 lg:h-26 xl:h-34"
        >
          <Image
            src="/banners/ارزان-مشهد.jpg"
            fill
            alt="2Banner"
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>

        <Link 
          href="#"
          className="relative w-full h-23 lg:h-26 xl:h-34"
        >
          <Image
            src="/banners/اقامتگاه-های-شمال.jpg"
            fill
            alt="2Banners"
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      </div>
    </main>
  );
}