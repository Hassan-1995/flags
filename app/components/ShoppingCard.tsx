import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import CardContent from "./CardContent";

type ShoppingCardProps = {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  price: number | { min: number; max: number };
};

const ShoppingCard = ({
  href,
  imageSrc,
  title,
  description,
  price,
}: ShoppingCardProps) => {
  const formatPrice = () => {
    if (typeof price === "number") {
      return `Rs: ${price.toLocaleString()}`;
    } else {
      return `Rs: ${price.min.toLocaleString()} – ${price.max.toLocaleString()}`;
    }
  };

  return (
    <Card className="overflow-hidden m-4 hover:shadow-md hover:shadow-green-600 hover:scale-105 transition-all flex flex-col">
      <Link
        href={{
          pathname: href,
          query: {
            title,
            imageSrc,
            description,
            price: typeof price === "number" ? price : JSON.stringify(price),
          },
        }}
        className="flex flex-col flex-grow h-full"
      >
        <div className="relative h-[200px] overflow-hidden group">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out"
          />
        </div>
        <CardContent className="flex flex-col flex-grow justify-between">
          <p className="text-sm text-gray-700">{title}</p>
          <h4 className="text-lg font-semibold text-green-600 mt-auto">
            {formatPrice()}
          </h4>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ShoppingCard;
