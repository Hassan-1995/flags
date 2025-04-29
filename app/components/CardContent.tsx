import React from "react";

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent = ({ children, className = "" }: CardContentProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export default CardContent;
