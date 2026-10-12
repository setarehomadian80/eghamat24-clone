import { ArrowLeftRight } from "lucide-react";
import { MobileNavCityName } from "../NavMobile/MobileNavCityName";
import MyDatePicker from "../button/DatePicker";
import { useState } from "react";
import MobileStayOptionsFlight from "../NavMobile/MobileStayOptionsFlight";
import DesktopNavCityName from "../NavDesktop/DesktopNavCityName";
import DesktopStayOptionsFlight from "../NavDesktop/DesktopStayOptionsFlight";

export default function FlightSearchForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const swapCity = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  return (
    <div
      className="p-5 grid grid-cols-1 gap-5
     md:grid-cols-2 lg:grid-cols-4 *:rounded-[12px]"
    >
      {/* city */}
      <div className="relative flex md:hidden">
        <MobileNavCityName
          placeholder="شهر مبدا"
          searchPlaceholder="جستجوی شهر "
          title="شهر مبدا"
          className="rounded-tl-0! text-[12px] 
          rounded-br-[12px] rounded-tr-[12px]"
          value={origin}
          onChange={setOrigin}
        />
        <button
          onClick={swapCity}
          className="absolute z-5 border
         rounded-full left-1/2 top-1/2
         -translate-x-1/2 -translate-y-1/2 bg-white
         p-1
         "
        >
          <ArrowLeftRight />
        </button>
        <MobileNavCityName
          placeholder="شهر مقصد"
          searchPlaceholder="جستجوی شهر "
          title="شهر مقصد"
          className="pr-8 text-[12px] 
           rounded-bl-[12px] rounded-tl-[12px]"
          value={destination}
          onChange={setDestination}
        />
      </div>
       {/* desktop city*/}
            <div className=" hidden md:flex">
              <DesktopNavCityName
                placeholder="شهر مبدا"
                value={origin}
                onChange={setOrigin}
                dropdownWidth="350px"
                borderRadius="0 12px 12px 0"
              />
              <div className="relative">
                 <button
                onClick={swapCity}
                className="absolute z-5 border
               rounded-full left-1/2 top-1/2
               -translate-x-1/2 -translate-y-1/2 bg-white
               p-1
               "
              >
                <ArrowLeftRight />
              </button>
              </div>
             
              <DesktopNavCityName
                placeholder="شهر مقصد"
                value={destination}
                onChange={setDestination}
                dropdownWidth="350px"
                  borderRadius="12px 0 0 12px"
              />
            </div>
      {/* date */}
      <div className="flex">
        <MyDatePicker className="rounded-[12px]" />      
         </div>
      <div className="md:hidden">
        <MobileStayOptionsFlight />
      </div>
       <div className="hidden md:flex">
        <DesktopStayOptionsFlight />
      </div>
      {/* button */}
      <button
        className="text-white text-[12px]
         bg-[#ea363d] w-full p-4"
      >
        جستجوی تور
      </button>
    </div>
  );
}
