"use client";
import { useEffect, useState } from "react";
import CartContent from "./CartContent";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};
const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  console.log(cart);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b">
        <div className="flex items-center gap-4 w-full sm:w-1/3 lg:w-1/4">
          <div className="relative w-28 flex-shrink-0 rounded overflow-hidden">
            <h1 className="text-zinc-600 font-semibold">Image</h1>
          </div>
          <h1 className="text-zinc-600 font-semibold">Title</h1>
        </div>
        <h1 className="text-zinc-600 font-semibold w-1/4 sm:w-1/6 text-center">
          Quantity
        </h1>
        <h1 className="text-zinc-600 font-semibold w-1/4 sm:w-1/6 text-center">
          Price
        </h1>
        <h1 className="text-zinc-600 font-semibold w-1/4 sm:w-1/6 text-center">
          Size
        </h1>
        <h1 className="text-zinc-800 font-semibold w-full sm:w-1/6 lg:w-1/6 text-right sm:text-center">
          Total
        </h1>
      </div>

      {cart.map((item, index) => (
        <CartContent
          key={index}
          image={item.image}
          title={item.name}
          price={item.price}
          size={item.size}
          quantity={item.quantity}
        />
      ))}
    </>
  );
};

export default CartPage;
