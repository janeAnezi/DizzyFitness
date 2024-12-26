import { useState, useEffect } from "react";
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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen h-screen flex flex-col justify-center items-center text-slate-800"
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl">{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-slate-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-2xl bg-black/50 p-2 rounded-full"
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-2xl bg-black/50 p-2 rounded-full"
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
