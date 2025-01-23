import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoPulseSharp } from 'react-icons/io5';

function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full text-black md:-translate-x-44 ">
      <div
        className="cursor-pointer p-3 bg-gray-200 rounded"
        onClick={toggleDropdown}
      >
        CONTACT
        <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▲
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full -translate-x-10  bg-white shadow-md mt-1 rounded">
          <div className="p-3 ">090 4628 9665</div>
          <p className="">support@superlativefitness.com</p>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
   <div className='py-[90px] bg-black '>
     <div className=" text-white flex flex-col md:flex-row items-center justify-between">
    
      <div className="text-center md:text-left px-9 ">
        <p className="text-5xl md:text-2xl pb-9  md:py-2 cursor-pointer text-slate-500 flex items-center">
          DIZZY <IoPulseSharp className="text-2xl text-yellow-900" />
          <span className="text-lime-500 ml-1">FIT</span>NESS
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <FaFacebook className="cursor-pointer hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>
      </div>

     
      <div className="mt-10 md:mt-0">
        <ContactDropdown />
      </div>
       
    </div>

    <div className='mt-[110px] border-t  '>
      <p className='text-white pt-4 text-center'>&copy; 2025 All Rights Reserved.</p>
    </div>
   </div>

   
  );
}

export default Footer;
