import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdLaptopMac } from "react-icons/md";
import { IoBagSharp } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";

const Services = () => {
  return (
 
<div className='mt-5'>  

<div className='lg:ml-5 text-center lg:text-left'>
    <p className='lg:ml-5'>My services</p>
    <h1 className='text-3xl font-bold lg:ml-5'>What can I do</h1>
    <div className='grid grid-rows-3 gap-4 lg:grid-cols-2 mt-5'>
        <div className="mx-5 p-5 h-[170px] bg-zinc-900 rounded-md">
        <FaPen className='mx-auto  text-red-600 text-xl' />
        <h1 className='text-center'>Creative Design</h1>
          <p className='mt-1 px-1 text-center'>Solving puzzles with precision; every line of code a step towards innovation</p>
        </div>
        <div className=" mx-5 p-5 h-[170px]  bg-zinc-900 rounded-md">
        <FaCode className='mx-auto text-red-600 text-xl' />
        <h1 className='text-center'>Code</h1>
          <p className='mt-1 px-1 text-center'>Writing well-structured, readable, and maintainable code involves adhering to coding standards and best practices</p>
        </div>
        <div className=" mx-5 p-3 h-[170px]  bg-zinc-900 rounded-md">
        <MdLaptopMac className='mx-auto  text-red-600 text-xl' />
        <h1 className='text-center'>User interface</h1>
          <p className='mt-1 px-1 text-center'>Developing designs that are intuitive and user-centric, emphasizing accessibility, usability, and seamless user interactions</p>
        </div>
        <div className=" mx-5 p-2 h-[170px]  bg-zinc-900 rounded-md">
        <IoBagSharp className='mx-auto  text-red-600 text-xl' />
        <h1 className='text-center'>User Experience</h1>
          <p className='mt-1 px-1 text-center'>Understanding user behavior, needs, and preferences for designing efficient, and enjoyable interfaces, ensuring optimal user experience.</p>
        </div>
        <div className="mx-5 p-3 h-[170px]  lg:justify-center bg-zinc-900 rounded-md">
        <TbSteeringWheel className='mx-auto  text-red-600 text-xl' />
        <h1 className='text-center'>Fast Support</h1>
          <p className='mt-1 px-1 text-center'>Addressing and resolving user-reported issues or inquiries regarding the website or application.</p>
        </div>
       
      </div>
</div>  
      
      
    </div>
   
  )
}

export default Services