import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-xl border shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
