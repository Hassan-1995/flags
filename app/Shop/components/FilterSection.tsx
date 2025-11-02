"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const FilterSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("filter") || "";
  const [selected, setSelected] = useState(currentFilter);

  const items = [
    "Pakistan Flags",
    "World Flags",
    "Corporate Flags",
    "Custom Flags",
  ];

  const handleChange = (value: string) => {
    const newValue = selected === value ? "" : value;
    setSelected(newValue);

    const params = new URLSearchParams(searchParams.toString());
    if (newValue) {
      params.set("filter", newValue);
    } else {
      params.delete("filter");
    }

    router.replace(`/Shop?${params.toString()}`);
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm border border-green-100">
      <h1 className="font-bold text-xl mb-4 text-green-700">Filter</h1>
      <div className="space-y-3">
        {items.map((item) => {
          const isActive = selected === item;
          return (
            <div
              key={item}
              onClick={() => handleChange(item)}
              className={`
                px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer select-none
                ${
                  isActive
                    ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-800/20"
                    : "bg-gray-50 hover:bg-green-50 text-gray-700 border-gray-200"
                }
              `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
