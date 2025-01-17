import pic from '../assets/img/gallery/boy1.png'
const About = () => {
  return (
   <div>
     <div className=" h-[395px] relative my-[100px] z-0">
       <div className="first relative h-32">
        <h1 className=" flex item-center  justify-center font-bold text-white text-5xl">ABOUT US</h1>
       </div>
       <div className="  second -z-50 h-44 mt-[50px] ">
        <div className=' absolute -top-10 -left-16  z-50'>
          <img src={pic} alt="/" className='h-[392px] object-cover' />
        </div> 

        <div className="text-white hidden md:flex justify-center items-center   h-full">
  <div className=" text-center ">
    <h1 className="font-bold text-4xl mb-3">Who Are We?</h1>
    <p className="flex w-1/2 justify-center mx-auto items-center text-center whitespace-normal  pb-1   ">
      Dizzy Fitness is an online gym equipment store that caters to both individuals and commercial enterprises. 
      We sell the best body exercise apparatus and deliver to you wherever you are.
    </p>
  </div>
</div>

       </div>
    </div>

    <div className="text-gray-600  md:hidden  pb-6 -mt-16 ">
     <div className=" text-center ">
  <h1 className="font-bold text-4xl mb-4">Who Are We?</h1>
  <p className="flex justify-end items-r whitespace-normal  ">
    Dizzy Fitness is an online gym equipment store that caters to both individuals and commercial enterprises. 
    We sell the best body exercise apparatus and deliver to you wherever you are.
  </p>
</div>
</div>

<div className='third relative text-white text-center py-20 mb-20 px-10 '>
  <p className='absolute top-0 left-0 h-full right-0 bg-black/20'></p>

  <h1 className='font-bold text-2xl text-[#3488f5] pb-6'>WHY CHOOSE US ?</h1>
  <div className='grid grid-cols-1 gap-3 md:grid-cols-3 '>
    <div className='px-4'>
      <h1 className='py-4 font-bold text-2xl text-white uppercase'>Integrity</h1>
      <p className='whitespace-normal text-lg'> We recognize the importance of your health and physical fitness. As a result, we provide only accurate information that is beneficial to you. Our equipment is of the highest quality, posing zero health hazards to the user.</p>
    </div>

    <div className='border-l-2 px-4 border-r-2 '>
      <h1 className='py-4 font-bold text-2xl uppercase'>Personalize Services</h1>
      <p className='whitespace-normal text-lg'>At Superlative Fitness, we know that everyone has unique needs. We add a personal touch while supporting you in your body improvement journey. We offer the best equipment that help you attain your body goals.</p>
    </div>

    <div className='px-4'>
      <h1 className='py-4 font-bold text-2xl uppercase'>Full Support</h1>
      <p className='whitespace-normal text-lg'>We don’t stop at providing you the best exercise equipment. We make sure that your satisfaction is complete by assisting with installation and after sales support. We don’t stop till you reach your body goals.</p>
    </div>
  </div>
</div>
   </div>
  )
}

export default About

