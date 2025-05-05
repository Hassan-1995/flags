import React from "react";
import ShoppingCard from "../components/ShoppingCard";

const PakistanFlags = () => {
  const PakistanFlagsWithRangePrice = [
    {
      href: "/Shop/1",
      imageSrc: "/Pakistan_Flag.png",
      title: "Pakistan Flag Digital Printed – Without Stand",
      price: { min: 400, max: 5700 },
    },
    {
      href: "/Shop/2",
      imageSrc: "/Pakistan_Flag_Hard_Finish_With_Stand.png",
      title: "Pakistan Flag Digital Printed Hard Finish – With Stand",
      price: { min: 400, max: 5700 },
    },
    {
      href: "/Shop/3",
      imageSrc: "/Pakistan_Flag_Hard_Finish_Without_Stand.png",
      title: "Pakistan Flag Digital Printed Hard Finish – Without Stand",
      price: { min: 400, max: 5700 },
    },
    {
      href: "/Shop/4",
      imageSrc: "/Pakistan_Table_Flag_Marble.png",
      title: "Pakistan Table Flag Stand Marble Base",
      price: { min: 400, max: 5700 },
    },
    {
      href: "/Shop/5",
      imageSrc: "/Pakistan_Table_Flag_Steel.png",
      title: "Pakistan Table Flag Stand Steel Base",
      price: 400,
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Pakistan Flags</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PakistanFlagsWithRangePrice.map((product, index) => (
          <ShoppingCard
            key={index}
            href={product.href}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PakistanFlags;
