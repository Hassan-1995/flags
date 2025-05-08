import Image from "next/image";
import React from "react";

type CartItem = {
  image: string;
  title: string;
  quantity: number;
  size: string;
  price: number | 0;
};

const CartContent = ({ image, title, quantity, size, price }: CartItem) => {
  return (
    // <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b">
    //   <div className="flex items-center gap-4 w-full sm:w-1/3">
    //     <div className="relative bg-zinc-300 h-20 w-28 flex-shrink-0 rounded overflow-hidden">
    //       <Image
    //         src={image}
    //         alt={title}
    //         fill
    //         className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    //       />
    //     </div>
    //     <h1 className="text-lg font-semibold text-zinc-800">{title}</h1>
    //   </div>
    //   <h1 className="text-zinc-600 w-1/4 sm:w-1/6 text-center">{quantity}</h1>

    //   <h1 className="text-zinc-600 w-1/4 sm:w-1/6 text-center">{price}</h1>

    //   <h1 className="text-zinc-800 font-medium w-full sm:w-1/6 text-right sm:text-center">
    //     {(quantity * price).toLocaleString()}
    //   </h1>
    // </div>

    <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b">
      <div className="flex items-center gap-4 w-full sm:w-1/3 lg:w-1/4">
        <div className="relative w-28 h-20 flex-shrink-0 rounded overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <h1 className="text-zinc-600 font-semibold">{title}</h1>
      </div>
      <h1 className="text-zinc-600 font-semibold w-1/4 sm:w-1/6 text-center">
        {quantity}
      </h1>
      <h1 className="text-zinc-600 font-semibold w-1/4 sm:w-1/6 text-center">
        {price}
      </h1>
      <h1 className="text-zinc-600 font-semibold w-1/4 sm:w-1/6 text-center">
        {size}
      </h1>
      <h1 className="text-zinc-800 font-semibold w-full sm:w-1/6 lg:w-1/6 text-right sm:text-center">
        {quantity * price}
      </h1>
    </div>
  );
};

export default CartContent;
