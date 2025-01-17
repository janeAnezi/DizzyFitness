import { useState} from "react";
import h1Hero from "../assets/img/hero/h1_hero.png";
import gallery4 from "../assets/img/gallery/herobg2.jpeg";
import gallery1 from "../assets/img/gallery/gallery4.png";
import { IoIosArrowForward,  IoIosArrowBack  } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
  const slides = [
    {
      background: h1Hero,
      title: "BUILD PERFECT BODY WITH SUPERLATIVE FITNESS",
      description: "DISCOVER THE POWER OF EVERYDAY WORKOUTS",
    },
    {
      background: gallery4,
      title: "YOUR HEALTHIEST YOU STARTS TODAY",
      description: "MORE THAN FITNESS, IT'S A LIFESTYLE",
    },
    {
      background: gallery1,
      title: "CHOOSE THE BEST, CHOOSE SUPERLATIVE",
      description: "FIT TODAY, STRONGER TOMORROW",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0)
  const prevSlide = () => {
    const firstSlide = currIndex === 0;
    setCurrIndex(firstSlide ? slides.length - 1 : currIndex - 1);
  }
  const nextSlide = () => {
    const lastSlide = currIndex === slides.length - 1;
    setCurrIndex(lastSlide ? 0 : currIndex + 1);
  }


  return (
    <div className="max-w-[1400px] h-[450px] w-full m-auto relative group">
      <div style={{backgroundImage: `url(${slides[currIndex].background})`}} 
        className="w-full h-full bg-center bg-cover duration-500">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-50">
            <h1 className=" text-sm md:text-sm">{slides[currIndex].title}</h1>
            <p className=" w-4/5 text-2xl tracking-wider leading-normal md:text-5xl font-bold py-3">{slides[currIndex].description}</p>
            <button className="flex gap-2 item-center place-items-center bg-white py-4 px-10 text-black  justify-center">Shop Now <FaArrowRightLong/></button>
        </div>
      </div>
        <div  
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-gray-400 cursor-pointer z-10">
          < IoIosArrowBack size={30} onClick={prevSlide}  />
        </div>
        <div 
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-gray-400 cursor-pointer z-10">
            <IoIosArrowForward size={30} onClick={nextSlide}/>
        </div>

        <div className="absolute inset-x-0 z-30 bottom-[15%] flex justify-center py-2">
          {slides.map((slide, slideIndex)=> (
            <div
             key={slideIndex}
             onClick={() => setCurrIndex(slideIndex)}
             className={`text-2xl cursor-pointer ${
               slideIndex === currIndex ? "text-teal-600 " : "text-slate-800"
             }`}
           >
              <GoDotFill />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Slider;
