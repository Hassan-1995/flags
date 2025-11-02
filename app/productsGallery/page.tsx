import Image from "next/image";
import Link from "next/link";

const dummyProducts = [
  {
    title: "Pakistan Flag (3x5 ft)",
    price: "Rs 450",
    image: "/placeholder-flag1.jpg",
  },
  {
    title: "Flag Pole Stand",
    price: "Rs 850",
    image: "/placeholder-flag2.jpg",
  },
  { title: "Car Flag Mount", price: "Rs 350", image: "/placeholder-flag3.jpg" },
  { title: "Desk Flag Set", price: "Rs 750", image: "/placeholder-flag4.jpg" },
  {
    title: "World Flag Collection",
    price: "Rs 1200",
    image: "/placeholder-flag5.jpg",
  },
  { title: "Mini Hand Flag", price: "Rs 200", image: "/placeholder-flag6.jpg" },
];

const ProductsGalleryPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-6 md:px-10">
      {/* Hero Banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight mb-3">
          Explore Our Flag Collection
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          From national flags to accessories — quality products to show your
          pride.
        </p>
        <div className="mx-auto w-20 h-1 bg-green-500 rounded-full mt-4"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-green-400 transition-all hover:scale-105 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-52 bg-green-100">
              <Image
                src="/placeholder.png" // You can replace this later with actual images
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/30 to-transparent"></div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-green-700 mb-1">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{product.price}</p>
              <Link
                href="#"
                className="mt-auto bg-green-600 text-white font-medium py-2 rounded-lg text-center hover:bg-green-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          More Products Coming Soon!
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          We’re constantly expanding our collection with new flags, poles and
          accessories. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default ProductsGalleryPage;
