import MobileNavCityActivities from "../NavMobile/MobileNavCityActivities"
import DesktopNavActivities from '../NavDesktop/DesktopNavCityActivities'

export default function ActivitiesSearchForm() {
  return (
     <div
      className="p-5 grid grid-cols-1 gap-5
     md:grid-cols-2 lg:grid-cols-4 *:rounded-[12px]"
    >
      {/* city */}
      <div className="relative flex md:hidden">
        <MobileNavCityActivities
          placeholder="شهر مبدا"
          searchPlaceholder="جستجوی شهر "
          title="شهر مبدا"
          className="rounded-tl-0! text-[12px] 
          rounded-br-[12px] rounded-tr-[12px]"
        />
      </div>
      <div className='hidden md:flex lg:col-span-3'>
        <DesktopNavActivities />
      </div>
      {/* button */}
      <button
        className="text-white text-[12px]
         bg-[#ea363d] w-full p-4 lg:col-span-1"
      >
        جستجوی تفریح
      </button>
    </div>
  )
}
