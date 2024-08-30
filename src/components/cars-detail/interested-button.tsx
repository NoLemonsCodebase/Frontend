"use client";

import { AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import XYAnim from "../anim/xy-anim";
import { ICar } from "@/lib/types";

export default function InterestedButton({ carDetail }: { carDetail: ICar }) {
  const [showQuestion, setShwoQuestions] = useState<boolean>(false);
  const { title, year } = carDetail;

  const openQuestions = () => setShwoQuestions(true);
  const closeQuestions = () => setShwoQuestions(false);

  // text for links
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
    <div className=" bg-white shadow-custom-top fixed z-[11] bottom-0 left-0 px-4 py-3 w-full">
      <button
        onClick={openQuestions}
        className=" bg-green-700 text-white rounded-md w-full p-2"
      >
        I'm interested
      </button>
      <AnimatePresence>
        {showQuestion ? (
          <Fragment>
            <div className=" absolute bottom-0 backdrop-blur-sm left-0 w-full bg-black/50 h-screen"></div>
            <XYAnim
              dur={0.3}
              classes=" bg-white absolute w-full bottom-0 left-0 rounded-t-xl"
            >
              <div className=" flex items-center px-4 py-3 justify-between border-b">
                <p className=" font-semibold">What would you like to do ?</p>
                <button onClick={closeQuestions}>
                  <IoCloseOutline className=" text-xl" />
                </button>
              </div>

              <div className=" p-4 flex flex-col gap-4">
                <a
                  href={`https://api.whatsapp.com/send/?phone=971566633668&text=${make_an_offer_text}`}
                  target="_blank"
                  className=" flex items-center gap-3 border px-4 py-3 rounded-xl"
                >
                  <FaHandHoldingUsd className=" text-xl" />
                  <span>Make an offer</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=971566633668&text=${ask_a_question_text}`}
                  className=" flex items-center gap-3 border px-4 py-3 rounded-xl"
                >
                  <MdOutlineQuestionMark className=" text-xl" />
                  <span>Ask a question</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=971566633668&text=${request_a_viewing_text}`}
                  target="_blank"
                  className=" flex items-center gap-3 border px-4 py-3 rounded-xl"
                >
                  <CiBadgeDollar className=" text-xl" />
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
