"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

import Image from "next/image";
import React from "react";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 24,
        },
      },
    },
  });

  const handlePrev = () => slider.current?.prev();
  const handleNext = () => slider.current?.next();

  return (
    <div className="relative">
      {/* Chevron Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <LuChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <LuChevronRight className="h-6 w-6" />
      </button>

      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center bg-white h-60 md:h-64 lg:h-72 rounded-xl overflow-hidden"
          >
            <div className="relative w-full h-full p-2">
              <Image
                src={src}
                alt={`Customer ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
