import React, { useEffect, useState } from "react";

type OptionType = {
  key: string;
  value: string;
  price: number;
};

type DropDownContent = {
  title: string;
  options: OptionType[];
  sendSize: (selected: OptionType) => void;
};

const DropDownBox = ({ title, options, sendSize }: DropDownContent) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  // Automatically pick the first option by default
  useEffect(() => {
    if (options && options.length > 0 && !selectedOption) {
      const firstOption = options[0];
      setSelectedOption(firstOption);
      sendSize(firstOption);
    }
  }, [options, selectedOption, sendSize]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((opt) => opt.key === e.target.value);
    if (selected) {
      setSelectedOption(selected);
      sendSize(selected);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="space-x-3">
        {/* Title */}
        <label
          htmlFor="dropdown"
          className="text-lg font-semibold text-gray-800 whitespace-nowrap"
        >
          {title}:
        </label>

        {/* Dropdown */}
        <select
          id="dropdown"
          value={selectedOption?.key || ""}
          onChange={handleChange}
          className="border-2 border-green-500 rounded-lg px-3 py-2 text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* Price */}
        {selectedOption ? (
          <span className="text-lg text-green-700 font-semibold whitespace-nowrap">
            Rs. {selectedOption.price.toLocaleString()}
          </span>
        ) : (
          <span className="text-lg text-green-700 font-semibold whitespace-nowrap">
            Rs. Loading...
          </span>
        )}
      </div>
    </div>
  );
};

export default DropDownBox;
