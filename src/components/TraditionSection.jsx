// src/components/TraditionSection.jsx

import React, { useState } from "react";
import arrowleft from "../assets/images/arrow-left.png";
import arrowright from "../assets/images/arrow-right.png";



import gif1 from "../assets/gifs/welness.gif";
import gif2 from "../assets/gifs/oilbaths.gif";
import gif3 from "../assets/gifs/homesWithSoul.gif";
import gif4 from "../assets/gifs/food.gif";


const slides = [
  {
    src: gif1,
  },
  {
    src: gif2,
  },
  {
    src: gif3,
  },
  {
    src: gif4,
  },
];



// --- 3. THE SLIDER COMPONENT ---
export default function TraditionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='flex items-center justify-center w-full md:min-h-screen'>
      <div className='relative w-full'>
        {/* Slides Container */}
        <div className='w-full h-full overflow-hidden'>
          <div
            className='flex h-full transition-transform ease-out duration-500'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {/* Map through slides to render each GIF */}
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.text}
                className='w-full h-full object-cover flex-shrink-0 '
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
          <img src={arrowleft} alt='Previous Slide' className="h-6 w-auto lg:h-28 lg:w-auto" />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
          <img src={arrowright} alt='Next Slide' className="h-6 w-auto lg:h-28 lg:w-auto"/>
        </button>
      </div>
    </div>
  );
}
