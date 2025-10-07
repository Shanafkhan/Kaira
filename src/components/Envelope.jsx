import { useState, useEffect } from "react";
import backGround1 from "../assets/images/backGround1.png";
import backGround2 from "../assets/images/backGround2.png";
import backGround3 from "../assets/images/backGround3.png";
import backGround4 from "../assets/images/backGround4.png";
import image1 from "../assets/images/envelope.png";
import image2 from "../assets/images/envelope2.png";
import image3 from "../assets/images/envelope3.png";
import image4 from "../assets/images/envelope4.png";
import textBackground from "../assets/images/textBackground.png";
import arrowleft from '../assets/images/arrow-left.png';
import arrowright from '../assets/images/arrow-right.png';

export default function EnvelopeSlider() {
  // All slides (images + text)
  const slides = [
    {
      background: backGround1,
      envelope: image1,
      title: "Food That Hugs You",
      description:
        "Our Malnad-themed restaurant serves up soul before it serves plates.",
    },
    {
      background: backGround2,
      envelope: image2,
      title: "Where Taste Meets Tradition",
      description:
        "Authentic recipes crafted with love, bringing you the warmth of Malnad kitchens.",
    },
    {
      background: backGround3,
      envelope: image3,
      title: "A Culinary Retreat",
      description:
        "Escape the ordinary and indulge in timeless flavors that comfort and inspire.",
    },
    {
      background: backGround4,
      envelope: image4,
      title: "Whispers of the Hills",
      description:
        "Every bite tells a story of misty mornings, earthy aromas, and hearty laughter.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(false);

    // Small delay so animation re-triggers cleanly
    const timer1 = setTimeout(() => setHasAnimated(true), 100);

    const timer2 = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
    };
  }, [currentSlide, slides.length]);

  const transitionClasses = "transition-all duration-1000 ease-out";

  /* --- Envelope animation --- */
  const envelopeStart =
    "-translate-x-full -translate-y-1/2 rotate-12 opacity-0";
  const envelopeEnd = "translate-x-0 -translate-y-1/2 rotate-0 opacity-100";

  const envelopeClasses = `
    h-[500px] w-auto absolute top-1/2 left-[20%] z-10 
    ${transitionClasses} 
    ${hasAnimated ? envelopeEnd : envelopeStart}
  `;

  /* --- Text card animation --- */
  const textStart = "translate-y-full -translate-x-full rotate-6 opacity-0";
  const textEnd = "translate-y-0 translate-x-0 rotate-8 opacity-100";

  const textClasses = `
    absolute top-[29%] right-[31%] h-[450px] w-[300px] z-50 
    ${transitionClasses} delay-300 
    ${hasAnimated ? textEnd : textStart}
  `;

  const current = slides[currentSlide];

  // --- Navigation handlers ---
  const nextSlide = () => {
    setHasAnimated(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 200); // adds a tiny delay for smoother transition
  };

  const prevSlide = () => {
    setHasAnimated(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 200);
  };

  return (
    <div
      key={currentSlide} //
      className='min-h-screen relative overflow-hidden flex items-center justify-center'
      style={{
        backgroundImage: `url(${current.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Envelope Image */}
      <img src={current.envelope} alt='Envelope' className={envelopeClasses} />

      {/* Text Card */}
      <div
        className={textClasses}
        style={{
          backgroundImage: `url(${textBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className='p-8 text-center max-w-80'>
          <h1 className='text-3xl font-secondary font-bold text-gray-800 mb-4'>
            {current.title}
          </h1>
          <p className='text-lg text-stone-950 pt-6 font-primary'>{current.description}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-5 top-1/2 -translate-y-1/2  transition-all'>
        <img
          src={arrowleft}
          alt='Previous Slide'
          className='h-6 w-auto lg:h-28 lg:w-auto'
        />
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-5 top-1/2 -translate-y-1/2  transition-all'>
        <img
          src={arrowright}
          alt='Next Slide'
          className='h-6 w-auto lg:h-28 lg:w-auto'
        />
      </button>
    </div>
  );
}
