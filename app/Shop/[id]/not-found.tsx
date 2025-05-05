import Link from "next/link";
import React from "react";

const ProductNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Product Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        The product you&apos;re looking for does not exist or may have been
        removed.
      </p>
      <Link
        href="/Shop"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ProductNotFound;
