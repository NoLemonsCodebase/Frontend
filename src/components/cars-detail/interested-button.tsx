"use client";

import { AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
//=========
import XYAnim from "../anim/xy-anim";
import { ICar } from "@/lib/types";
import { useWindowSize } from "@uidotdev/usehooks";

export default function InterestedButton({ carDetail }: { carDetail: ICar }) {
  const [showQuestion, setShwoQuestions] = useState<boolean>(false);
  const { title, year } = carDetail;

  const openQuestions = () => setShwoQuestions(true);
  const closeQuestions = () => setShwoQuestions(false);

  // set direction of animation
  const { width } = useWindowSize();
  let dir_animatin = "btu";
  if (width) {
    dir_animatin = width >= 1024 ? "rtl" : "btu";
  }

  // text on every link
  const make_an_offer_text = encodeURIComponent(
    `Hi! I would like to make an offer for this ${title} ${year}`
  );
  const ask_a_question_text = encodeURIComponent(
    `Hi! I would like to ask a question about this ${title} ${year}`
  );
  const request_a_viewing_text = encodeURIComponent(
    `Hi! I would like to request a viewing for this ${title} ${year}`
  );

  return (
    <div className=" bg-white shadow-custom-top fixed lg:relative z-[11] lg:z-10 bottom-0 left-0 px-4 py-3 lg:p-0 w-full lg:w-auto lg:ml-auto lg:basis-[30%] lg:shadow-none">
      <button
        onClick={openQuestions}
        className=" bg-green-700 text-white rounded-lg w-full px-2 py-3"
      >
        I'm interested
      </button>
      <AnimatePresence>
        {showQuestion ? (
          <Fragment>
            <div
              onClick={closeQuestions}
              className=" absolute bottom-0 backdrop-blur-sm left-0 w-full bg-black/50 h-screen lg:hidden "
            ></div>
            <XYAnim
              xy={dir_animatin}
              dur={0.3}
              classes=" bg-white absolute w-full bottom-0 left-0 rounded-t-xl lg:rounded-lg lg:-top-2 lg:bottom-auto shadow"
            >
              <div className=" flex items-center p-4 justify-between border-b">
                <div className=" font-semibold flex items-center gap-3">
                  <button className="hidden lg:block" onClick={closeQuestions}>
                    <IoIosArrowRoundBack className="text-xl lg:text-2xl " />
                  </button>
                  <span> What would you like to do ?</span>
                </div>
                <button className="lg:hidden block" onClick={closeQuestions}>
                  <IoCloseOutline className="text-xl lg:text-2xl" />
                </button>
              </div>

              <div className=" p-4 flex flex-col gap-4">
                <a
                  href={`https://api.whatsapp.com/send/?phone=971564404640&text=${make_an_offer_text}`}
                  target="_blank"
                  className=" shadow border flex items-center gap-3 px-4 py-3 rounded-xl"
                >
                  <CiBadgeDollar className=" text-xl" />
                  <span>Make an offer</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=971566633668&text=${ask_a_question_text}`}
                  className="shadow flex items-center gap-3 border px-4 py-3 rounded-xl"
                >
                  <MdOutlineQuestionMark className=" text-xl" />
                  <span>Ask a question</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=971566633668&text=${request_a_viewing_text}`}
                  target="_blank"
                  className="shadow flex items-center gap-3 border px-4 py-3 rounded-xl"
                >
                  <FaEye className=" text-xl" />
                  <span>Request a viewing</span>
                </a>
              </div>
            </XYAnim>
          </Fragment>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
