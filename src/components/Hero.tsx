import React from 'react'
import {FlipWords} from "@/components/ui/flip-words";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import Image from 'next/image';
import CustomButton from "@/components/CustomButton";


interface Quote {
    quote: string;
    name: string;
    title: string;
}

const quotesArray: Quote[] = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      name: "Franklin D. Roosevelt",
      title: "https://nolemons.s3.us-west-2.amazonaws.com/media/cars/S10697/AuctionTeamPictures/Sammy.png"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      name: "Walt Disney",
      title: "https://nolemons.s3.us-west-2.amazonaws.com/media/cars/S10697/AuctionTeamPictures/Sammy.png"
    },
  ];

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Speak to Sales
                </a> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                {/* <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
              {/* <Image src="/hero.webp" alt="hero" className="width=200px relative xl:w-full w-full h-[50%] xl:h-full z-0" />  */}
              <Image className="mx-5" src="/hero.webp" width={200} height={150} alt="logo" />
            </div>                
        </div>
    </section>
    // <div className="hero relative bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
    //   <div className="flex-1 pt-16 px-8 md:px-16 lg:px-24">
    //     <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
    //       <p className="text-white text-lg mb-2">Welcome to NoLemons</p>
    //       {/* <h1 className="text-5xl font-bold text-white mb-4">
    //         <FlipWords words={["Buy", "Sell"]} duration={1500} className="text-5xl font-bold" /> cars in a few clicks.
    //       </h1> */}
    //       <p className="text-white mb-6">
    //         NoLemons is where exciting cars are carefully checked and honestly presented.
    //       </p>
    //       <div className="flex space-x-4">
    //         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Browse Cars</button>
    //         <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Sell Your Car</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // return (
  //   <div className="hero">
  //     <div className="flex-1 pt-16 padding-x">
  //       <Image src="/buyer-protection.png" alt="Bayer Protection" width={200} height={200} />
  //       <br />
  //       <h1 className="hero__title">
  //         <FlipWords words={["Buy", "Sell"]} duration={1500} className="text-5xl font-bold" /> cars in few clicks. 
  //         <br />
  //       </h1>

  //       <p className="hero__subtitle">
  //         NoLemons is where exciting cars are carefully checked and honestly presented. <br />
  //       </p>
  //       {/* <Image src="/hero.webp" alt="hero" className="width=200px relative xl:w-full w-full h-[50%] xl:h-full z-0" /> */}
  //     </div>
  //     <InfiniteMovingCards items={quotesArray} speed="slow" className="mt-1  w-[100%]" />
  //     <div className="hero__image-container">
  //       <div className="hero__image">
  //         <Image src="/hero.webp" alt="hero" fill className="object-contain" />
  //       </div>
  //       {/* <div className="hero__image-overlay" /> */}
  //     </div>
      
  //   </div>
  // );  
  // return (
  //   <div className="h-[40rem] flex justify-center items-center px-4">
  //     <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
  //       <Image src="/buyer-protection.png" alt="Bayer Protection" width={200} height={200} />
  //       <br />
  //       <FlipWords words={["Buy", "Sell"]} duration={1500} className="text-4xl font-bold" />
  //       cars in few clicks. <br />
  //       NoLemons is where exciting cars are carefully checked and honestly presented. <br />
  //       <InfiniteMovingCards items={quotesArray} speed="slow" className="mt-8" />
  //     </div>
  //   </div>
  // );
}

export default Hero