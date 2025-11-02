import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "md" | "lg" | "xl";
  textColor?: string;
  bgColor?: string;
  hoverColor?: string;
  href?: string;
}

export default function Button({
  text,
  onClick,
  size = "md",
  textColor = "text-white",
  bgColor = "bg-green-600",
  hoverColor = "hover:bg-green-700",
  className = "",
  href,
  ...rest
}: ButtonProps) {
  let sizeClasses = "";

  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1.5 text-sm";
      break;
    case "lg":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    case "xl":
      sizeClasses = "px-8 py-4 text-xl";
      break;
    case "md":
    default:
      sizeClasses = "px-4 py-2.5 text-base";
  }

  const combinedClasses = `
    ${bgColor} ${textColor} ${hoverColor}
    font-semibold tracking-wide rounded-2xl
    border border-green-700/20 shadow-md shadow-green-900/10
    transition-all duration-300 ease-out
    cursor-pointer active:scale-95
    hover:shadow-lg hover:shadow-green-700/20
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
    ${sizeClasses} ${className}
  `;

  return href ? (
    <Link href={href} className={combinedClasses}>
      {text}
    </Link>
  ) : (
    <button onClick={onClick} className={combinedClasses} {...rest}>
      {text}
    </button>
  );
}
