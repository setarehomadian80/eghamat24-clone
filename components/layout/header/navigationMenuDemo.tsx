"use client";

import * as React from "react";
import Link from "next/link";

import citiesHotel from "@/data/citiesHotel.json";
import citiesAccommodation from "@/data/citiesAccommodation.json";
import citiesTour from "@/data/citiestour.json";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type CityHotel = {
  id: number;
  cityId: number;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
};

type CityAccommodation = {
  id: number;
  cityId: number;
  name: string;
  discount: string;
  slug: string;
  href: string;
};

type TourMenu = {
  id: number;
  cityId: number;
  city: string;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
};

const tourMenu = citiesTour as TourMenu[];
const hotelMenu = citiesHotel as CityHotel[];
const accommodationMenu =
  citiesAccommodation as CityAccommodation[];

const iranCities = hotelMenu.filter(
  (city) => city.type === "iran"
);

const foreignCities = hotelMenu.filter(
  (city) => city.type === "foreign"
);

const iranTours = tourMenu.filter(
  (item) => item.type === "iran"
);

const foreignTours = tourMenu.filter(
  (item) => item.type === "foreign"
);

const flights = [
  { title: "بلیط هواپیما تهران" },
  { title: "بلیط هواپیما مشهد" },
  { title: "بلیط هواپیما تبریز" },
  { title: "بلیط هواپیما اصفهان" },
  { title: "بلیط هواپیما کیش" },
];

const foreignFlights = [
  { title: "بلیط هواپیما استانبول" },
  { title: "بلیط هواپیما تفلیس" },
  { title: "بلیط هواپیما ایروان" },
  { title: "بلیط هواپیما مسقط" },
];

const tickets = [
  {
    title: "تفریحات دبی",
    description: "تخفیف تا 30%",
  },
  {
    title: "تفریحات استانبول",
    description: "تخفیف تا 20 %",
  },
  {
    title: "تفریحات کیش",
    description: "تخفیف تا 40 %",
  },
];

export function NavigationMenuDemo() {
  const [activeHotel, setActiveHotel] = React.useState<
    "internal" | "external"
  >("internal");

  const [activeTour, setActiveTour] = React.useState<
    "internal" | "external"
  >("internal");

  const [activeFlight, setActiveFlight] = React.useState<
    "internal" | "external"
  >("internal");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* رزرو هتل */}
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuTrigger>
            رزرو هتل
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 rounded-2xl bg-white">
              <div className="w-30 border-l py-5 *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveHotel("internal")}
                  className={`cursor-pointer p-2 transition ${
                    activeHotel === "internal"
                      ? "bg-gray-100 text-red-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  هتل های داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveHotel("external")}
                  className={`cursor-pointer p-2 font-medium transition ${
                    activeHotel === "external"
                      ? "bg-gray-100 text-red-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  هتل های خارجی
                </div>
              </div>

              <div className="w-87.5 flex-1 p-6">
                {(activeHotel === "internal"
                  ? iranCities
                  : foreignCities
                ).map((item) => (
                  <NavigationMenuLink
                    key={item.id}
                    render={
                      <Link href={`/hotel/${item.slug}`} />
                    }
                    className="block cursor-pointer rounded-lg p-3 text-[12px] hover:bg-gray-100"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">
                        {item.name}
                      </span>

                      <span className="text-[12px] text-gray-500">
                        {item.discount}
                      </span>
                    </div>
                  </NavigationMenuLink>
                ))}

                <div className="mt-6 text-center">
                  <Link
                    href="#"
                    className="text-[12px] text-blue-600 hover:underline"
                  >
                    مشاهده همه{" "}
                    {activeHotel === "internal"
                      ? "هتل‌های داخلی"
                      : "هتل‌های خارجی"}
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* رزرو اقامتگاه */}
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuTrigger>
            رزرو اقامتگاه
          </NavigationMenuTrigger>

          <NavigationMenuContent className="w-75">
            <div className="w-full p-3">
              {accommodationMenu.map((item) => (
                <NavigationMenuLink
                  key={item.id}
                  render={
                    <Link
                      href={`/accommodation/${item.slug}`}
                    />
                  }
                  className="my-2 w-full cursor-pointer p-3"
                >
                  <div className="flex w-full items-center justify-between text-[12px]">
                    <span className="ml-2">{item.name}</span>

                    <span className="text-gray-500">
                      {item.discount}
                    </span>
                  </div>
                </NavigationMenuLink>
              ))}

              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className="text-[12px] text-blue-600 hover:underline"
                >
                  مشاهده همه اقامتگاه ها
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* رزرو تور */}
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuTrigger>
            رزرو تور
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 rounded-2xl bg-white">
              <div className="w-30 border-l py-5 *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveTour("internal")}
                  className={`cursor-pointer p-2 transition ${
                    activeTour === "internal"
                      ? "bg-gray-100 text-red-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  تور های داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveTour("external")}
                  className={`cursor-pointer p-2 font-medium transition ${
                    activeTour === "external"
                      ? "bg-gray-100 text-red-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  تور های خارجی
                </div>
              </div>

              <div className="w-87.5 flex-1 p-6">
                {(activeTour === "internal"
                  ? iranTours
                  : foreignTours
                ).map((item) => (
                  <NavigationMenuLink
                    key={item.id}
                    render={
                      <Link
                        href="#"
                        onClick={(event) =>
                          event.preventDefault()
                        }
                      />
                    }
                    className="block cursor-pointer rounded-lg p-3 text-[12px] hover:bg-gray-100"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">
                        {item.name}
                      </span>

                      <span className="text-[12px] text-gray-500">
                        {item.discount}
                      </span>
                    </div>
                  </NavigationMenuLink>
                ))}

                <div className="mt-6 text-center">
                  <Link
                    href="#"
                    className="text-[12px] text-blue-600 hover:underline"
                  >
                    مشاهده همه{" "}
                    {activeTour === "internal"
                      ? "تور های داخلی"
                      : "تور های خارجی"}
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* رزرو پرواز */}
        <NavigationMenuItem className="hidden cursor-pointer lg:block">
          <NavigationMenuTrigger>
            رزرو پرواز
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 rounded-2xl bg-white">
              <div className="w-30 border-l py-5 *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveFlight("internal")}
                  className={`cursor-pointer p-2 transition ${
                    activeFlight === "internal"
                      ? "bg-gray-100 text-red-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  پرواز داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveFlight("external")}
                  className={`cursor-pointer p-2 font-medium transition ${
                    activeFlight === "external"
                      ? "bg-gray-100 text-red-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  پرواز خارجی
                </div>
              </div>

              <div className="w-87.5 flex-1 p-6">
                {(activeFlight === "internal"
                  ? flights
                  : foreignFlights
                ).map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="
                      block w-full cursor-pointer
                      rounded-lg p-3 text-start
                      text-[12px] hover:bg-gray-100
                    "
                  >
                    <span className="font-medium">
                      {item.title}
                    </span>
                  </button>
                ))}

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="cursor-pointer text-[12px] text-blue-600 hover:underline"
                  >
                    مشاهده همه{" "}
                    {activeFlight === "internal"
                      ? "پروازهای داخلی"
                      : "پروازهای خارجی"}
                  </button>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* بلیط تفریحات */}
        <NavigationMenuItem className="hidden cursor-pointer lg:block">
          <NavigationMenuTrigger>
            بلیط تفریحات
          </NavigationMenuTrigger>

          <NavigationMenuContent className="w-75">
            <div className="w-full p-3">
              {tickets.map((item) => (
                <NavigationMenuLink
                  key={item.title}
                  className="my-2 w-full cursor-pointer p-3"
                >
                  <div className="flex w-full items-center justify-between text-[12px]">
                    <span className="ml-2">{item.title}</span>

                    <span className="text-gray-500">
                      {item.description}
                    </span>
                  </div>
                </NavigationMenuLink>
              ))}

              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className="text-[12px] text-blue-600 hover:underline"
                >
                  مشاهده همه تفریحات
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* بیشتر */}
        <NavigationMenuItem className="hidden cursor-pointer xl:block">
          <NavigationMenuTrigger>
            بیشتر
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[200px] **:my-2">
              <li>
                <NavigationMenuLink
                  render={
                    <Link
                      href="#"
                      className="flex-row items-center gap-2"
                    >
                      درباره ما
                    </Link>
                  }
                />

                <NavigationMenuLink
                  render={
                    <Link
                      href="#"
                      className="flex-row items-center gap-2"
                    >
                      تماس با ما
                    </Link>
                  }
                />

                <NavigationMenuLink
                  render={
                    <Link
                      href="#"
                      className="flex-row items-center gap-2"
                    >
                      مجله اقامت 24
                    </Link>
                  }
                />

                <NavigationMenuLink
                  render={
                    <Link
                      href="#"
                      className="flex-row items-center gap-2"
                    >
                      آژانس و سازمان ها
                    </Link>
                  }
                />

                <NavigationMenuLink
                  render={
                    <Link
                      href="#"
                      className="flex-row items-center gap-2"
                    >
                      ثبت هتل و اقامتگاه
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
