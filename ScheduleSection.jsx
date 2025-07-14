import React from 'react'
import Schedule from "../assets/stats.webp"
import { FaArrowRight } from "react-icons/fa";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
       <div className='flex flex-col md:flex-row items-center
       justify-between gap-12 md:gap-24'>
         {/*left section*/}
        <div className='md:w-1/2 w-full'>
            <img src={Schedule} alt="schedule" className='w-full
            h-auto' />
        </div>

        {/* right section */}
        <div className='md:w-1/2 w-full'>
            <h1 className='text-orange-500 font-semibold'>SCHEDULE</h1>
            <h2 className='capitalize text-3xl md:text-4xl
            font-bold text-neutral-900 mt-4 mb-6 text-justify'>Streamline your business<br/>
                with smart scheduling solution
            </h2>
            <p className='text-gray-600 mt-8 text-justify'>Take control of your time and productivity with our intelligent
                scheduling system, Automate appointments, manage tam availability and deliver exceptional customer
                experience through seamless calender management.
            </p>

            <a href="#" className='text-blue-500 font-semibold flex
            items-center gap-2 hover:gap-4 transition-all mt-3'>
             Explore scheduling features   
            <FaArrowRight className='size-5' /></a>
        </div>
       </div>
      
    </section>
  )
}

export default ScheduleSection
