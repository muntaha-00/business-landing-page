import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woo from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"

const CompanyLogo = () => {
    const logos = [slack, amazon, woo, meundies, sitepoint];

  return (
    <div className='w-full overflow-hidden container mx-auto py-20 
     flex  flex-col sm:flex-row sm:items-center 
    items-start gap-8'>
        <div className='w-[300px] shrink-0 px-8 text-gray-600 
        border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base 
        text-xl font-semibold sm:text-left  mb-8 sm:mb-0'>
            <div>Proud Partner At</div>
            <div>Hubspot & segments</div>
        </div>

        <div className='flex animate-marquee whitespace-nowrap'>
            {logos.map((logo, index) => (
                <img key={index} src={logo} alt="company-logo"
                className='mx-12 h-8 w-36 object-contain grayscale
                opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
            ))}

        {/*duplicate logos*/}
        {logos.map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt="company-logo"
                className='mx-12 h-8 w-36 object-contain grayscale
                opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
            ))}


        </div>
      
    </div>
  )
}

export default CompanyLogo
