"use client";
import SearchBoxMainPage from "../components/mainPageComponents/SearchBox/box/searchBoxMainPage";
import HeroBanner from "@/components/mainPageComponents/HeroBanner/HeroBanner";
import BannerLeft from "@/components/mainPageComponents/HeroBanner/BannerLeft";
import IranianHotelSlider from "@/components/mainPageComponents/IranianHotel";
import CanseledHotel from "@/components/mainPageComponents/CanseledHotel";
import TopHotels from "@/components/mainPageComponents/TopHotels";
import TopDiscountHotels from "../components/mainPageComponents/TopDiscountHotel";
import StatsSection from "../components/mainPageComponents/StatsSection";
import Blog from "@/components/mainPageComponents/Blog";
import Banner from "@/components/mainPageComponents/Banner";
import HotelsGroup from "@/components/mainPageComponents/HotelsGroup";
import FAQDropdown from "@/components/mainPageComponents/FaqSection";
import HotelInformation from "@/components/mainPageComponents/HotelInformation";

export default function Home() {
  return (
    <main className="w-full 2xl:container mx-auto">
      <div className="w-full py-5 px-5 lg:px-14 ">
        {/* text */}
        <div>
          <h1 className="text-[16px] md:text-[24px] font-bold mb-5">
            رزرو هتل و هتل آپارتمان
          </h1>
          <p className="text-[10px] md:text-[16px] font-medium">
            اولین ارائه دهنده رسمی خدمات تخصصی رزرواسیون هتل و هتل آپارتمان در
            کشور
          </p>
        </div>
        {/* search box */}
        <div className="mt-12">
          <SearchBoxMainPage />
        </div>
        {/* Hero Banner */}
        <div
          className="mt-12 md:grid
         md:grid-cols-6
         md:gap-4"
        >
          <div className="col-span-4">
            <HeroBanner />
          </div>
          <div className="hidden md:block col-span-2">
            <BannerLeft />
          </div>
        </div>
        {/* IranianHotelSlider */}
        <div className="mt-24">
          <IranianHotelSlider />
        </div>
        {/* CanseledHotel box*/}
        <div className="mt-24">
          <CanseledHotel />
        </div>
        {/* top hotels */}
        <div className="mt-24">
          <TopHotels />
        </div>

        {/* top discount hotels */}
        <div className="mt-24">
          <TopDiscountHotels />
        </div>
          <div className="mt-24">
          <StatsSection />
        </div>
         <div className="mt-24">
          <Blog />
        </div>
        <div className="mt-24">
          <Banner />
        </div>
         <div className="mt-24">
          <HotelsGroup />
        </div>
        <div className="mt-24">
          <FAQDropdown />
        </div>
        <div className="mt-24">
          <HotelInformation />
        </div>
        
      </div>
    </main>
  );
}
