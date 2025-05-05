"use client";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

const allProducts = [
  {
    id: "1",
    imageSrc: "/Pakistan_Flag.png",
    title: "Pakistan Flag Digital Printed – Without Stand",
    description: "High-quality digital printed flag without a stand.",
    price: { min: 400, max: 5700 },
  },
  {
    id: "2",
    imageSrc: "/Pakistan_Flag_Hard_Finish_With_Stand.png",
    title: "Pakistan Flag Digital Printed Hard Finish – With Stand",
    description: "Premium hard finish flag with sturdy stand.",
    price: { min: 400, max: 5700 },
  },
  {
    id: "3",
    imageSrc: "/Pakistan_Flag_Hard_Finish_Without_Stand.png",
    title: "Pakistan Flag Digital Printed Hard Finish – Without Stand",
    description: "Hard finish flag for display without base.",
    price: { min: 400, max: 5700 },
  },
  {
    id: "4",
    imageSrc: "/Pakistan_Table_Flag_Marble.png",
    title: "Pakistan Table Flag Stand Marble Base",
    description: "Elegant marble-based table flag.",
    price: { min: 400, max: 5700 },
  },
  {
    id: "5",
    imageSrc: "/Pakistan_Table_Flag_Steel.png",
    title: "Pakistan Table Flag Stand Steel Base",
    description: "Sleek steel base flag stand.",
    price: 400,
  },
];

const ProductDetailPage = () => {
  const params = useParams(); // Access the params asynchronously
  const product = allProducts.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-4 py-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0 w-full lg:w-[50%]">
          <Image
            src={product.imageSrc}
            alt={product.title}
            width={500}
            height={500}
            priority
            className="object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
          <p className="text-base sm:text-lg text-gray-700">
            {product.description}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-green-700">
            Price:{" "}
            {typeof product.price === "object"
              ? `Rs. ${product.price.min} - Rs. ${product.price.max}`
              : `Rs. ${product.price}`}
          </p>
          <hr className="border-t border-gray-300" />
          <p className="text-sm sm:text-base text-slate-600 leading-loose">
            ✅ 100% Original product <br />
            💸 Cash on delivery available <br />
            🔄 Easy return/exchange within 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
