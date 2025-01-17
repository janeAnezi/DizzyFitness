import React from 'react';
import { FaPaw } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa6";

function FastSelling() {
  const cards = [
    {
      id: 1,
      image:
        'https://cdn.fitshop.co.uk/pictures/bodymax/freeweights_benches_and_accessories/GRPBDYMRUBHX2/hex_rubber_dumbbell1600_1600.jpg',
      title: 'HEX DUMBBELL',
      desc: 'The medium depth knurling on the contoured chrome handle provides essential grip and security during use, so your hands do not slip while working up a sweat.',
      price: {
        original: '88,000',
        discount: '57,000',
      },
      btn: 'GET YOURS NOW',
    },
    {
      id: 2,
      image:
        'https://www-konga-com-res.cloudinary.com/f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/V/176475_1624719925.jpg',
      title: 'Wonder Core With Resistance Band',
      desc: 'Knee sliding, Knee mountain climbing, Side Waist intensifying exercises to help burn more calories, kill cellulite.',
      price: {
        original: '97,000',
        discount: '85,000',
      },
      btn: 'GET YOURS NOW',
    },
    {
      id: 3,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX1_bJBcLvIixUyicpxc5N6GTGMkgH6uMWA&s',
      title: 'Exercise Spinning Bike',
      desc: 'Sturdy Construction: Our Exercise Bike equipped with a heavy-duty square tube with a heavy duty bidirectional flywheel 24.2 lbs and holds up to 330LBS.',
      price: {
        original: '204,000',
        discount: '185,000',
      },
      btn: 'GET YOURS NOW',
    },
    {
      id: 4,
      image:
        'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/96/7450683/1.jpg?7225',
      title: 'EXECUTIVE CHAIR MASSAGER',
      desc: 'L-track system is a shape of roller trail designed to supports to your neck to back and all the way to buttocks and the spine.',
      price: {
        original: '1,200,00',
        discount: '950,000',
      },
      btn: 'GET YOURS NOW',
    },
  ];

  const formatPrice = (amount) =>
    `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 0 })}`;

  return (
    <>
    <div className="fast py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-white text-center ">Fast Selling Products</h2>
      <p className='text-white text-center text-lg mb-8'>Check out our fast selling hot products on sale, get yours at discounted
      prices while stock Last.</p>
      <div className="mx-11 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((item) => (
          <div
            key={item.id}
            className= " bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg text-center font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <div className="flex text-lg text-black justify-center gap-2 items-center mb-4">
                <span className=" font-bold">
                  {formatPrice(item.price.discount)}
                </span>
                <span>|</span>
                <span className="line-through ">
                  {formatPrice(item.price.original)}
                </span>
              </div>
              <button className="bg-black text-red-600 w-full py-2 rounded-lg hover:border hover:border-red-600 hover:text-white cursor-pointer transition duration-300">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex py-32 flex-col mx-10 text-center md:flex-row gap-10'>
        <div>
            <span className='flex justify-center items-center text-7xl py-3'><FaPaw /></span>
            <h2 className='py-3 text-2xl font-bold'>BECOME STRONGER</h2>
            <p  className='whitespace-normal text-gray-500'>Strength taining will make you a monster of the iron world with incredible power</p>
            </div>

            <div>
                <span className='flex justify-center items-center text-7xl py-3'><FaChalkboardTeacher /></span>
            <h2 className='py-3 text-2xl font-bold'>BE YOUR OWN INSTRUCTOR</h2>
            <p className='whitespace-normal text-gray-500'>You dont need a home training or instructor, all you need is our gym equipment, tailored to shape you better.</p>
            </div>

            <div>
                <span className='flex justify-center items-center text-7xl py-3'><FaPersonBooth /></span>
            <h2 className='py-3 text-2xl font-bold'>AESTHETICS OF THE BODY</h2>
            <p className='whitespace-normal text-gray-500'>Our gym facilities and equipments will not only make your body strong but also beautiful</p>
            </div>
    </div>

    <div className='shop mb-[20px] py-16'>
        <div className=' mx-10 grid gap-10 grid-cols-1 md:grid-cols-3 justify-center items-center'>
      <div className='col-span-2 text-white font-bold text-3xl whitespace-normal'>
      <h1 >YOU THINK YOU HAVE SEEN IT ALL? SEE THE BEAUTY AND REALITY OF HEALTHY LIVING</h1>
      </div>
        <div className='flex '>
        <button className='text-red-600 py-3 px-9 font-bold bg-white mx-auto'>SHOP NOW</button>
        </div>
        </div>
    </div>
    </>
  );
}

export default FastSelling;
