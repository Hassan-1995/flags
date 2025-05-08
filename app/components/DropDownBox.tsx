import React, { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((opt) => opt.key === e.target.value);
    setSelectedOption(selected || null);
    sendSize(selected!);
  };
  return (
    <div>
      <label htmlFor="dropdown" className="text-lg font-bold">
        {title}
      </label>
      <select
        id="dropdown"
        value={selectedOption?.key || ""}
        onChange={handleChange}
        className="border-2 mx-3 p-2"
      >
        <option value={""}>-- Choose an Option --</option>
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p className="mt-4 text-3xl">
          Price: <strong>{selectedOption.price.toLocaleString()}</strong>
        </p>
      )}
    </div>
  );
};

export default DropDownBox;
