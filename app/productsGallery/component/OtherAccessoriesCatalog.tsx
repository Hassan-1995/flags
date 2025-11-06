"use client";
import Image from "next/image";
import Link from "next/link";

const otherAccessories = [
  {
    title: "Buntings",
    price: 35,
    image: "/Buntings_01.png",
    description:
      "6-inch x 9-inch sublimation printed on light polyester fabric and Stitched on a strong ribbon with 6-inch space between 2 flags (35 Rupees per flag for bulk order)",
  },

  {
    title: "Car Dashboard double flags",
    price: 500,
    image: "/Car Dashboard double flags_01.png",
    description:
      "This small double flags stand is designed for car dashboards. Flag size is 2-inch x 3-inch digital sublimation printed on 150 GSM satin 2-ply. The stand is made of aluminum. The base can stick with double sided tape on car dashboard.",
  },
  {
    title: "Hand flags",
    price: 100,
    image: "/Hand flags_01.png",
    description:
      "6 inch x 9 inch Flag is printed on light polyester Malai single with straw stick.",
  },
  {
    title: "Embroidered/Applique flags (Manual)",
    price: 0,
    image: "/Embroidered_Applique flags_Manual_01.png",
    description: "",
  },
  {
    title: "Tear drop flag/ Feather flag / Expo flags",
    price: 0,
    image: "/Tear drop flag_feather flag_Expo flags_03.png",
    description: "Imported foldable flexible stands",
  },
  {
    title: "Customized Hosting flag",
    price: 190,
    image: "/Customized Hosting flag_01.png",
    description: "Rs 190/sq ft",
  },
  {
    title: "Political Customized flags",
    price: 250,
    image: "/Political Customized flags_02.png",
    description:
      "Size  2-inch x 3-inch. For short quantities urgent printing. Minimum quantity 100 pieces only Digital Sublimation printing on light Polyester fabric.",
  },
  {
    title: "Tilla Work Flag",
    price: 15000,
    image: "/Tilla Work Flag_01.png",
    description: "Size 3-feet x 5-feet.",
  },
];

const OtherAccessoriesCatalog = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-0 md:px-10 py-10">
      {/* Header */}
      <div className="text-center md:text-left mb-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-700 tracking-tight mb-3">
          Other Accessories
        </h1>
        <p className="text-gray-600 text-xs md:text-base">
          Explore our exclusive range of flag accessories — from stands to
          mounts, made to complement your display with style.
        </p>
        {/* <div className="w-24 h-1 bg-emerald-500 rounded-full mt-5"></div> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        {otherAccessories.map((accessory, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 overflow-hidden flex flex-col border border-emerald-100"
          >
            <div className="relative w-full h-56 bg-emerald-50">
              <Image
                src={accessory.image || "/placeholder.png"}
                alt={accessory.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-emerald-700 mb-1">
                {accessory.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3 line-clamp-3 whitespace-pre-line">
                {accessory.description}
              </p>

              <p className="text-emerald-700 font-semibold text-sm mb-5">
                Rs {accessory.price.toLocaleString()}
              </p>

              <Link
                href="#"
                className="mt-auto bg-emerald-600 text-white text-center font-medium py-2.5 rounded-lg hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherAccessoriesCatalog;
