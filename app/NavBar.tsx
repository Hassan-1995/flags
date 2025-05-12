"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FiChevronLeft, FiMenu, FiX } from "react-icons/fi";
import { LuFlag, LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItem(cart.length);
  }, [cartItem]);

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/Shop" },
    { label: "Products Gallery", href: "/productsGallery" },
    { label: "Contact Us", href: "/ContactUs" },
  ];

  const handleClick = (item: string) => {
    setIsMenuOpen(false);
    router.push(item);
  };

  return (
    <nav className="flex bg-white w-screen items-center justify-between px-6 py-4 border-b shadow-sm">
      <Link href="/" className="flex items-center z-10">
        <LuFlag
          size={30}
          className={`${
            currentPath === "/" ? "text-green-600" : "text-green-300"
          } hover:text-green-900 transition-colors mr-2`}
        />
        <span className="text-xl font-bold text-black">VIP FLAGS</span>
      </Link>

      <ul className="space-x-8 hidden md:flex">
        {mainLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-md font-medium ${
                link.href === currentPath
                  ? "text-zinc-900 underline"
                  : "text-zinc-500"
              } hover:text-zinc-800 hover:underline underline-offset-4 transition-all`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flex space-x-2">
        <Link
          href="/Cart"
          className="items-center justify-center relative p-2 md:inline-flex hidden"
        >
          <LuShoppingCart size={30} color="green" />

          {cartItem > 0 && (
            <div className="bg-red-500 w-3 h-3 rounded-xl absolute top-1 right-1" />
          )}
        </Link>
        <div className="hidden lg:flex space-x-2">
          <NavButton
            title="Get a Qoute"
            onClick={() => handleClick("/")}
            size="md"
            textColor="text-black"
            bgColor="bg-white"
            hoverColor="hover:bg-green-600 hover:text-white"
          />
          <NavButton
            title="Shop Now"
            onClick={() => handleClick("/Shop")}
            size="md"
            textColor="text-white"
            bgColor="bg-black"
            hoverColor="hover:bg-white hover:text-green-600"
          />
        </div>
      </div>

      <button
        className="md:hidden text-3xl text-black focus:outline-none z-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-screen bg-white z-50 py-5 px-6 transform transition-transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 left-4 flex items-center text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiChevronLeft size={30} />
          <span className="text-xl ml-2">Back</span>
        </button>

        <ul className="flex flex-col mt-16 space-y-4">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg font-bold px-4 py-2 rounded ${
                  link.href === currentPath
                    ? "bg-black text-white"
                    : "text-black hover:bg-zinc-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div className="mt-6 flex flex-col gap-3 px-4">
            <NavButton
              title="Cart"
              onClick={() => handleClick("/Cart")}
              textColor="text-white"
              bgColor="bg-green-600"
            />
            <NavButton
              title="Get a Quote"
              onClick={() => handleClick("/")}
              textColor="text-black"
              bgColor="bg-white"
            />
            <NavButton
              title="Shop Now"
              onClick={() => handleClick("/Shop")}
              textColor="text-white"
              bgColor="bg-black"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

type NavButtonProps = {
  title: string;
  onClick: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  textColor?: string;
  bgColor?: string;
  hoverColor?: string;
  className?: string;
};

const NavButton = ({
  title,
  onClick,
  size = "md",
  textColor = "text-black",
  bgColor = "bg-blue-500",
  hoverColor = "hover:bg-blue-600",
  className = "",
}: NavButtonProps) => {
  let sizeClasses = "";
  const handleClick = () => {
    console.log(title);
    onClick();
  };

  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "lg":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    case "xl":
      sizeClasses = "px-9 py-4 text-xl";
      break;
    case "md":
    default:
      sizeClasses = "px-4 py-2 text-base";
  }

  const combinedClasses = `font-semibold rounded-xl border-2 border-zinc-600 ${textColor} ${bgColor} ${hoverColor} ${sizeClasses} flex items-center justify-center ${className}`;
  return (
    <button className={combinedClasses} onClick={handleClick}>
      {title}
    </button>
  );
};
