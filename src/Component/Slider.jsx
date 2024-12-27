import { useState} from "react";
import h1Hero from "../assets/img/hero/h1_hero.png";
import gallery4 from "../assets/img/gallery/herobg2.jpeg";
import gallery1 from "../assets/img/gallery/gallery4.png";
import { IoIosArrowForward,  IoIosArrowBack  } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Slider = () => {
  const slides = [
    {
      background: h1Hero,
      title: "Slide 1 Title",
      description: "This is the content for slide 1.",
    },
    {
      background: gallery4,
      title: "Slide 2 Title",
      description: "This is the content for slide 2.",
    },
    {
      background: gallery1,
      title: "Slide 3 Title",
      description: "This is the content for slide 3.",
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
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-50">
            <h1 className="text-2xl">{slides[currIndex].title}</h1>
            <p>{slides[currIndex].description}</p>
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

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex)=> (
            <div
             key={slideIndex}
             onClick={() => setCurrIndex(slideIndex)}
             className={`text-2xl cursor-pointer ${
               slideIndex === currIndex ? "text-gray-50" : "text-slate-500"
             }`}
           >
              <GoDotFill className="text-slate-500" />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Slider;
