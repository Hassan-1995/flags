"use client";
import DropDownBox from "@/app/components/DropDownBox";
import { notFound, useParams, useSearchParams } from "next/navigation";
import ShowPakistanFlag from "./ShowPakistanFlag";
import ShowWorldFlag from "./ShowWorldFlag";
import { sizeOptionsMap } from "./size";
import Button from "@/app/components/Button";

const ProductDetailPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const imageSrc = searchParams.get("imageSrc");
  const description = searchParams.get("description");
  const price = searchParams.get("price");
  const sizeOptionKey = searchParams.get("sizeOption");
  const worldFlag = searchParams.get("worldFlag");

  if (!params.id) {
    notFound();
  }

  const sizeOptionToUse =
    sizeOptionsMap[sizeOptionKey as keyof typeof sizeOptionsMap];

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
            <DropDownBox title={"Pick a Flag Size"} options={sizeOptionToUse} />
          </div>
          <div className="flex justify-end-safe">
            <Button
              text="Buy Now"
              size="md"
              textColor="text-white"
              bgColor="bg-green-600"
              hoverColor="hover:bg-zinc-400"
              onClick={() => alert("Medium clicked")}
              //   href="/"
            />
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
