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
  sizeOption: string;
  worldFlag: boolean;
};

const ShoppingCard = ({
  href,
  imageSrc,
  title,
  description,
  price,
  sizeOption,
  worldFlag,
}: ShoppingCardProps) => {
  const formatPrice = () => {
    if (typeof price === "number") {
      return `Rs. ${price.toLocaleString()}`;
    } else {
      return `Rs. ${price.min.toLocaleString()} – ${price.max.toLocaleString()}`;
    }
  };

  return (
    <Card className="overflow-hidden group bg-white rounded-2xl border border-green-100 shadow-md shadow-green-100 hover:shadow-lg hover:shadow-green-200 transition-all duration-300 transform hover:-translate-y-1">
      <Link
        href={{
          pathname: href,
          query: {
            title,
            imageSrc,
            description,
            price: typeof price === "number" ? price : JSON.stringify(price),
            sizeOption,
            worldFlag,
          },
        }}
        className="flex flex-col h-full"
      >
        {/* Image Section */}
        <div className="relative h-[220px] overflow-hidden rounded-t-2xl">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Card Content */}
        <CardContent className="flex flex-col flex-grow justify-between p-4">
          <div>
            <p className="text-base font-semibold text-gray-800">{title}</p>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="mt-3">
            <span className="inline-block text-green-600 font-bold text-lg">
              {formatPrice()}
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ShoppingCard;
