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
  textColor = "text-black",
  bgColor = "bg-blue-500",
  hoverColor = "hover:bg-blue-600",
  className = "",
  href,
  ...rest
}: ButtonProps) {
  let sizeClasses = "";

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

  const combinedClasses = `font-semibold rounded-xl border-2 border-black ${textColor} ${bgColor} ${hoverColor} ${sizeClasses} flex items-center justify-center ${className}`;

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
