import { useState, useEffect } from "react";
import logoVideo from "../assets/vedio/kaira_logo_ved.webm";
import background from "../assets/images/Hero-background.png";

import image1 from "../assets/images/image1.png"; // Top Left
import image2 from "../assets/images/image2.png"; // Top Right
import image3 from "../assets/images/image3.png"; // Bottom Left
import image4 from "../assets/images/image4.png"; // Bottom Right


const AnimatedImage = ({ src, alt, initialClass, finalClass, isAnimated }) => {
  const classes = `
    absolute transition-all duration-[1500ms] ease-out
    ${finalClass}
    ${isAnimated ? 'opacity-100' : `${initialClass} opacity-0`} w-[400px] h-[450px] object-contain overflow-hidden
  `;


  const imageClasses = "w-full h-full object-contain hover:scale-105 transition-transform overflow-hidden";

  return (
    <div className={classes}>
      <img src={src} alt={alt} className={imageClasses} />
    </div>
  );
};


export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);



 // Top Left Image
const initial_TL = "translate-x-[-100vw] translate-y-[-100vh]";
const final_TL = "top-[-250px] left-[200px] rotate-[135deg]";

// Top Right Image
const initial_TR = "translate-x-[100vw] translate-y-[-100vh]";
const final_TR = "top-[-200px] right-[150px] rotate-[-135deg]";

// Bottom Left Image
const initial_BL = "translate-x-[-100vw] translate-y-[100vh]";
const final_BL = "bottom-[-200px] left-[50px] rotate-[45deg]";

// Bottom Right Image
const initial_BR = "translate-x-[100vw] translate-y-[100vh]";
const final_BR = "bottom-[-200px] right-[50px] rotate-[-45deg]";


  return (
    <div className='relative flex flex-col items-start justify-center text-center min-h-screen overflow-x-hidden' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

      
      <AnimatedImage
        src={image1} 
        alt="Cocktail with flowers"
        initialClass={initial_TL}
        finalClass={final_TL}
        isAnimated={isAnimated}
      />
      <AnimatedImage
        src={image2} 
        alt="Courtyard interior"
        initialClass={initial_TR}
        finalClass={final_TR}
        isAnimated={isAnimated}
      />
      <AnimatedImage
        src={image3} 
        alt="Room interior"
        initialClass={initial_BL}
        finalClass={final_BL}
        isAnimated={isAnimated}
      />
      <AnimatedImage
        src={image4}
        alt="Sunrise in forest"
        initialClass={initial_BR}
        finalClass={final_BR}
        isAnimated={isAnimated}
      />
     


      <div className="z-10">
        <video
          // Required for image-like behavior
          autoPlay 
          loop
          muted
          playsInline 
          className='h-[300px] w-auto object-contain mx-auto'
        >
          <source src={logoVideo} type="video/webm" />
          {/* Fallback content for browsers that do not support the video tag or webm format */}
          Your browser does not support the video tag.
        </video>
        <h2 className='font-primary text-4xl text-brown mt-4 tracking-tight px-32'>
          Imagine mornings that smell of coffee blossoms, afternoons that echo
          with laughter in courtyards, and nights where the stars still put on a
          show.
        </h2>
        <h1 className='mt-6 text-9xl text-brown font-primary font-normal tracking-tighter'>Welcome to Kaira</h1>
      </div>
    </div>
  );
}