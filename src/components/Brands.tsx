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

const Brands = () => {
  return (
    <div className="hero relative bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <InfiniteMovingCards items={quotesArray} speed="slow" className="mt-1 w-full" />
    </div>
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

export default Brands