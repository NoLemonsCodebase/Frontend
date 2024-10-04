"use client";

import { Fragment, useState } from "react";

//=========

import { ICar } from "@/lib/types";
import { useWindowSize } from "@uidotdev/usehooks";
import { AnimatePresence } from "framer-motion";
import MultiQuestions from "./multi-questions";
import MakeAnOffer from "./make-an-offer";
import Link from "next/link";

export default function InterestedButton({ carDetail }: { carDetail: ICar }) {
  const [showQuestion, setShwoQuestions] = useState<boolean>(false);
  const [showMake, setShwoMake] = useState<boolean>(false);

  const openQuestions = () => setShwoQuestions(true);
  const closeQuestions = () => setShwoQuestions(false);

  //============
  const openMake = () => setShwoMake(true);
  const closeMake = () => setShwoMake(false);

  // set direction of animation
  const { width } = useWindowSize();
  let dir_animation = "btu";
  if (width) {
    dir_animation = width >= 1024 ? "rtl" : "btu";
  }
  const { url_route, id } = carDetail;
  const intersted_link = url_route || id;
  return (
    <Fragment>
      <div className=" bg-white shadow-custom-top fixed lg:relative z-[11] lg:z-[10] bottom-0 left-0 px-4 py-3 lg:p-0 w-full lg:w-auto lg:ml-auto lg:basis-[30%] lg:shadow-none">
        {/* <button
          onClick={openQuestions}
          className=" bg-green-700 text-white rounded-lg w-full px-2 py-3"
        >
          I'm interested
        </button> */}
        <Link
          href={`/cars/${intersted_link}/bid`}
          className=" bg-green-700 text-center text-white rounded-lg w-full px-2 py-3 block"
        >
          I'm interested
        </Link>
      </div>

      <AnimatePresence>
        {showQuestion && (
          <MultiQuestions
            key="multi"
            carDetail={carDetail}
            dirAnimation={dir_animation}
            closeQuestions={closeQuestions}
            openMake={openMake}
          />
        )}

        {showMake && (
          <MakeAnOffer
            key="make"
            carDetail={carDetail}
            dirAnimation={dir_animation}
            closeMake={closeMake}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
}
