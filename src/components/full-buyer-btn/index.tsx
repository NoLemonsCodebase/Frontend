import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";

const txtArr = [
  "Full Buyer Protection",
  "Fully Inspected",
  "Global Shipping",
  "Detailed Vehicle History",
  "Professional Photoshoots",
];

export default function FullBuyerBtn() {
  const [curTxtIndex, setCurTxtIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurTxtIndex((pre) => {
        if (pre == txtArr.length - 1) return 0;
        return pre + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <a
      href="https://nolemons.help/buyer-protection"
      className=" mb-4 inline-flex items-center justify-between rounded-full bg-gray-100 p-3 md:p-4 md:px-6 pr-4 text-gray-700 hover:bg-gray-200 md:w-96 w-72"
      role="alert"
    >
      <MdOutlineVerifiedUser className="text-xl md:text-3xl mr-3" />

      <div className="font-small md:text-xl">
        {" "}
        {txtArr[curTxtIndex].split(" ").map((word, i) => (
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
            }}
            key={word}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
      <RiArrowDropRightLine className="text-3xl" />
    </a>
  );
}
