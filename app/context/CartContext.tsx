"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  image: string;
  name: string;
  quantity: number;
  size: string;
  price: number | 0;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  setCartItem: (newItem: CartItem[]) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  const setCartItem = (newItem: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(newItem));
    setCart(newItem);
  };

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name && cartItem.size === item.size
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCartItem(updatedCart);
    } else {
      setCartItem([...cart, item]);
    }
  };
  const removeFromCart = (item: CartItem) => {
    const updatedCart = cart.filter(
      (cartItem) =>
        !(cartItem.name === item.name && cartItem.size === item.size)
    );
    setCartItem(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
