"use client";
import DropDownBox from "@/app/components/DropDownBox";
import Image from "next/image";
import { notFound, useParams, useSearchParams } from "next/navigation";
import ShowPakistanFlag from "./ShowPakistanFlag";
import ShowWorldFlag from "./ShowWorldFlag";

const ProductDetailPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const imageSrc = searchParams.get("imageSrc");
  const description = searchParams.get("description");
  const price = searchParams.get("price");
  const worldFlag = searchParams.get("worldFlag");

  const sizeOptions = [
    { key: "1", value: "36 x 56 inch", price: 5700 },
    { key: "2", value: "24 x 36 inch", price: 2300 },
    { key: "3", value: "6 x 9 inch", price: 400 },
  ];

  if (!params.id) {
    notFound();
  }

  let finalPrice;
  try {
    finalPrice =
      typeof price === "string" && price.includes("{")
        ? JSON.parse(price)
        : Number(price);
  } catch {
    finalPrice = null;
  }

  return (
    <div className="px-4 py-10 max-w-screen-xl bg-zinc-100">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0 lg:w-[50%]">
          {worldFlag === "true" ? (
            <ShowWorldFlag title={title!} />
          ) : (
            <ShowPakistanFlag image={imageSrc!} title={title!} />
          )}
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <p className="text-base sm:text-lg text-gray-700">{description}</p>
          <p className="text-xl sm:text-2xl font-bold text-green-700">
            Price:{" "}
            {typeof finalPrice === "object"
              ? `Rs. ${finalPrice.min} - Rs. ${finalPrice.max}`
              : `Rs. ${finalPrice}`}
          </p>
          <hr className="border-t border-gray-300" />
          <div>
            <DropDownBox title={"Pick a Flag Size"} options={sizeOptions} />
          </div>
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
