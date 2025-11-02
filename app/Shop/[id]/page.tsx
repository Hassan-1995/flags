"use client";
import DropDownBox from "@/app/components/DropDownBox";
import { notFound, useParams, useSearchParams } from "next/navigation";
import ShowPakistanFlag from "./ShowPakistanFlag";
import ShowWorldFlag from "./ShowWorldFlag";
import { sizeOptionsMap } from "./size";
import Button from "@/app/components/Button";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};

const ProductDetailPage = () => {
  const [cost, setCost] = useState<number | undefined>();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [dimension, setDimension] = useState<string | undefined>();
  const [countryCode, setCountryCode] = useState("");
  const [showAdded, setShowAdded] = useState(false);

  const params = useParams();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const imageSrc = searchParams.get("imageSrc");
  const description = searchParams.get("description");
  const price = searchParams.get("price");
  const sizeOptionKey = searchParams.get("sizeOption");
  const worldFlag = searchParams.get("worldFlag");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  if (!params.id) {
    notFound();
    return null;
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

  const handleSize = (item: { key: string; value: string; price: number }) => {
    setCost(item.price);
    setDimension(item.value);
  };

  const handleAddToCart = () => {
    setShowAdded(true);

    const newCart = [...cart];
    const existingItem = newCart.find((item) => String(item.id) === params.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({
        id: String(params.id),
        name: title ?? "",
        image:
          (worldFlag == "true"
            ? `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`
            : imageSrc) ?? "",
        price: cost!,
        size: dimension!,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);

    setTimeout(() => setShowAdded(false), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-12 px-4 md:px-5 min-h-screen">
      <div className="w-full flex flex-col lg:flex-row gap-10 bg-white shadow-md rounded-3xl p-6 md:p-10">
        {/* Image / Flag Section */}
        <div className="flex-shrink-0 lg:w-[50%] flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden">
          {worldFlag === "true" ? (
            <ShowWorldFlag
              title={title!}
              sendFlagCode={(flag) => setCountryCode(flag)}
            />
          ) : (
            <ShowPakistanFlag image={imageSrc!} title={title!} />
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 leading-tight">
            {title}
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          <p className="text-2xl md:text-3xl font-bold text-green-600">
            {typeof finalPrice === "object"
              ? `Rs. ${finalPrice.min} - Rs. ${finalPrice.max}`
              : `Rs. ${finalPrice}`}
          </p>

          <div className="border-t border-gray-300 my-4"></div>

          <div>
            <DropDownBox
              title={"Pick a Flag Size"}
              options={sizeOptionToUse}
              sendSize={handleSize}
            />
          </div>

          {/* Buy Now Section */}
          <div className="relative flex flex-col items-end justify-center mt-8 h-16">
            <h1
              className={`text-green-600 text-xl font-bold transition-all duration-300 ${
                showAdded ? "opacity-100 animate-bounce" : "opacity-0"
              }`}
            >
              ✅ Added to Cart!
            </h1>

            <div
              className={`transition-opacity duration-300 ${
                showAdded ? "opacity-0 pointer-events-none" : "opacity-100"
              } absolute`}
            >
              <Button
                text="Buy Now"
                textColor="text-white"
                bgColor="bg-green-900"
                hoverColor="hover:bg-white hover:text-green-900"
                onClick={handleAddToCart}
              />
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="bg-green-50 p-4 rounded-xl">
            <p className="text-sm sm:text-base text-slate-700 leading-loose">
              ✅ 100% Original Product <br />
              💸 Cash on Delivery Available <br />
              🔄 Easy Returns & Exchanges within 7 Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
