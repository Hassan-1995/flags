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

  // if (!localStorage.getItem("cart")) {
  //   localStorage.setItem("cart", JSON.stringify([]));
  // }

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

  // let cart = JSON.parse(localStorage.getItem("cart") || "[]");
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
        image: (worldFlag == "true" ? countryCode : imageSrc) ?? "",
        price: cost!,
        size: dimension!,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart); // update state

    console.log(newCart);
    setTimeout(() => setShowAdded(false), 3000);
  };

  return (
    <div className="px-4 md:px-20 py-10 max-w-screen  bg-zinc-100">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0 lg:w-[50%]">
          {worldFlag === "true" ? (
            <ShowWorldFlag
              title={title!}
              sendFlagCode={(flag) => setCountryCode(flag)}
            />
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
            <DropDownBox
              title={"Pick a Flag Size"}
              options={sizeOptionToUse}
              sendSize={handleSize}
            />
          </div>
          <div className="flex flex-col items-end space-y-2 h-12 justify-center">
            <h1
              className={`text-green-600 text-lg font-bold transition-opacity duration-300 ${
                showAdded ? "opacity-100 animate-bounce" : "opacity-0"
              }`}
            >
              Added!
            </h1>
            <div
              className={`${
                showAdded ? "opacity-0 pointer-events-none" : "opacity-100"
              } transition-opacity duration-300 absolute`}
            >
              <Button
                text="Buy Now"
                size="md"
                textColor="text-white"
                bgColor="bg-green-600"
                hoverColor="hover:bg-zinc-400"
                onClick={handleAddToCart}
              />
            </div>
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
