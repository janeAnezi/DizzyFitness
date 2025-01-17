import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import img from '../assets/img/gallery/2-1.png'
import { IoPulseSharp } from 'react-icons/io5';
function Setup() {
  return (
    <div className="relative -z-10">
        <div className=' mt-[190px] relative'>
       <div className='md:mx-10'>
       <h6 className='text-sm text-gray-500 pb-4'>WHAT WE DO</h6>
        <h1 className=' text-4xl font-bold md:w-4/6  md:text-5xl tracking-wide pb-10 '>Turn Your Space To Fitness Destination</h1>

        <div className='grid grid-cols-1 gap-10  lg:grid-cols-2  overflow-hidden '>
            <div className='relative text-white hover:scale-105 transition-transform duration-200 ease-in-out h-[400px] overflow-hidden'>
                <img src="https://sportandfitnessinc.com/wp-content/uploads/2017/12/IMG_2168.jpg" alt="/" className='h-[100%] w-full' />
                <div className='absolute top-[40%] transform translate-x-7  lg:translate-x-15 '>
                    <p className='text-sm font-semibold'>HOME GYM SETUPS</p>
                    <h3 className='text-5xl lg:text-4xl font-bold py-2'>TAILORED FOR YOU</h3>

                    <Link to='/'><button className='flex items-center gap-2 my-9 bg-white py-3 px-6 text-gray-700'>Learn More <FaArrowRightLong/></button></Link>
                 </div>
            </div>
            <div className='relative text-white hover:scale-105 transition-transform duration-200 ease-in-out overflow-hidden h-[400px] ' >
                <Link to ='/'><img src="https://seampublishing.com/wp-content/uploads/2024/10/rubber-floor-690x500.jpg" alt="/" className='h-[100%] w-full' /></Link>
                <div className='absolute top-[40%] transform translate-x-7  lg:translate-x-15'>
                    <p className='text-sm font-semibold'>commercial gyms, corporate fitness centers</p>
                    <h3 className='text-5xl lg:text-4xl font-bold py-2'>COMPLETE GYM SETUP</h3>

                    <Link to='/'> <button className='flex items-center gap-2 my-9 bg-white py-3 px-6 text-gray-700'>Learn More <FaArrowRightLong/></button></Link>
                 </div>
            </div>
        </div>
       </div>

       <div className=' px-10 mt-[50px] bg-[#ebf0f3] grid grid-cols-1 md:grid-cols-2 items-center justify-center '>
        <div>
            <h1 className='font-bold text-4xl py-5 lg:text-7xl'>THOUGHT YOU KNEW WHAT FOR LOOKS LIKE?</h1>
            <p className='pb-6 pt-4 text-gray-700'>Start today and see the real magic of living healthy. Feel the change tat comes from simple daily steps and true dedication. </p>
            <button className='bg-black text-white py-3 my-10 px-7'>Shop Now</button>
        </div>
       <div>
            <img src={img} alt="" className='' />
        </div>
       </div>


       <div className=' mt-[60px]  items-center justify-between'>

       <div className='text-center md:text-left px-0 md:px-6'>
       <p className='text-sm' >WHO WE ARE</p>
        <h1 className='text-5xl font-semibold py-2 pb-5'>About Dizzy Fitness</h1>
        <p className='pb-10 md:w-1/2 '> <span className='font-semibold text-lg'>Dizzy Fitness</span> is a gym equipment store that provides the tools  you need to keep fit and give your body the structure you want. We also supply high quality physical fitness equipment to commercial gyms. </p>

        
      <div className='flex flex-col sm:flex-col  md:flex-row  justify-between pb-10'>

        <button className=' mx-3 md:mx-0 bg-black w-[50%] sm:w-[20%] md:w-[20%] cursor-pointer py-4 px-7 text-white hover:text-red-700 duration-200'>About Us</button>
        <div className=' flex item-center justify-center text-center md:text-left px-0 md:px-6 '>
        <p className='text-5xl py-24 md:py-0 cursor-pointer text-center text-slate-500 flex items-center'>  
         DIZZY <IoPulseSharp className="text-2xl text-yellow-900" /> <span className='text-lime-500 ml-1'>FIT</span>NESS
        </p>


</div>
</div>
       </div>

       </div>
    </div>
    </div>
  )
}

export default Setup