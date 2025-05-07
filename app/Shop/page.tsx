import PakistanFlags from "./PakistanFlags";
import WorldFlags from "./WorldFlags";

const ShopPage = () => {
  return (
    <div className="bg-zinc-100">
      <div className="text-3xl font-bold text-green-600">Flag Shop</div>
      <PakistanFlags />
      <WorldFlags />
    </div>
  );
};

export default ShopPage;
