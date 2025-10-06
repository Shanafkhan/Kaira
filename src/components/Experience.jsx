import image from "../assets/images/Experience.png";
import bgimg from "../assets/images/experience-background.png";

export default function Experience() {
  return (
    <div
      className="font-primary text-[#F3E7D3] py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <div className="px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl sm:text-6xl md:text-8xl tracking-tighter pb-8 sm:pb-12 border-b-2 border-[#F3E7D3] text-center md:text-left">
          The Kaira Experience
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center pt-8 sm:pt-12 gap-10 md:gap-0">
        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={image}
            alt="Experience"
            className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-10 lg:px-16">
          {[
            {
              title: "Tradition meets comfort",
              subtitle: "Old-school charm, new-age ease.",
            },
            {
              title: "It feels like home",
              subtitle: "Even if you’ve just arrived.",
            },
            {
              title: "Nature does the heavy lifting",
              subtitle: "Shade, breeze, silence, all included.",
            },
            {
              title: "We do the rest",
              subtitle: "Management, rentals, plantations, upkeep.",
            },
          ].map((item, index) => (
            <div key={index} className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="font-secondary text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {item.title}
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tighter pt-2 sm:pt-4">
                {item.subtitle}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10 sm:mt-12 md:mt-16 px-4">
        <button className="text-lg sm:text-2xl md:text-3xl rounded-[50px] sm:rounded-[70px] px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border-2 border-[#F3E7D3] font-secondary font-bold cursor-pointer hover:bg-[#F3E7D3] hover:text-[#2C2C2C] transition-all duration-300">
          Download Our Brochure Now!
        </button>
      </div>
    </div>
  );
}
