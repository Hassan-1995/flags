"use client";
import Image from "next/image";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <div className="relative h-[calc(90vh)] w-full overflow-hidden ">
        <Image
          src="Flag_of_Pakistan.gif"
          alt="Flags flying in the wind"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            VIP FLAGS
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium">
            Pride in Every Stitch
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              text="Shop Now"
              size="xl"
              textColor="text-white"
              bgColor="bg-green-600"
              hoverColor="hover:bg-green-700"
              href="/"
            />
            <Button
              text="Get a Quote"
              size="xl"
              textColor="text-white"
              bgColor="bg-tranparent"
              hoverColor="hover:bg-zinc-400"
              onClick={() => alert("Extra Large clicked")}
              //   href="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
