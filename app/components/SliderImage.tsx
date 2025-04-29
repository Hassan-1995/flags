"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type SliderImageProps = {
  images: string[];
  height?: string; // e.g., "h-[300px]"
  delay?: number; // autoplay delay in ms
};

export default function SliderImage({
  images,
  height = "h-[300px]",
  delay = 3000,
}: SliderImageProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!slider) return;

    const autoPlay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, delay);
    };

    autoPlay();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider, delay]);

  return (
    <div ref={sliderRef} className={`keen-slider relative w-full ${height}`}>
      {images.map((src, index) => (
        <div key={index} className="keen-slider__slide relative w-full">
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
