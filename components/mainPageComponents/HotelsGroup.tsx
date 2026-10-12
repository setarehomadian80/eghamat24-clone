import Image from "next/image";

const hotels = [
  {
    id: 1,
    image: "/hotelsGroup/accor.jpg",
  },
  {
    id: 2,
    image: "/hotelsGroup/almas.jpg",
  },
  {
    id: 3,
    image: "/hotelsGroup/arya.jpg",
  },
  {
    id: 4,
    image: "/hotelsGroup/espinas.jpg",
  },
  {
    id: 5,
    image: "/hotelsGroup/ghasr.jpg",
  },
  {
    id: 6,
    image: "/hotelsGroup/helia.jpg",
  },
  {
    id: 7,
    image: "/hotelsGroup/parsian.jpg",
  },
  {
    id: 8,
    image: "/hotelsGroup/homa.jpg",
  },
  {
    id: 9,
    image: "/hotelsGroup/sorinet.jpg",
  },
  {
    id: 10,
    image: "/hotelsGroup/jahangardi.jpg",
  },
  {
    id: 11,
    image: "/hotelsGroup/kosar.jpg",
  },
  {
    id: 12,
    image: "/hotelsGroup/laleh.jpg",
  },
  {
    id: 13,
    image: "/hotelsGroup/mehr.jpg",
  },
  {
    id: 14,
    image: "/hotelsGroup/melal.jpg",
  },
  {
    id: 15,
    image: "/hotelsGroup/pars.jpg",
  },
];

export default function HotelsGroup() {
  return (
    <section>
        <h1 className="mb-5 text-lg font-bold">گروه هتل ها</h1>
      {/* Mobile */}
      <div className="flex gap-4 overflow-x-auto pb-2 md:hidden">
        
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="relative w-37.5 h-20 shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={hotel.image}
              alt="هتل"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        ))}
      </div>

      {/* Tablet & Desktop */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="relative w-37.5 h-20 justify-self-center overflow-hidden rounded-xl"
          >
            <Image
              src={hotel.image}
              alt="هتل"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}