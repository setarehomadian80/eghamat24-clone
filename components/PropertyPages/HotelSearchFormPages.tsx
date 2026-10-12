
import DesktopNavCityName from "../mainPageComponents/SearchBox/NavDesktop/DesktopNavCityName";
import CityNameSearchbox from "../mainPageComponents/SearchBox/button/cityNameSearchbox";
import MyDatePicker from "../mainPageComponents/SearchBox/button/DatePicker";
import DesktopNavNight from "../mainPageComponents/SearchBox/NavDesktop/DesktopNavNight";
import { Night } from "../mainPageComponents/SearchBox/button/NightTime";


export default function HotelSearchFormPages() {
  return (
    <div
      className="grid grid-cols-1
     md:grid-cols-2 lg:grid-cols-4
      gap-5 *:rounded-[12px] p-5"
    >
      <div className="md:hidden">
        <CityNameSearchbox />
      </div>
      <div className="hidden md:flex">
        <DesktopNavCityName
          placeholder="نام شهر"
          dropdownWidth="100%"
          borderRadius="12px"
        />
      </div>

      <MyDatePicker className="rounded-[12px]" />
      {/* night */}
      <div className="md:hidden">
        <Night />
      </div>
      <div className="hidden md:flex">
        <DesktopNavNight />
      </div>

      <button className="text-white text-[12px] bg-[#ea363d] w-full p-4">
        جستجوی 
      </button>
    </div>
  );
}
