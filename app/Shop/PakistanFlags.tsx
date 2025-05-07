import ShoppingCard from "../components/ShoppingCard";
import { pakistanShop } from "../data/pakistan";

const PakistanFlags = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Pakistan Flags</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pakistanShop.map((product, index) => (
          <ShoppingCard
            worldFlag={false}
            key={index}
            href={`/Shop/${product.id}`}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PakistanFlags;
