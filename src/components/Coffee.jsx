import React, { useState } from "react";

import coffeearabica from "../assets/images/coffee-arabica.png";
import greveliaRobusta from "../assets/images/grevellia-robusta.png";
import woodBackground from "../assets/images/coffee-background.png";
import arrowleft from "../assets/images/arrow-left.png";
import arrowright from "../assets/images/arrow-right.png";
import arabica from '../assets/images/arabica.png';
import grevelia from '../assets/images/grevelia.png';


const slides = [
  {
    src: arabica,
    text: "content on coffea robusta"
  },
  {
    src:grevelia ,
    text: "Content on grevelia robusta"
  }
];

const SLIDES_DATA = [
  {
    id: 0,
    mainImage: coffeearabica,
    topLeft: {
      title: "Coffea Arabica",
      phonetic: "KOFF-ee-uh-RAH-bick-uh",
      commonName: "Coffee",
      family: "Rubiaceae",
    },
    topRight: {
      text: "Coffee is deeply rooted in Malnad (Western Ghats, Karnataka). Introduced by **Baba Budan** in Chikmagalur in the 17th century, it shaped the region's economy and identity.",
    },
    bottomLeft: {
      text: "Coffee estates are integral to the Malnad lifestyle—families gather over traditional filter coffee, estates host cultural celebrations, and the crop symbolizes prosperity.",
    },
    bottomRight: {
      text: "Coffee estates provide long-term asset appreciation while also serving as a potential income-generating plantation, which appeals to investors looking for both luxury and returns.",
    },
  },
  {
    id: 1,
    mainImage: greveliaRobusta,
    topLeft: {
      title: "Grevillea robusta",
      phonetic: "grev-ILL-ee-uh roe-BUS-tuh",
      commonName: "Silk-oak",
      family: "Proteaceae",
    },
    topRight: {
      text: "Pepper vines climb around Silver Oak trunks—pepper and coffee together are a cultural and economic hallmark of the region.",
    },
    bottomLeft: {
      text: "Silver Oak is the most common shade tree in Malnad’s coffee plantations. Its tall, straight growth and feathery foliage provide filtered sunlight—ideal for coffee shrubs, pepper vines, and cardamom.",
    },
    bottomRight: {
      text: "Timber from mature Silver Oak trees is used in furniture, construction, and plywood, adding economic value to estate properties.",
    },
  },
];

export default function Coffee() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = SLIDES_DATA[currentSlideIndex];
  const totalSlides = SLIDES_DATA.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlides = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlides = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

  return (
    <>
      <div
        className='hidden section relative min-h-screen w-full sm:flex items-center justify-center p-30'
        style={{
          backgroundImage: `url(${woodBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
        }}>
        <div className='relative z-10  h-[400px] w-auto'>
          <img
            src={slide.mainImage}
            alt={`Main image for ${slide.topLeft.title}`}
            className='w-full h-full object-contain shadow-2xl'
          />
        </div>

        <div className='absolute top-20 left-20 z-20 w-fit max-w-[400px] text-left'>
          <h1 className='font-primary text-5xl font-normal mb-2'>
            {slide.topLeft.title}
          </h1>
          <p className='font-primary text-2xl mb-4 font-normal'>
            {slide.topLeft.phonetic}
          </p>
          <p className='text-xl font-primary font-normal'>
            <span className=' font-primary'>Common name(s):</span>{" "}
            {slide.topLeft.commonName}
          </p>
          <p className='text-xl font-primary font-normal'>
            <span className=' font-primary'>Family:</span>{" "}
            {slide.topLeft.family}
          </p>
        </div>

        <div className='absolute top-20 right-20 z-20 w-fit max-w-[500px] text-right'>
          <p
            className='text-xl leading-relaxed font-hand-written'
            dangerouslySetInnerHTML={{
              __html: slide.topRight.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </div>

        <div className='absolute bottom-20 left-20 z-20 w-fit max-w-[500px] text-left'>
          <p
            className='text-xl leading-relaxed font-hand-written'
            dangerouslySetInnerHTML={{
              __html: slide.bottomLeft.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </div>

        <div className='absolute bottom-20 right-20 z-20 w-fit max-w-[500px] text-right'>
          <p
            className='text-xl leading-relaxed font-hand-written'
            dangerouslySetInnerHTML={{
              __html: slide.bottomRight.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
          <img src={arrowleft} alt='Previous Slide' />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
          <img src={arrowright} alt='Next Slide' />
        </button>
      </div>
      {/* Mobile view  */}
      <div className='flex md:hidden items-center justify-center w-full'>
        <div className='relative w-full'>
          {/* Slides Container */}
          <div className='w-full h-full overflow-hidden'>
            <div
              className='flex h-full transition-transform ease-out duration-500'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
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
            onClick={prevSlides}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
            <img
              src={arrowleft}
              alt='Previous Slide'
              className='h-6 w-auto lg:h-28 lg:w-auto'
            />
          </button>
          <button
            onClick={nextSlides}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
            <img
              src={arrowright}
              alt='Next Slide'
              className='h-6 w-auto lg:h-28 lg:w-auto'
            />
          </button>
        </div>
      </div>
    </>
  );
}
