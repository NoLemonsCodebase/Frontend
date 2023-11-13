import Image from "next/image";
import * as React from "react";

interface ICarCardProps {
  img: string;
}

const CarCard: React.FunctionComponent<ICarCardProps> = ({ img }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <div className="absolute right-0 bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-bl-lg">
        <svg
          className=" h-4 w-4 mr-1 inline-block"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>5h left</span>
      </div>
      <Image src={img} alt="Landscape picture" width={712} height={468} />
      <div className="p-4">
        <h3 className="font-semibold text-lg md:text-xl">Ford Mustang</h3>
        <p className="text-sm text-zinc-500">2018, New York</p>
        <p className="text-sm text-zinc-500">
          A beautiful red Ford Mustang in excellent condition.
        </p>
        <h4 className="font-semibold text-base md:text-lg">$25,000</h4>
      </div>
    </div>
  );
};

export default CarCard;
