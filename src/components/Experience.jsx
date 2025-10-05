import image from "../assets/images/Experience.png";
import bgimg from "../assets/images/experience-background.png"

export default function Experience(){
    return(
        <div className="font-primary pt-14 text-[#F3E7D3] pb-8" style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover' }}>
            <div>
                <h1 className="text-8xl  tracking-tighter pl-8 pb-16 border-b-2 border-[#F3E7D3]">
                    The Kaira Experience
                </h1>
            </div>
            <div className="flex items-center pt-12">
                <div className="w-1/2 flex items-center justify-center">
                    <img src={image} alt="" className="h-[600px] w-[600px]"/>
                </div>
                <div className="w-1/2 p-6">
                    <div>
                        <h2 className="font-secondary text-5xl font-bold">Tradition meets comfort </h2>
                        <h3 className="text-4xl pb-6 font-light tracking-tighter pt-4">Old-school charm, new-age ease.</h3>
                    </div>
                     <div>
                        <h2 className="font-secondary text-5xl font-bold">It feels like home</h2>
                        <h3 className="text-4xl pb-6 font-light tracking-tighter pt-4">Even if you’ve just arrived.</h3>
                    </div>
                     <div>
                        <h2 className="font-secondary text-5xl font-bold">Nature does the heavy lifting</h2>
                        <h3 className="text-4xl pb-6 font-light tracking-tighter pt-4">Shade, breeze, silence, all included.</h3>
                    </div>
                     <div>
                        <h2 className="font-secondary text-5xl font-bold">We do the rest</h2>
                        <h3 className="text-4xl pb-6 font-light tracking-tighter pt-4">Management, rentals, plantations, upkeep.</h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="text-4xl rounded-[80px] px-8 py-6 border-2 border-[#F3E7D3] font-secondary font-bold cursor-pointer">
                    Download Our Brochure Now!
                </button>
            </div>
        </div>
    );
}