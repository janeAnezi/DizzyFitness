import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/gallery/contact_form.png';
import img2 from '../assets/img/gallery/blog2.png';
import img3 from '../assets/img/gallery/team3.png';
import img4 from '../assets/img/gallery/image4.png'
import img5 from '../assets/img/gallery/image7.png'
import img6 from '../assets/img/gallery/image8.png'
import img7 from '../assets/img/gallery/image1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Clients from './Clients';
import FastSelling from './FastSelling';

function Head() {
    const [count, setCount] = useState(0);
    const [aosKey, setAosKey] = useState(0); 
    const items = [
        {
            id: 1,
            title: 'Welcome To Dizzy Fitness',
            desc: 'Give your body the qualitative standard for healthy living has never been better. We are the one you have been looking for.',
            image: img1,
            btn: 'KNOW MORE',
        },
        {
            id: 2,
            title: 'FITNESS THERAPY',
            desc: 'Give your body the qualitative standard for healthy living has never been better. We are the one you have been looking for.',
            image: img2,
            btn: 'KNOW MORE BENEFITS',
        },
        {
            id: 3,
            title: 'GUARANTEED HEALTH',
            desc: 'Give your body the qualitative standard for healthy living has never been better. We are the one you have been looking for.',
            image: img3,
            btn: 'GET YOURS NOW',
        },
    ];

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % items.length);
            setAosKey((prevKey) => prevKey + 1); 
        }, 3000);

        return () => clearInterval(interval);
    }, [items.length]);

    
    useEffect(() => {
        AOS.init({
            duration: 3000,
            easing: 'ease-in-out', 
        });
    }, []);

    return (
        <div className=''>
            <div className="bg-white text-gray-500 ">

                <div className="relative w-screen h-[500px] overflow-hidden mb-10">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-transform duration-1000 ${
                                index === count ? 'translate-x-0' : 'translate-x-full'
                            }`}
                            style={{ transform: `translateX(${(index - count) * 100}%)` }}
                        >
                            <img src={item.image} alt="/" className="w-full h-full object-cover" />
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50"
                                key={`${aosKey}-${index}`} 
                            >
                                <h1
                                    data-aos="fade-up"
                                    className="text-center text-3xl font-bold text-blue-300 md:text-6xl"
                                >
                                    {item.title}
                                </h1>
                                <p
                                    data-aos="fade-up"
                                    className="text-center md:text-lg whitespace-normal mt-4 lg:w-4/6"
                                >
                                    {item.desc}
                                </p>
                                <button
                                    data-aos="fade-up"
                                    className="mt-8 px-8 font-thin font-mono py-3 bg-black text-white text-sm rounded-md hover:bg-red-700"
                                >
                                    {item.btn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




            <div className="relative bg-blue py-10 mb-16 ">

  <div className="absolute inset-0 white-stripe "></div>

 
  <div className="relative mx-12 z-10 flex gap-10 flex-col md:flex-row justify-between items-center  pt-10">
    <div className="text-center">
    <p className="mt-4 text-black font-bold text-3xl ">Home Setup</p>
      <img src={img6} alt="Home Setup" className="responsive-image" />
    </div>
    <div className="text-center">
    <p className="mt-4 text-black font-bold text-3xl">Gym House</p>
      <img src={img5} alt="Gym House" className="responsive-image" />
    </div>
    <div className="text-center">
    <p className="mt-4 text-black font-bold text-3xl">Office Setup</p>
      <img src={img4} alt="Office Setup" className
      ="responsive-image" />
    </div>
    <div className="text-center">
    <p className="mt-4 text-black font-bold text-3xl">School Setup</p>
      <img src={img7} alt="School Setup" className="responsive-image" />
    </div>
  </div>
</div>

<div>
<Clients/>
<FastSelling/>
</div>

        </div>
    );
}

export default Head;
