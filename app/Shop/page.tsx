import Link from "next/link";
import PakistanFlags from "./PakistanFlags";
import WorldFlags from "./WorldFlags";

const ShopPage = () => {
  const pageSection = [
    {
      id: "pakistan_flags",
      title: "Pakistan Flags",
    },
    {
      id: "world_flags",
      title: "World Flags",
    },
    {
      id: "corporate_flags",
      title: "Corporate Flags",
    },
    {
      id: "custom_flags",
      title: "Custom Flags",
    },
  ];
  return (
    <div className="bg-zinc-100 scroll-smooth">
      <div className="flex flex-col justify-center items-center h-20">
        <h1 className="text-3xl font-bold text-green-400 mt-5">
          VIP Flag Shop
        </h1>
        <h1 className="text-xl italic text-center font-bold text-black">
          From Nations to Notions <br className="md:hidden" />— We’ve Got Your
          Flag
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8 justify-center items-center bg-zinc-100 py-5">
        {pageSection.map((section) => (
          <li key={section.id} className="flex justify-center">
            <Link
              href={`#${section.id}`}
              className="text-md font-medium text-zinc-500 hover:text-zinc-800 hover:underline underline-offset-4 transition-all"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
      <div id="pakistan_flags">
        <PakistanFlags />
      </div>
      <div id="world_flags">
        <WorldFlags />
      </div>
    </div>
  );
};

export default ShopPage;
