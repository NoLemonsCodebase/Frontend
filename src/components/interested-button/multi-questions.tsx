import useDisableScroll from "@/lib/hooks/use-disabled-scroll";
import { ICar } from "@/lib/types";
import { CiBadgeDollar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import XYAnim from "../anim/xy-anim";

type Props = {
  dirAnimation: string;
  carDetail: ICar;
  closeQuestions: () => void;
  openMake: () => void;
};

export default function MultiQuestions({
  carDetail,
  dirAnimation,
  closeQuestions,
  openMake,
}: Props) {
  useDisableScroll();
  const { title, year } = carDetail;

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
    <div className="z-[21] fixed inset-0 bg-black/50 backdrop-blur-sm flex md:justify-center items-end md:items-center">
      <XYAnim
        xy={dirAnimation}
        dur={0.3}
        classes=" bg-white w-full md:w-[500px] rounded-t-xl lg:rounded-lg shadow"
      >
        <div className=" flex items-center p-4 justify-between border-b">
          <span className="font-semibold"> What would you like to do ?</span>
          <button className="border p-1 rounded-md" onClick={closeQuestions}>
            <IoCloseOutline className="text-xl lg:text-2xl" />
          </button>
        </div>

        <div className=" p-4 flex flex-col gap-4">
          <button
            onClick={openMake}
            className=" shadow border flex items-center gap-3 px-4 py-3 rounded-xl"
          >
            <CiBadgeDollar className=" text-xl" />
            <span>Make an offer</span>
          </button>
          {/* <a
            href={`https://api.whatsapp.com/send/?phone=971566633668&text=${make_an_offer_text}`}
            target="_blank"
            className="shadow flex items-center gap-3 border px-4 py-3 rounded-xl"
          >
            <CiBadgeDollar className=" text-xl" />
            <span>Make an offer</span>
          </a> */}
          <a
            href={`https://api.whatsapp.com/send/?phone=971566633668&text=${ask_a_question_text}`}
            target="_blank"
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
    </div>
  );
}
