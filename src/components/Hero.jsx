import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/hero-image.png";


const Hero = () => {
  return (
    <section id="home" className='container mx-auto pt-44 pb-6 px-4 sm:px-6
    lg:px-8 flex flex-col md:flex-row justify-between items-center'>
     {/*left col*/}

     <div className="w-full md:w-1/2 space-y-8">
        {/*star*/}
        <div className='flex items-center gap-2 bg-gray-50 w-fit
        
        px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer
        group'>
            <span className='text-blue-600 group-hover:scale-110
            transition-transform group-hover:text-yellow-500'><FaStar /></span>
            <span className='capitalize text-sm font-medium'>Jump start your growth</span>
        </div>

        {/*heading*/}
        <h1 className='capitalize text-3xl md:text-4xl lg:text-5xl
        font-semibold'>
            We boost the growth for 
            <span className='text-blue-600 inline-block'>
                startup to fortune 500
             </span> <span className='absolute bottom-0 left-0 w-full
             h-0.5 bg-blue-200/60'></span> 
            companies <span className='text-blue-500
            inline-block ml-2 animate-pulse'>⏱️</span> </h1>

        <p className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate leads, sales people training and conversion, tools and more - all within the same one billing </p>
        <div className='flex gap-3 max-w-md'>
            <input type="email" placeholder='Email Address...'
            className='flex-1 px-6 py-4 border border-gray-200
            rounded-xl focus:outline-none focus:border-blue-600
            focus:ring-2 focus:ring-blue-100 transition-all
            ' />

            <button className='bg-blue-600 rounded-xl
            text-white px-8 py-4 hover:bg-blue-700 cursor-pointer
            transition-all hover:shadow-lg hover:shadow-blue-300'><FaArrowRight /></button>
        </div>
     
     </div>

           
     {/* right col*/}
     <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
       <div className='relative'>
        <img src={heroImg} alt="hero" className='rounded-lg relative
        z-10 hover:scale-[1.02] transition-transform duration-300' />
       </div>
     </div>
    </section>
  )
}

export default Hero
