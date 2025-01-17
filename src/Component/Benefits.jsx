import React from 'react'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
    <div>
       <div className="bg-white text-gray-500 pt-16">
                <div className="cursor-pointer p-10">
                    <Link to="/"> Home </Link>
                    <span> &gt; </span>
                    <Link to="/benefit"> Benefits </Link>
                </div>

                <div className="pb-[90px]">
                    <h1 className="text-center items-center pt-[70px] font-bold text-5xl text-black">BENEFITS</h1>
                </div>
                </div>

                <div className="first relative py-10 mb-10">
            <h1 className=" flex item-center  justify-center font-bold text-white text-8xl">BENEFITS</h1>
       </div>

       <div className='grid  place-items-center grid-cols-1  justify-center items-center'>
       <div  className='grid gap-3 px-3 my-5 grid-cols-1 md:grid-cols-2'>
       <div>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3Ni7B3JGpDyTZuTaa6nSfaWc_UP1t27zu61DphyVAoLMWaqv_" alt="/" className='h-[400px] object-cover' />
        </div>
        <div>
          <h1  className='font-bold py-3 text-3xl'>TREADMILL</h1>
          <p className=''>The Treadmill gives you unlimited running distance and time right in your home. Improve your heart function, lose weight, strengthen your leg muscles and build endurance with this automatic treadmill. The clear display gives you feedback on your performance.</p>
          <button className='bg-red-600 text-gray-700 hover:text-white hover:py-3 py-2 px-6 my-4'>ADD TO CART</button>
        </div>
       </div>


      
       <div className='grid  gap-3 mt-5 px-3  grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center bg-red-700 py-20'>
       <div className='px-3  text-white'>
          <h1 className='font-bold py-3 text-3xl '>Total Gym Fit</h1>
          <p className=''>Total Gym Fit gives you the benefits of up to four gym equipment in one. Exercise your upper body, lower body and core.Great for fitness routines including ROWING, PUSH UPS, AB CURLS, SIT UPS and ARM DIPS.</p>
          <button className='bg-black my-6 text-gray-700  hover:text-white rounded-md py-2 px-6'>ADD TO CART</button>
        </div>

        <div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7k7JvyTKljnpDvKME6vw-_m7y3EuFw0rgJfgj9va2E8ciaGW_" alt="/" className='  h-[400px] md:h-[450px] object-cover' />
        </div>
       </div>

       <div  className='grid px-3 gap-3 bg-black place-items-center py-10 justify-center items-center  mb-5 grid-cols-1 md:grid-cols-2'>
       <div className='place-items-center'>
          <img src="data:image/jpeg;base64,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" alt="/" className='h-[400px] object-cover' />
        </div>
        <div>
          <h1  className='font-bold py-3 text-white text-3xl '>Multi-functional Twist Stepper</h1>
          <p className='text-white '>3-in-1 twist machine that helps you lose excess fat in the waist and hips. Achieve well-toned stomach muscles with the  multi-functional Twist Stepper. Enjoy three major workout routines and their advantages in one machine – stepping, twisting and dumbbell workouts with this versatile equipment.</p>
          <button className='bg-red-600 text-gray-700 hover:text-white hover:py-3 py-2 px-6 my-4'>ADD TO CART</button>
        </div>
       </div>
        

        
       <div className='grid px-3 gap-3  mt-5  grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center  py-20'>
       <div className='px-3  '>
          <h1 className='font-bold py-3 text-3xl '>Sit Up Bench with Rope Dumbbel</h1>
          <p className=' '>The Sit Up Bench with Rope Dumbbell is a 5-in-1 body fitness machine. Build abs, burn stomach fat, build leg muscles and tone your biceps and triceps  with this versatile gym equipment. It includes dumbbells that are just the right weight to strengthen your arms and keep you in shape.</p>
          <button className='bg-black my-6 text-gray-700  hover:text-white rounded-md py-2 px-6'>ADD TO CART</button>
        </div>

        <div>
          <img src="https://m.media-amazon.com/images/I/619PAhlXPRL.jpg" alt="/" className='  h-[400px] md:h-[450px] object-cover' />
        </div>
       </div>
       </div>

       
    </div>
  )
}

export default Benefits
