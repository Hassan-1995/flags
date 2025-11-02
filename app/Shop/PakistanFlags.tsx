import ShoppingCard from "../components/ShoppingCard";
import { pakistanShop } from "../data/pakistan";

const PakistanFlags = () => {
  return (
    <section className="px-4 md:px-8 py-8 mb-8 bg-gradient-to-b from-white to-green-50 rounded-2xl shadow-sm">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm md:text-base font-medium">
          Celebrate your pride — explore premium Pakistan flag collections
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pakistanShop.map((product, index) => (
          <ShoppingCard
            key={index}
            href={`/Shop/${product.id}`}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            price={product.price}
            sizeOption={product.title.replace(/[\s–]+/g, "")}
            worldFlag={false}
          />
        ))}
      </div>
    </section>
  );
};

export default PakistanFlags;
