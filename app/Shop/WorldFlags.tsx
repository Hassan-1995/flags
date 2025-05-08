import ShoppingCard from "../components/ShoppingCard";
import { worldFlagShop } from "../data/worldFlag";

const WorldFlags = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">World Flags</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {worldFlagShop.map((product, index) => (
          <ShoppingCard
            worldFlag={true}
            key={index}
            href={`/Shop/${product.id}`}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            price={product.price}
            sizeOption={product.title.replace(/[\s–]+/g, "")}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldFlags;
