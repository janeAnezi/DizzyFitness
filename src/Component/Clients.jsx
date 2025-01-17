import React from 'react';
import img1 from '../assets/img/gallery/image10.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import img2 from '../assets/img/gallery/gallery2.png'
import img3 from '../assets/img/gallery/gallery3.png'

function Clients() {
  return (
    <div className=' relative'>
         <div className="text-center ">
          <p className="text-lg font-bold">HEAR FROM THEM</p>
          <h1 className="text-5xl font-bold text-[#698cba] pt-6 pb-10">WHAT OUR CLIENTS SAY</h1>
        </div>

     
      <div className='relative'>
      <div className="relative   w-screen   -z-20">
        <img src={img1} alt="/" className="w-full  object-cover h-[180vh] md:h-[700px]  " />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      </div>

      <div className="absolute top-0 md:top-[20%]  left-0 w-full md:h-[400px] text-white z-30 flex flex-col justify-center items-center ">
       

          <div className="grid  mx-3  items-center justify-center grid-cols-1 md:grid-cols-3 gap-7 mt-8">
            <div>
                <div className="w-full text-center">
                <h6 className="text-lg text-[#698cba] font-semibold">ABOUT US</h6>
                <h1 className="text-5xl font-bold">WHO ARE WE?</h1>
             </div>
            </div>

          <div>
          <div className='broad overflow-hidden h-[250px] md:h-[300px]' >
                <img src={img2} alt="/" className='   h-[250px] md:h-[300px] w-full object-cover  mb-9 hover:scale-105  duration-200 ease-in-out' />
            </div>
            <p className='pt-16'> Dizzy Fitness is a gym equipment store that provides the tools you need to keep fit and give your body the structure you want. We also supply high quality physical fitness equipment to commercial gyms.</p>
            <p className='flex place-items-center gap-2 px-3 py-4 my-5 cursor-pointer text-[#698cba] font-bold hover:border-red-700 hover:border w-[150px] hover:animate-bounce-few  '> <FaArrowRightLong/>Know More </p>

          </div>


           
           <div>
           <p className='pb-16'>Dizzy Fitness is a gym equipment store that provides the tools you need to keep fit and give your body the structure you want. We also supply high quality physical fitness equipment to commercial gyms.</p>
           <div className='under overflow-hidden h-[250px] md:h-[300px] '>
                <img src={img3} alt="/" className=' h-[250px] md:h-[300px] w-full object-cover hover:scale-105  duration-200 ease-in-out' />
            </div>
           </div>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default Clients;
