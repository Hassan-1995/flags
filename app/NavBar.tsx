"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFlag } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Products Gallery", href: "/productsGallery" },
    { label: "Media Cell", href: "/mediaCell" },
    { label: "Our Office", href: "/ourOffice" },
    { label: "Contact Us", href: "/contactUs" },
    { label: "About Us", href: "/aboutUs" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <FaFlag size={40} color="" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
