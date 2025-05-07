import Image from "next/image";
import React, { useState } from "react";
import countryFlags from "./countries.json";

type ShowWorldFlagProps = {
  title: string;
};

const ShowWorldFlag = ({ title }: ShowWorldFlagProps) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="">
      <div className="py-1.5">
        <select
          id="country"
          value={selectedCountry}
          onChange={handleChange}
          className="border w-full bg-zinc-300 border-gray-300 p-2 rounded-md"
        >
          <option value="">-- Choose a Country --</option>
          {countryFlags.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <Image
        src={`https://flagcdn.com/w640/${selectedCountry.toLowerCase()}.png`}
        alt={title}
        width={500}
        height={500}
        priority
        className="object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow"
      />
    </div>
  );
};

export default ShowWorldFlag;
