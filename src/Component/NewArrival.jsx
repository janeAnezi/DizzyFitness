import React, { useState } from 'react';
import Cards from './Cards';
import Eyes from './Eyes';
import { FaCaretRight } from "react-icons/fa";





function NewArrival({ selectedCategory = null, equipments = [] }) {
  const [translateX, setTranslateX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);

  const filteredEquipments = Array.isArray(equipments)
    ? equipments.filter(
        (equipment) =>
          !selectedCategory || equipment.category === selectedCategory
      )
    : [];

  const openModel = (index) => {
    setModalIndex(index);
    document.body.style.overflow = "hidden"; 
  };


  const renderView = (view = []) => {
    if (!Array.isArray(view)) {
      return <span></span>;
    }
    return view.map((item, index) => {
      if (item === "➡️") {
        return <FaCaretRight key={index} />;
      }
      return <span key={index}>{item}</span>;
    });
  };
  

  const closeModel = () => {
    setModalIndex(null);
    // document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <div
      className={`${
        modalIndex !== null ? "fixed inset-0 overflow-hidden " : ""
      }`}
    >
      <div className="mt-[100px]">
        <h1 className="text-5xl font-bold text-center mb-10">New Arrival</h1>
        <div className="relative">
          <div
            className={`grid gap-8 text-center text-white whitespace-nowrap md:grid cursor-pointer grid-flow-col transition-transform duration-500 scrollbar-hide`}
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {filteredEquipments.slice(12, 20).map((equipment, index) => (
              <Cards key={equipment.id}>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    className="w-[300px] bg-gray-700 mx-auto h-[300px] transition-transform rounded"
                    src={equipment.image}
                    alt={`Image for ${equipment.title}`}
                  />
                  <div className="text-gray-950 mb-0 pb-0 text-center">
                    <h1>{equipment.title}</h1>
                    <p className="line-through">{equipment.discount}</p>
                    <p>₦{equipment.price}</p>

                    {/* Eye Button */}
                    <div className="absolute w-10 top-4 right-28">
                      <button
                        onClick={() => openModel(index)}
                        className="font-medium text-2xl text-gray-950 transition-all duration-200 ease-in"
                      >
                        <div
                          className={`flex items-center ${
                            hoveredIndex === index ? "block" : "hidden"
                          }`}
                        >
                          <p className="text-sm bg-black text-white rounded-md  flex items-center gap-1">
                          {renderView(equipment.view)}
                          </p>
                          {equipment.eye}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className={`bg-blue-800 text-white w-[100%] duration-500 transition-transform ${
                      hoveredIndex === index ? "block" : "hidden"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </Cards>
            ))}
          </div>
        </div>

        {/* Movement Buttons */}
        <ul className="flex  items-center justify-center gap-1 mt-14">
          {Array(4)
            .fill()
            .map((_, index) => (
              <li
                key={index}
                onClick={() =>
                  setTranslateX((-((300 + 56) * (6 - 0)) / (4 - 1)) * index)
                }
                className="w-3 h-3 rounded-full bg-slate-500 hover:bg-slate-700 transition-all cursor-pointer"
              ></li>
            ))}
        </ul>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <Eyes isOpen={modalIndex !== null} onClose={closeModel} selectedEquipment={filteredEquipments[modalIndex + 12]} />
      )}
    </div>
  );
}

export default NewArrival;