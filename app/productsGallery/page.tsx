import TableFlagsCatalog from "./component/TableFlagsCatalog";
import ExecutiveFlagsCatalog from "./component/ExecutiveFlagsCatalog";
import OtherAccessoriesCatalog from "./component/OtherAccessoriesCatalog";

const ProductsGalleryPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-6 md:px-5">
      {/* Hero Banner */}
      <div className="text-center mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight mb-3">
          Explore Our Flag Collection
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          From national flags to accessories — quality products to show your
          pride.
        </p>
        {/* <div className="w-lg h-1 bg-green-500 rounded-full mt-4"></div> */}
      </div>

      {/* Product Grid */}
      <TableFlagsCatalog />
      <ExecutiveFlagsCatalog />
      <OtherAccessoriesCatalog />

      {/* Coming Soon Section */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-emerald-700 mb-3">
          More Products Coming Soon!
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          We’re constantly expanding our collection with new flags, poles, and
          accessories. Stay tuned!
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl py-4 px-6 max-w-md mx-auto shadow-sm">
          <p className="text-gray-700 font-medium mb-1">
            Could not find what you are looking for?
          </p>
          <p className="text-gray-600 text-sm">
            Drop a message on{" "}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 hover:underline"
            >
              +92 300 1234567
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsGalleryPage;
