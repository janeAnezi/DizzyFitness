import React from 'react';
import vid from '../assets/video/video.mp4'
import { FaFacebook, FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { SiOpenaigym } from "react-icons/si";
import { FaComments } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GrHostMaintenance } from "react-icons/gr";

const Services = () => {

  const cards = [
    {
      id:1,
      icon:<FaComments />,
      title:'DISCUSS',
      desc: 'First, We want to hear about what you want for your gym – the kind of machines you need, how you want it to look, and your budget.'
    },
    {
      id:2,
      icon:<FaTv />,
      title:'DESIGN',
      desc: 'Our gym design experts will bring your space to life with our visualization software, allowing you to see the finished project before any work commences'
    },
    {
      id:3,
      icon:<TbTruckDelivery />,
      title:'Delivery & Installation',
      desc: 'With your approval, we will bring everything and set up your gym the way you want it. Our team knows this work well and will set it up just like the one you saw as a sample.'
    },
    {
      id:4,
      icon:<GrHostMaintenance />,
      title:'MAINTENANCE',
      desc: 'Rest easy knowing weve got your back, always. Our service and maintenance game plan is proactive. Our routine check-up will ensure your gym remains in superlative shape.'
    }
  ] 
  return (
<div>
<div className='relative'>
      <video
        src={vid}
        autoPlay
        loop
        className="w-full h-[500px]  object-cover"
      />

<div className="text-white absolute inset-0 flex items-center justify-center">
  <h1 className="whitespace-normal mx-3 font-bold text-3xl md:text-6xl text-center">
    TURN YOUR SPACE INTO A FITNESS DESTINATION
  </h1>
</div>

    </div>

    <div className='py-32 flex gap-10 text-gray-600 mx-10 text-center  flex-col md:flex-row justify-center'>
      <div>
        <span className='flex  justify-center py-5 text-7xl'> <FaHome /></span>
        <h3 className='py-4 font-bold text-black'>HOME GYM</h3>
        <p className='whitespace-normal'>Worried about the stress of having to go out for a work-out? let's bring you the right gym facilties, upgrading your health at the comfort of your home.</p>
      </div>
      <div>
        <span className='flex justify-center py-5 text-7xl'> <FaSchool />
        </span>
        <h3 className='py-4 font-bold text-black'>SCHOOL GYM</h3>
        <p className='whitespace-normal'>Boost your student's well-being and vitality during their academic journey with top-notch fitness facilities to ensure a healthy body complements a sharp mind as they learn.</p>
      </div>
      <div>
        <span className='flex justify-center py-5 text-7xl'> <SiOpenaigym /></span>
        <h3 className='py-4 font-bold text-black'>COMMERCIAL GYM</h3>
        <p className='whitespace-normal'>Create a fitness hub that not only serves the community but also becomes a profitable venture for passionate enthusiasts like you.</p>
      </div>

    </div>

    <h1 className='text-center text-4xl md:text-6xl font-bold pb-10'>HOW WE OPERATE</h1>
    <div className='flex pb-10 text-center mx-11 text-gray-600 flex-col md:flex-row gap-8 '>
      {
        cards.map((item)=>(
          <div key={item.id} className='shadow-xl border rounded-3xl py-10'>
            <span className='flex justify-center py-5 text-7xl'>{item.icon}</span>
            <h3 className='py-3 text-3xl text-black px-3 font-semibold'>{item.title}</h3>
            <p className='whitespace-normal px-10 text-xl '>{item.desc}</p>
          </div>
        ))
      }
    </div>

    <div>
    <div className='text-center py-11 font-bold text-4xl mb-[120px]'>
        <h1 className='text-blue-800'>YOUR GO-TO FITNESS STORE</h1>
        <p className='w-40 bg-blue-800 h-2 my-2 mx-auto '></p>
        <p className='w-40 mx-auto bg-blue-800 h-2 my-2 flex skew-y-12'></p>
      </div>

      <div className='text-center pb-14'>
      <h1 className='text-black font-bold text-5xl'>CONTACT US TODAY</h1>
      <h2 className='text-blue-500 text-3xl font-semibold mx-2 py-2'>SUPPORT@DIZZYFITNESS.COM</h2>
      <div className='flex justify-center gap-3 py-4'>
       <div className='bg-black text-gray-600 py-3 px-3 text-lg hover:border-red-600 hover:text-red-600 hover:border-2 duration-100'> <FaFacebook /></div> <div className='bg-black text-gray-600 py-3 px-3 text-lg hover:border-red-600 hover:text-red-600 hover:border-2 duration-100'><FaInstagram /></div> <div className='bg-black text-gray-600 py-3 px-3 text-lg hover:border-red-600 hover:text-red-600 hover:border-2 duration-100'><FaWhatsapp /></div>
      </div>
      </div>

    </div>
</div>
  );
};

export default Services;
