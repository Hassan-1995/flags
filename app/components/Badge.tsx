import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "custom";
  size?: "sm" | "md" | "lg";
  className?: string;
  bgColor?: string; // e.g., "bg-red-200"
  textColor?: string; // e.g., "text-red-800"
  borderColor?: string; // e.g., "border-red-800"
};

export default function Badge({
  children,
  variant = "outline",
  size = "md",
  className = "",
  bgColor,
  textColor,
  borderColor,
}: BadgeProps) {
  // Base classes
  let badgeClass =
    "inline-flex items-center gap-1 rounded-full font-medium leading-none ";

  // Size styles
  switch (size) {
    case "sm":
      badgeClass += "text-xs px-2 py-0.5 ";
      break;
    case "lg":
      badgeClass += "text-base px-4 py-1.5 ";
      break;
    case "md":
    default:
      badgeClass += "text-sm px-3 py-1 ";
  }

  // Variant / Color logic
  if (variant === "outline") {
    badgeClass += "border border-black bg-gray-200 text-black ";
  } else if (variant === "solid") {
    badgeClass += "border border-black bg-black text-white ";
  } else if (variant === "custom") {
    badgeClass += `border ${borderColor || "border-black"} ${bgColor || ""} ${
      textColor || ""
    } `;
  }

  badgeClass += className;

  return <span className={badgeClass}>{children}</span>;
}
