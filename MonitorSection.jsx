import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Monitor from "../assets/monitor-card.webp"

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center
           justify-between gap-12 md:gap-24'> 
            {/* left section */}
            <div className='md:w-1/2 w-full'>
                <h1 className='text-green-500 font-semibold'>MONITOR</h1>
                <h2 className='capitalize text-3xl md:text-4xl
                font-bold text-neutral-900 mt-4 mb-6 md:w-3/5'>
                  Introducing best mobile carousels 
                </h2>
                <p className='text-gray-600 mt-8 text-justify'>Before the ship is really back,
                Round, round all around the world. Round, all around the world. Round, all around the world.
                Round, all around the world.
                </p>
    
                <a href="#" className='text-blue-500 font-semibold flex
                items-center gap-2 hover:gap-4 transition-all mt-3'>
                Learn more about monitoring  
                <FaArrowRight className='size-5' /></a>
            </div>

            
             {/*right section*/}
            <div className='md:w-1/2 w-full'>
                <img src={Monitor} alt="schedule" className='w-full
                h-auto' />
            </div>
           </div>
          
        </section>
  )
}

export default MonitorSection
