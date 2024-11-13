import useDisableScroll from "@/lib/hooks/use-disabled-scroll";
import { ICar } from "@/lib/types";
import { CiBadgeDollar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";

import XYAnim from "../anim/xy-anim";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const { title, year, category } = carDetail;

  const make_an_offer_text = encodeURIComponent(
    `Hi! I would like to make an offer for this ${title} ${year}`
  );

  const ask_a_question_text = encodeURIComponent(
    `Hi! I would like to ask a question about this ${title} ${year}`
  );

  const request_a_viewing_text = encodeURIComponent(
    `Hi! I would like to request a viewing for this ${title} ${year}`
  );

  // ================== Style classes ==================
  const styleLink =
    "group shadow flex basis-1/2 flex-col items-center justify-center gap-2 border px-4 py-3 rounded-xl";
  const styleColorIcon =
    "absolute left-0 top-0 scale-0 transition-all duration-300 group-hover:scale-100 origin-bottom";
  const styleGrayIcon =
    "text-gray-600 transition-all duration-300 group-hover:scale-0";
  // ================================= ==================

  const is_uae = category == "uae";

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

        <div className=" p-4 grid grid-cols-2 gap-2">
          <Link
            href={`${pathname}/bid`}
            className={`${styleLink} ${is_uae ? "col-span-2" : " col-span-1"}`}
          >
            <div className=" relative overflow-hidden text-3xl md:text-4xl">
              <CiBadgeDollar className={`${styleColorIcon} text-green-600`} />
              <CiBadgeDollar className={styleGrayIcon} />
            </div>
            <span className=" md:text-xl text-gray-500">Make an offer</span>
          </Link>
          <a
            href={`https://api.whatsapp.com/send/?phone=971566633668&text=${ask_a_question_text}`}
            target="_blank"
            className={styleLink}
          >
            <div className=" relative overflow-hidden text-3xl md:text-4xl">
              <MdOutlineQuestionMark
                className={`${styleColorIcon} text-green-600`}
              />
              <MdOutlineQuestionMark className={styleGrayIcon} />
            </div>
            <span className=" md:text-xl text-gray-500">Ask a question</span>
          </a>

          {is_uae ? (
            <a
              href={`https://api.whatsapp.com/send/?phone=971566633668&text=${ask_a_question_text}`}
              target="_blank"
              className={styleLink}
            >
              <div className=" relative overflow-hidden text-3xl md:text-4xl">
                <FaEye className={`${styleColorIcon} text-green-600`} />
                <FaEye className={styleGrayIcon} />
              </div>
              <span className=" md:text-xl text-gray-500 text-center">
                Request a viewing
              </span>
            </a>
          ) : null}
        </div>
      </XYAnim>
    </div>
  );
}
