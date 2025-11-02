// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import PakistanFlags from "./PakistanFlags";
// import WorldFlags from "./WorldFlags";
// import FilterSection from "./components/FilterSection";

// const ShopPage = () => {
//   const searchParams = useSearchParams();
//   const currentFilter = searchParams.get("filter") || "";
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, [currentFilter]);

//   const renderFlags = () => {
//     switch (currentFilter) {
//       case "Pakistan Flags":
//         return <PakistanFlags />;
//       case "World Flags":
//         return <WorldFlags />;
//       case "Corporate Flags":
//         return (
//           <h1 className="text-center text-gray-500 mt-10 font-medium">
//             Corporate Flags Coming Soon...
//           </h1>
//         );
//       case "Custom Flags":
//         return (
//           <h1 className="text-center text-gray-500 mt-10 font-medium">
//             Custom Flags Coming Soon...
//           </h1>
//         );
//       default:
//         return (
//           <>
//             <PakistanFlags />
//             <WorldFlags />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-b from-green-50 to-white">
//       {/* Sidebar Filter */}
//       <aside className="w-full md:w-1/4 lg:w-1/6 p-4 border-b md:border-b-0 md:border-r border-green-100 bg-white/60 backdrop-blur-sm">
//         <FilterSection />
//       </aside>

//       {/* Main Content */}
//       <main className="w-full md:w-3/4 lg:w-5/6 p-1">
//         {/* Header */}
//         <div className="flex flex-col justify-center items-center text-center mb-8 mt-4">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 tracking-tight">
//             VIP Flag Shop {currentFilter && `– ${currentFilter}`}
//           </h1>
//           <h2 className="text-lg md:text-xl italic font-medium text-gray-700 mt-2">
//             From Nations to Notions <br className="block md:hidden" />— We’ve
//             Got Your Flag
//           </h2>

//           {/* Decorative divider */}
//           <div className="w-24 h-1 bg-green-500 rounded-full mt-4"></div>
//         </div>

//         {/* Content Section */}
//         <div
//           className={`transition-all duration-500 ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//         >
//           {renderFlags()}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ShopPage;

"use client";

import { Suspense } from "react";
import ShopContent from "./ShopContent";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-20 text-green-600">Loading shop...</div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
