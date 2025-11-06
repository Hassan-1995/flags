"use client";
import Image from "next/image";
import Link from "next/link";

const executiveFlags = [
  {
    title: "Executive Flags without Stand",
    price: 10000,
    image: "/Executive Flags without Stand_01.png",
    description:
      "Flag is made of processed  150 GSM imported Satin Size of flag 3-inch x 5-inch High-quality Fusing. Both sides printed - Front side pasted inner side loose",
  },
  {
    title: "Premium Turkish Model Flags without Stand",
    price: 18000,
    image: "/Premium Turkish Model Flags without Stand_04.png",
    description:
      "Premium Exective flags 3-ft x 5-ft Turkish Model Fabric - No edges stiching Matte finish One side printed Single ply",
  },
  {
    title: "Wooden base indoor flag Stand",
    price: 25000,
    image: "/Wooden base indoor flag Stand_01.png",
    description:
      "Pole is completely made of Stainless Steel Taiwan 304 with Wooden base. The height of the stand is approximately 8-feet. Diveded in 4 pec of steel pipes, which are connected with steel joints. Packed in small carton. Very easy to assemble .",
  },
  {
    title: "Marble Base Stainless Steel Indoor Stand office flag pole",
    price: 15500,
    image: "/Marble Base Stainless Steel Indoor Stand office flag pole_01.png",
    description:
      "Pole is completely made  of Stainless Steel Taiwan 304 with Marble base. The height of stand is approximately 7.75-feet.Diveded in 4 pec of steel pipes, which are connected with steel joints. Packed in small carton . Very easy to assemble. Weight of stand is approximate 15 Kgs",
  },
  {
    title: "Golden Stainless Steel base indoor stand office flag pole",
    price: 21000,
    image: "/Golden Stainless Steel base indoor stand office flag pole_01.png",
    description: "",
  },
  {
    title: "Stainless Steel Base Silver Indoor stand office flag pole",
    price: 18500,
    image: "/Stainless Steel Base Silver Indoor stand office flag pole_01.png",
    description:
      "Pole is completely made of Stainless Steel Taiwan 304 with Stainless Steel base. The height of the stand is approximately 8 feet. Diveded in 4 pieces of steel pipes, which are connected with steel joints. Packed in small carton. Very easy to assemble. Weight of stand is approximately 18 kg",
  },
];

const ExecutiveFlagsCatalog = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-0 md:px-10 py-10">
      {/* Header */}
      <div className="text-center md:text-left mb-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-700 tracking-tight mb-3">
          Executive Flags
        </h1>
        <p className="text-gray-600 text-xs md:text-base">
          Premium executive flags that elevate professionalism — ideal for
          offices, conferences, and formal displays.
        </p>
        {/* <div className="w-24 h-1 bg-emerald-500 rounded-full mt-5"></div> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        {executiveFlags.map((flag, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 overflow-hidden flex flex-col border border-emerald-100"
          >
            <div className="relative w-full h-56 bg-emerald-50">
              <Image
                src={flag.image || "/placeholder.png"}
                alt={flag.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-emerald-700 mb-1">
                {flag.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3 line-clamp-3 whitespace-pre-line">
                {flag.description}
              </p>

              <p className="text-emerald-700 font-semibold text-sm mb-5">
                Rs {flag.price.toLocaleString()}
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

export default ExecutiveFlagsCatalog;
