import { useState, useEffect } from "react";
import logoVideo from "../assets/vedio/kaira_logo_ved.webm";
import background from "../assets/images/Hero-background.png";
import ImageSlider from "./imageSlider";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";

// Reusable Animated Image Component
const AnimatedImage = ({ src, alt, initialClass, finalClass, isAnimated }) => {
  const classes = `
    absolute transition-all duration-[1500ms] ease-out
    ${finalClass}
    ${isAnimated ? "opacity-100" : `${initialClass} opacity-0`}
    w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[450px]
    object-contain overflow-hidden
  `;

  const imageClasses =
    "w-full h-full object-contain hover:scale-105 transition-transform overflow-hidden";

  return (
    <div className={classes}>
      <img src={src} alt={alt} className={imageClasses} />
    </div>
  );
};

// Text Content
const HERO_CONTENT = [
  {
    h2: "Imagine mornings that smell of coffee blossoms, afternoons that echo with laughter in courtyards, and nights where the stars still put on a show.",
    h1: "Welcome to Kaira",
  },
  {
    h2: "ಕಾಫಿ ಹೂವುಗಳ ವಾಸನೆ ಬೀರುವ ಬೆಳಿಗ್ಗೆಗಳನ್ನು, ಅಂಗಳದಲ್ಲಿ ನಗುವಿನೊಂದಿಗೆ ಪ್ರತಿಧ್ವನಿಸುವ ಮಧ್ಯಾಹ್ನಗಳನ್ನು ಮತ್ತು ನಕ್ಷತ್ರಗಳು ಇನ್ನೂ ಪ್ರದರ್ಶನ ನೀಡುವ ರಾತ್ರಿಗಳನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ.",
    h1: "ಕೈರಾಗೆ ಸ್ವಾಗತ",
  },
];

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [phase, setPhase] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  useEffect(() => {
    // Trigger initial animation
    const initialTimer = setTimeout(() => setIsAnimated(true), 100);

    // Cycle every 6 seconds
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setIsAnimated(false);

      setTimeout(() => {
        // Move forward by 4 so that all 7 images appear over time
        setPhase((prev) => (prev + 4) % images.length);
        setIsTextVisible(true);
        setIsAnimated(true);
      }, 300);
    }, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [images.length]);

  // Helper to get next image by offset
  const getCurrentImageSrc = (offset) => {
    const imageIndex = (phase + offset) % images.length;
    return images[imageIndex];
  };

  // Initial/Off-screen positions
  const initial_TL = "translate-x-[-100vw] translate-y-[-100vh]";
  const initial_TR = "translate-x-[100vw] translate-y-[-100vh]";
  const initial_BL = "translate-x-[-100vw] translate-y-[100vh]";
  const initial_BR = "translate-x-[100vw] translate-y-[100vh]";

  // Final/Visible positions
  const final_TL = "top-[-250px] left-[200px] rotate-[135deg]";
  const final_TR = "top-[-200px] right-[150px] rotate-[-135deg]";
  const final_BL = "bottom-[-200px] left-[50px] rotate-[45deg]";
  const final_BR = "bottom-[-200px] right-[50px] rotate-[-45deg]";

  const currentContent = HERO_CONTENT[phase % HERO_CONTENT.length];

  const textTransitionClass = `
    transition-opacity duration-700 ease-in-out
    ${isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
  `;

  return (
    <>
      <div
      className="relative hidden md:flex flex-col items-center justify-center text-center min-h-[600px] md:min-h-screen overflow-hidden px-4 sm:px-10 md:px-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Images - 4 positions */}
      <AnimatedImage
        src={getCurrentImageSrc(0)}
        alt="Top Left Image"
        initialClass={initial_TL}
        finalClass={final_TL}
        isAnimated={isAnimated}
      />
      <AnimatedImage
        src={getCurrentImageSrc(1)}
        alt="Top Right Image"
        initialClass={initial_TR}
        finalClass={final_TR}
        isAnimated={isAnimated}
      />
      <AnimatedImage
        src={getCurrentImageSrc(2)}
        alt="Bottom Left Image"
        initialClass={initial_BL}
        finalClass={final_BL}
        isAnimated={isAnimated}
      />
      <AnimatedImage
        src={getCurrentImageSrc(3)}
        alt="Bottom Right Image"
        initialClass={initial_BR}
        finalClass={final_BR}
        isAnimated={isAnimated}
      />

      {/* Main content */}
      <div className={`z-10 max-w-5xl ${textTransitionClass}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[150px] sm:h-[200px] md:h-[300px] w-auto object-contain mx-auto"
        >
          <source src={logoVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <h2 className="font-primary text-base sm:text-xl md:text-2xl lg:text-3xl text-brown mt-4 tracking-tighter px-4 sm:px-10">
          {currentContent.h2}
        </h2>

        <h1 className="mt-4 sm:mt-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brown font-primary font-medium tracking-tighter">
          {currentContent.h1}
        </h1>
      </div>
    </div>
    <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="md:hidden p-5 flex flex-col items-center">
        <div className={`z-10 max-w-5xl ${textTransitionClass}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[150px] sm:h-[200px] md:h-[300px] w-auto object-contain mx-auto"
        >
          <source src={logoVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div>
          <h2 className="font-primary text-base text-center sm:text-xl md:text-2xl lg:text-3xl text-brown mt-4 tracking-tighter px-4 sm:px-10">
          {currentContent.h2}
        </h2>

        <h1 className="mt-4 sm:mt-6 text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brown font-primary font-medium tracking-tighter">
          {currentContent.h1}
        </h1>
        </div>
        
        <div className="max-w-[400px] overflow-clip pt-10">
          <ImageSlider/>
        </div>
        
      </div> 


    </div>

    </>
    
  );
}
