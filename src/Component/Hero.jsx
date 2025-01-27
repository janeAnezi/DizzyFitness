import React from 'react';
import Cards from './Cards';
import blog from '../assets/img/gallery/dez.png'
import blog2 from '../assets/img/gallery/diz.png'
import {  FaArrowRightLong } from 'react-icons/fa6';

function Hero({ selectedCategory = null, equipments = [],  isOpen, onClose,  modalIndex  }) {
  console.log('Hero component rendered');
  const filteredEquipments = Array.isArray(equipments)
    ? equipments.filter(
        (equipment) =>
          !selectedCategory || equipment.category === selectedCategory
      )
    : [];

  return (
    <div  className={`transition-all duration-300 ${
      isOpen ? " overflow-hidden hidden " : ""
    }`} >
      <div className="md:grid md:grid-cols-3 py-3 mx-8 pt-[100px]">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl pb-4 w-[400px] md:w-full leading-snug">
            DISCOVER OUR BEST SELLER CATEGORIES
          </h2>
        </div>


        <div className="md:col-span-2">
         
          <div className=" grid text-center flex-shrink-0 text-white whitespace-nowrap md:grid cursor-pointer grid-flow-col overflow-x-auto scroll-smooth scrollbar-hide md:scrollbar-thin  scrollbar-thumb-black scrollbar-track-gray-300">
          
            {filteredEquipments.slice(10, 15).length > 0 ? (
              filteredEquipments.slice(10, 15).map((equipment) => (
                <Cards key={equipment.id}>
                  <img
                    className="w-[350px] bg-gray-700 mx-auto h-[300px]"
                    src={equipment.image}
                    alt={`Image for ${equipment.title}`}
                  />
                   <div className="bg-black    border-black mb-0 pb-0 h-16 flex flex-wrap items-center justify-center border-4">
                   <h1 className=" mx-10 whitespace-normal ">
                   {equipment.title}
                 </h1>
               </div>
                </Cards>
              ))
            ) : (
              <p>No equipment available in this category.</p>
            )}
          </div>
        </div>


        
      </div>

      <div className='flex md:flex-row flex-col justify-center mx-auto gap-5 md:h-[750px] w-screen mt-[50px]'>
  <div className='overflow-hidden  h-[100%] md:w-[590px] relative'>
    <img
      src={blog}
      alt="/"
      className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
    />
     <div className='absolute z-20 text-gray-950 bottom-[13%] mx-5 '>
     <h6 className='text-white text-md mb-3 '>WEIGHT LOSS</h6>
      <h2 className='text-white text-4xl md:text-5xl mb-12 font-semibold'>BURN EXCESS CALORIES</h2>
      <button className='flex gap-3 items-center bg-white py-4 px-8 mt-6 '>Shop Now <FaArrowRightLong/></button>
     </div>
  </div>
  <div className='overflow-hidden h-[100%] md:w-[590px] relative'>
    <img
      src={blog2}
      alt="/"
      className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
    />
      <div className='absolute z-20 text-gray-950 bottom-[2%] mx-5 '>
     <h6 className='text-white text-md mb-3 '>MUSCLE TRAIN</h6>
      <h2 className='text-white text-4xl md:text-5xl mb-12 font-semibold'>STRENGTH TRAINING</h2>
      <button className='flex gap-3 items-center bg-white py-4 px-8 mt-6 '>Shop Now <FaArrowRightLong/></button>
     </div>
  </div>
</div>

    </div>
  );
}

export default Hero;
