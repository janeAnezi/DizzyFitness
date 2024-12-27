import { useState} from "react";
import h1Hero from "../assets/img/hero/h1_hero.png";
import gallery4 from "../assets/img/gallery/herobg2.jpeg";
import gallery1 from "../assets/img/gallery/gallery4.png";
import { IoMdArrowRoundForward, IoMdArrowRoundBack  } from "react-icons/io";

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



  return (
    <div className="max-w-[1400px] h-[450px] w-full m-auto relative">
      <div style={{backgroundImage: `url(${slides[0].background})`}} 
        className="w-full h-full bg-center bg-cover  duration-500">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-50">
            <h1 className="text-2xl">{slides[0].title}</h1>
            <p>{slides[0].description}</p>
        </div>
      </div>
        <div><IoMdArrowRoundBack size={30} className="text-gray-50" /></div>
        <div><IoMdArrowRoundForward size={30} className="text-gray-50" /></div>
    </div>
  );
};

export default Slider;
