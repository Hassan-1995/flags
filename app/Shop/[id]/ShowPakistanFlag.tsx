import Image from "next/image";
import React from "react";

type ShowPakistanFlagProps = {
  image: string;
  title: string;
};

const ShowPakistanFlag = ({ image, title }: ShowPakistanFlagProps) => {
  return (
    <div>
      <Image
        src={image}
        alt={title!}
        width={500}
        height={500}
        priority
        className="object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow"
      />
    </div>
  );
};

export default ShowPakistanFlag;
