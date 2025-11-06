"use client";
import Image from "next/image";
import Link from "next/link";

const tableFlags = [
  {
    title: "Table Flag Wooden base with Matte-Finish Flag",
    price: 400,
    image: "/Table Flag Wooden base with Matte-Finish Flag_02.png",
    description:
      "Flag size 6-inch x 9-inch in TopTex Fabric. \n Wooden base Steel Rod and Metal Top",
  },
  {
    title: "Table Flag Double 'T' Stand",
    price: 2500,
    image: "/Table FLag Double 'T' Stand_01.png",
    description: "Available in Marble and Steel base.",
  },
  {
    title: "Table Flags Double Stand",
    price: 2200,
    image: "/Table Flags Double Stand_02.png",
    description:
      "Available in Onyx Marble and Stainless Steel base with Stainless Steel Rods and Brass Top. Flag Size 6-inch x 9-inch. Digital Print on 150 GSM imported Satin",
  },
  {
    title: "Table Flag Pakistan — Small Marble base",
    price: 600,
    image: "/Table Flag Pakistan — Small Marble base_02.png",
    description:
      "Pakistan flag size 6-inch x 9-inch. Digital Sublimation printed on 150 GSM imported satin. Stainless steel Rod with onyx marble diameter 2.75-inch base and Metal top.Total height about 12-inch",
  },
  {
    title: "Table Flag Pakistan — Big Marble base",
    price: 1050,
    image: "/Table Flag Pakistan — Big Marble base_01.png",
    description:
      "Pakistan Flag Digital Sublimation printed on 150 GSM imported satin. Stainless Steel Rod with Onyx Marble Base  diameter 3.75-inc  and Brass top and Brass bottom ring. Total height 14-inch",
  },
  {
    title: "Table Flag Pakistan — Steel base",
    price: 1050,
    image: "/Table Flag Pakistan — Steel base_02.png",
    description:
      "Pakistan Flag size 6-inch x 9-inch. Digital Sublimation printed on 150 GSM imported satin. Stainless Steel Rod with Stainless Steel base. Diameter 3 75-inch and Brass top and Brass bottom ring .Total height 13.75-inch",
  },
  {
    title: "Table Flag Customised — Small Marble",
    price: 600,
    image: "/Table Flag Customised — Small Marble_01.png",
    description:
      "Customized flag size 6-inch x 9-inch (Design As per PDF file from customer) Digital Sublimation printed on 150 GSM imported satin. Stainless Steel Rod with Onyx Marble diameter 2.75-inch base and Metal top.Total height about 12-inch",
  },
  {
    title: "Table  Flags Triple — Marble & Steel Base",
    price: 3000,
    image: "/Table Flags Triple — Marble & Steel Base_02.png",
    description:
      "Base of Onyx Marble or Stainless Steel with Stainless Steel Rods and Brass Top. Flags Size 6-inch x 9-inch. Digital Print on 150 GSM imported Satin",
  },
];

const TableFlagsCatalog = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-0 md:px-10 py-10">
      {/* Header */}
      <div className="text-center md:text-left mb-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-700 tracking-tight mb-3">
          Table Flags
        </h1>
        <p className="text-gray-600 text-xs md:text-base">
          Elegant table flags designed for offices, events, and gifting —
          crafted to bring pride and personality to every desk.
        </p>
        {/* <div className="w-24 h-1 bg-emerald-500 rounded-full mt-5"></div> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        {tableFlags.map((flag, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 overflow-hidden flex flex-col border border-emerald-100"
          >
            {/* <div className="relative w-full h-56 bg-emerald-50"> */}
            <div className="relative w-full h-56 bg-white flex items-center justify-center overflow-hidden">
              <Image
                src={flag.image || "/placeholder.png"}
                alt={flag.title}
                fill
                // className="object-cover group-hover:scale-105 transition-transform duration-300"
                className="object-contain group-hover:scale-105 transition-transform duration-300 "
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

export default TableFlagsCatalog;
