import React from 'react'
import Image from 'next/image';
import {FlipWords} from '@/components/ui/FlipWords';

const Hero = () => {
  return (
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="https://www.nolemons.co/en/p/buyer-protection" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200" role="alert">
                <span className="text-xs bg-primary-600 rounded-full text-black px-4 py-1.5 mr-3">
                  <Image src="/images/protected.png" alt="Protected" width="30" height="30"/> </span> 
                <span className="text-sm font-small">Full Buyer Protection</span> 
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Exciting cars.<br/> Carefully checked & honestly presented.</h1>
            <FlipWords words={["Fully Inspected", "Detailed Vehicle History", "Professional Photoshoots", "Global Shipping", "Aftersales Support"]} duration={2000} />
        </div>
    </section>
  )
}

export default Hero