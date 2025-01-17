import React from 'react'

function Follow() {
  return (
    <div className='mt-[150px]'>
      <div className='text-center font-bold text-4xl mb-[120px]'>
        <h1>YOUR GO-TO FITNESS STORE</h1>
        <p className='w-40 bg-yellow-900 h-2 my-2 mx-auto '></p>
        <p className='w-40 mx-auto bg-yellow-900 h-2 my-2 flex skew-y-12'></p>
      </div>

      <div>
        <h2 className='text-center text-2xl font-semibold pb-5'>FOLLOW ON INSTAGRAM</h2>
        <p className='text-gray-500 pb-10 text-center'>Dive into our fitness and journey and get inspired. Follow us for daily motivation and expert tips!</p>

        <div className='grid  grid-cols-1 lg:grid-cols-4 gap-4 mx-10 '>
          <div className='lg:col-span-2'><img src="https://hips.hearstapps.com/hmg-prod/images/mh-working-hard-for-healthy-body-royalty-free-image-1049036858-1561224541.jpg?crop=0.601xw:0.899xh;0.228xw,0.101xh&resize=1200:*" alt="" className=' object-cover' /> </div>
          <div>
            <div className=''>
              <img src="https://i.ebayimg.com/images/g/TX4AAOSwJnlc3twa/s-l1200.jpg" alt="/" className='pb-3 w-[100%] h-[400px] object-cover' />
              <img src="https://img.freepik.com/premium-photo/confident-female-basketball-player-court_935394-15509.jpg" alt="" className='h-[400px] object-cover w-[100%]' />
            </div>
          </div>
          <div> <img src="https://cdn.shopify.com/s/files/1/0591/3156/0089/files/600X360_07_M.jpg?v=1726738203" alt="" className='h-[500px] object-cover' /></div>
        </div>

        <h3 className="text-center py-20 relative cursor-pointer">
      <span className="border-b-1 border-black transition-all duration-300 ease-in-out hover:border-opacity-0 origin-left text-sm ">
        GO TO INSTAGRAM
      </span>
      </h3>

      <div className='bg-[#ebf0f3] py-32 mb-[60px]'>
        <h1 className='text-4xl font-semibold text-center pb-3 '>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className='text-center'>Receive an exclusive 10% discount code when you signup.</p>
        <div className='flex pb-1 w-4/6 md:w-1/2 border-b border-gray-700 justify-between  pt-10  mx-auto '>
        <input type="email" placeholder='Enter Email *' className='text-gray-500 bg-[#ebf0f3] outline-0' />
        <button className='hover:border hover:border-red-500 hover:py-2 hover:px-6 text-sm'>SUBSCRIBE</button>
        </div>
        <span className='w-[50px] h-2 bg-gray-600'></span>
      </div>

      </div>
    </div>
  )
}

export default Follow