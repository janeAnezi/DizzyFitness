import React, { useState, useRef } from 'react';
import { FaCaretRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import { useToast } from './Toast';
import Cards from './Cards';
import Eyes from './Eyes';

const ITEMS_PER_PAGE = 8;
const CARD_WIDTH = 300;
const CARD_GAP = 56;

function NewArrival({ selectedCategory = null, equipments = [] }) {
  const dispatch = useDispatch();
  const showToast = useToast();
  const [translateX, setTranslateX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const containerRef = useRef(null);

  const filteredEquipments = equipments?.filter(
    equipment => !selectedCategory || equipment.category === selectedCategory
  ).slice(12, 20);

  const handleAddToCart = (equipment) => {
    dispatch(addToCart({
      id: equipment.id,
      image: equipment.image,
      title: equipment.title,
      discount: equipment.discount,
      price: equipment.price,
      quantity: 1
    }));
    showToast(equipment.title);
  };

  const renderView = (view = []) => {
    if (!Array.isArray(view)) return null;
    
    return view.map((item, index) => (
      item === "➡️" ? 
        <FaCaretRight key={index} /> : 
        <span key={index}>{item}</span>
    ));
  };

  const toggleModal = (index = null) => {
    setModalIndex(index);
  };

  const calculateSlidePosition = (index) => {
    const totalWidth = (CARD_WIDTH + CARD_GAP) * (ITEMS_PER_PAGE - 1);
    const position = -(totalWidth / (4 - 1)) * index;
    setTranslateX(position);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="mt-[100px]">
        <h1 className="text-5xl font-bold text-center mb-10">New Arrival</h1>
        
        <div className="relative">
          <div
            className="grid gap-8 text-center text-white whitespace-nowrap md:grid cursor-pointer grid-flow-col transition-transform duration-500 scrollbar-hide"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {filteredEquipments.map((equipment, index) => (
              <Cards key={equipment.id}>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    className="w-[300px] bg-gray-700 mx-auto h-[300px] transition-transform rounded"
                    src={equipment.image}
                    alt={equipment.title}
                  />
                  
                  <div className="text-gray-950 mb-0 pb-0 text-center">
                    <h1 className="whitespace-normal">{equipment.title}</h1>
                    <p className="line-through">{equipment.discount}</p>
                    <p>₦{equipment.price}</p>

                    {hoveredIndex === index && (
                      <div className="absolute w-10 top-4 right-28">
                        <button
                          onClick={() => toggleModal(index)}
                          className="font-medium text-2xl text-gray-950 transition-all duration-200 ease-in"
                        >
                          <div className="flex items-center">
                            <p className="text-sm bg-black text-white rounded-md flex items-center gap-1">
                              {renderView(equipment.view)}
                            </p>
                            {equipment.eye}
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  {hoveredIndex === index && (
                    <button
                      onClick={() => handleAddToCart(equipment)}
                      className="bg-blue-800 text-white w-full duration-500 transition-transform"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </Cards>
            ))}
          </div>
        </div>

        <ul className="flex items-center justify-center gap-1 mt-14">
          {Array(4).fill().map((_, index) => (
            <li
              key={index}
              onClick={() => calculateSlidePosition(index)}
              className="w-3 h-3 rounded-full bg-slate-500 hover:bg-slate-700 transition-all cursor-pointer"
            />
          ))}
        </ul>
      </div>

      {modalIndex !== null && (
        <Eyes
          isOpen={true}
          onClose={() => toggleModal(null)}
          selectedEquipment={filteredEquipments[modalIndex]}
          containerRef={containerRef}
        />
      )}
    </div>
  );
}

export default NewArrival;