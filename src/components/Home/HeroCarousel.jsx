"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getMainSlider } from "@/utils/api";

const HeroCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await getMainSlider();
        setSlides(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Auto-rotate slides
  useEffect(
    () => {
      if (slides.length > 0) {
        const interval = setInterval(() => {
          setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
      }
    },
    [slides]
  );

  if (loading) return <div className="h-[25vh] md:h-[78vh] bg-gray-200 animate-pulse" />;
  if (error)
    return (
      <div className="text-red-500">
        Error: {error}
      </div>
    );
  if (slides.length === 0) return <div>No slides available</div>;

  return (
    <div className="relative w-full h-[25vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) =>
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index ===
          currentSlide
            ? "opacity-100"
            : "opacity-0"}`}
        >
          <a href={slide.bnr_urlink} target="_blank" rel="noopener noreferrer">
            <Image
              src={slide.bnr_banner}
              alt={slide.bnr_name}
              title={slide.bnr_name}
              fill
              className="md:object-cover"
              priority={index === 0}
            />
          </a>
        </div>
      )}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-0.5  ${index === currentSlide
              ? "bg-white"
              : "bg-gray-400 "}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        )}
      </div>
    </div>
  );
};

export default HeroCarousel;
