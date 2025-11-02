"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import Button from "../components/Button";

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

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Button
          text="Continue Shopping"
          href="/"
          bgColor="bg-green-600"
          textColor="text-white"
          hoverColor="hover:bg-green-700"
        />
      </div>
    );

  return (
    <div className="w-11/12 mx-auto bg-white shadow-lg rounded-b-lg">
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center justify-between border-b py-4 px-4 hover:bg-gray-50 transition-all"
        >
          {/* Image + Title */}
          <div className="flex items-center lg:w-1/3 w-full gap-4 mb-3 lg:mb-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <span className="font-medium text-gray-800 text-sm sm:text-base">
              {item.name}
            </span>
          </div>

          {/* Responsive details for mobile */}
          <div className="flex flex-col w-full gap-1 text-gray-700 text-sm sm:text-base lg:hidden">
            <div className="flex justify-between">
              <span>Size:</span>
              <span className="font-medium">{item.size}</span>
            </div>
            <div className="flex justify-between">
              <span>Price:</span>
              {/* <span>Rs {item.price.toLocaleString()}</span> */}
              <span>Rs {item.price?.toLocaleString() ?? 0}</span>
            </div>
            <div className="flex justify-between">
              <span>Quantity:</span>
              <span>{item.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-semibold">
                Rs {(item.quantity * item.price).toLocaleString()}
              </span>
            </div>
          </div>

          {/* For desktop layout */}
          <div className="hidden lg:flex lg:w-1/12 justify-center font-semibold text-gray-700">
            {item.quantity}
          </div>
          <div className="hidden lg:flex lg:w-1/12 justify-center text-gray-700">
            Rs {item.price.toLocaleString()}
          </div>
          <div className="hidden lg:flex lg:w-1/6 justify-center text-gray-700">
            {item.size}
          </div>
          <div className="hidden lg:flex lg:w-1/6 justify-center font-semibold text-gray-800">
            Rs {(item.quantity * item.price).toLocaleString()}
          </div>

          {/* Delete Button */}
          <div className="flex justify-end lg:justify-center mt-2 lg:mt-0 w-full lg:w-1/6">
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 hover:text-red-800 transition-colors"
              title="Remove item"
            >
              <LuTrash2 size={20} />
            </button>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-6 border-t bg-gray-100 rounded-b-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Subtotal: Rs {subtotal.toLocaleString()}
        </h2>
        <Button
          text="Proceed to Checkout"
          size="lg"
          textColor="text-white"
          bgColor="bg-green-600"
          hoverColor="hover:bg-green-700"
          href="/checkout"
          className="w-full sm:w-auto"
        />
      </div>
    </div>
  );
};

export default CartContent;
