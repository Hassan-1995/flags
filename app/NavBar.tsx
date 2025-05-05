"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FiChevronLeft, FiMenu, FiX } from "react-icons/fi";
import { LuFlag } from "react-icons/lu";
import Button from "./components/Button";

const NavBar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/Shop" },
    { label: "Products Gallery", href: "/productsGallery" },
    { label: "Contact Us", href: "/contactUs" },
  ];

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

      <div className="hidden lg:flex space-x-2">
        <Button
          text="Get a Quote"
          size="md"
          bgColor="bg-white"
          hoverColor="hover:bg-zinc-100"
          href="/"
        />
        <Button
          text="Shop Now"
          size="md"
          textColor="text-white"
          bgColor="bg-black"
          hoverColor="hover:bg-zinc-800"
          href="/"
        />
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
            <Button
              text="Get a Quote"
              size="sm"
              bgColor="bg-white"
              hoverColor="hover:bg-zinc-100"
              href="/"
            />
            <Button
              text="Shop Now"
              size="sm"
              textColor="text-white"
              bgColor="bg-black"
              hoverColor="hover:bg-zinc-800"
              href="/"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
