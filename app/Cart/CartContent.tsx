"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuTrash2 } from "react-icons/lu";

type CartItem = {
  image: string;
  name: string;
  quantity: number;
  size: string;
  price: number | 0;
};

const CartContent = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleDelete = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {cart.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-100 px-5 border-t-2 border-b-2 flex w-full mt-1 justify-center"
        >
          <div className="lg:flex lg:w-1/3 md:w-3/4 w-1/2">
            <div className="relative rounded overflow-hidden lg:w-1/2 h-50 lg:h-30 p-2 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
            <h1 className="lg:w-1/2 p-2 font-semibold flex items-center border-r-2">
              {item.name}
            </h1>
          </div>
          <div className="w-1/12 p-1 hidden lg:flex items-center justify-end border-r-2">
            <h1 className="font-bold">{item.quantity}</h1>
          </div>
          <div className="w-1/12 p-1 hidden lg:flex items-center justify-end border-r-2">
            <h1>{item.price.toLocaleString()}</h1>
          </div>
          <div className="w-1/6 p-1 flex flex-col md:flex items-center justify-center border-r-2">
            <h1>{item.size}</h1>
            <h1 className="md:hidden">
              Rs: {(item.quantity * item.price).toLocaleString()}
            </h1>
          </div>
          <div className="w-1/6 p-1 hidden md:flex items-center justify-end border-r-2 font-bold">
            Rs:{" "}
            <h1 className="font-normal">
              {" "}
              {(item.quantity * item.price).toLocaleString()}
            </h1>
          </div>
          <div className="w-1/6 p-1 flex flex-col items-center justify-center border-r-2">
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 px-2 py-1 rounded hover:text-red-800"
            >
              <LuTrash2 size={30} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartContent;
