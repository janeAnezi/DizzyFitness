import { useState} from "react";
import h1Hero from "../assets/img/hero/h1_hero.png";
import gallery4 from "../assets/img/gallery/gallery4.png";
import gallery1 from "../assets/img/gallery/gallery1.png";

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
        <div style={{backgroundImage: `url(${slides[0].background})`}} className="w-full h-full bg-center bg-cover duration-500"></div>
    </div>
  );
};

export default Slider;
