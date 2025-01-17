import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleItem() {
    const data = useLoaderData();
    const {title, image, category, price, discount, content} = data[0]
  return (
    <div>

<div className='max-w-7xl mx-10 my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
        <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />
            <h2 className='text-3xl font-bold mb-4 text-orange-500 cursor-pointer mt-8'>{title}</h2>
        <p className='flex items-center mb-3 tex'><FaUser className='inline-flex items-center mr-1'/> {category}</p>
        <p className='flex items-center mb-3 tex'><FaClock className='inline-flex items-center mr-1'/> {reading_time}</p>
        <p className='text-base text-gray-500 mb-6'>{content}</p>

        <div  className='text-base text-gray-500 mb-6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit facilis libero illum repellendus, suscipit commodi, obcaecati illo alias corporis quibusdam excepturi expedita, accusantium fugit consectetur perspiciatis animi hic cupiditate. Accusantium officiis quos asperiores recusandae delectus ipsam pariatur reprehenderit distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius voluptatibus minima reiciendis cum. Eum error, repellendus, nulla odio dolor libero aspernatur sint voluptatem architecto tempora assumenda laborum minus recusandae!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste amet culpa facilis, sequi dolor quam repellat perspiciatis quaerat unde animi, laborum aspernatur vitae repudiandae ratione? Impedit culpa quos magnam saepe, pariatur dolorem neque quaerat fugiat corrupti recusandae tenetur quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit facilis libero illum repellendus, suscipit commodi, obcaecati illo alias corporis quibusdam excepturi expedita, accusantium fugit consectetur perspiciatis animi hic cupiditate. Accusantium officiis quos asperiores recusandae delectus ipsam pariatur reprehenderit distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius voluptatibus minima reiciendis cum. Eum error, repellendus, nulla odio dolor libero aspernatur sint voluptatem architecto tempora assumenda laborum minus recusandae!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste amet culpa facilis, sequi dolor quam repellat perspiciatis quaerat unde animi, laborum aspernatur vitae repudiandae ratione? Impedit culpa quos magnam saepe, pariatur dolorem neque quaerat fugiat corrupti recusandae tenetur quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit facilis libero illum repellendus, suscipit commodi, obcaecati illo alias corporis quibusdam excepturi expedita, accusantium fugit consectetur perspiciatis animi hic cupiditate. Accusantium officiis quos asperiores recusandae delectus ipsam pariatur reprehenderit distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius voluptatibus minima reiciendis cum. Eum error, repellendus, nulla odio dolor libero aspernatur sint voluptatem architecto tempora assumenda laborum minus recusandae!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste amet culpa facilis, sequi dolor quam repellat perspiciatis quaerat unde animi, laborum aspernatur vitae repudiandae ratione? Impedit culpa quos magnam saepe, pariatur dolorem neque quaerat fugiat corrupti recusandae tenetur quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit facilis libero illum repellendus, suscipit commodi, obcaecati illo alias corporis quibusdam excepturi expedita, accusantium fugit consectetur perspiciatis animi hic cupiditate. Accusantium officiis quos asperiores recusandae delectus ipsam pariatur reprehenderit distinctio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius voluptatibus minima reiciendis cum. Eum error, repellendus, nulla odio dolor libero aspernatur sint voluptatem architecto tempora assumenda laborum minus recusandae!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste amet culpa facilis, sequi dolor quam repellat perspiciatis quaerat unde animi, laborum aspernatur vitae repudiandae ratione? Impedit culpa quos magnam saepe, pariatur dolorem neque quaerat fugiat corrupti recusandae tenetur quo.</p>
        </div>
        </div>
        
        </div>

        
        <div className='lg:w-1/2'>
            {/* <Sidebar/> */}
        </div>
      </div>

    </div>
  )
}

export default SingleItem