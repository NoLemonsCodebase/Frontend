"use client";
import { motion } from "framer-motion";

const animVar = {
  init: {
    filter: "blur(100px)",
    transform: "scale(0.7)",
    opacity: 0,
  },

  enter: ({ dur, delay }: { dur: number; delay: number }) => {
    return {
      filter: "blur(0)",
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: dur,
        delay,
      },
    };
  },
  exit: ({ dur }: { dur: number }) => {
    return {
      filter: "blur(100px)",
      transform: "scale(0.7)",
      opacity: 0,
      transition: {
        duration: dur,
      },
    };
  },
};

// ltr rtl utb btu

export default function ZoomEffect({
  children,
  delay = 0,
  dur = 0.8,
  classes = "",
}: any) {
  return (
    <motion.div
      className={classes}
      variants={animVar}
      initial="init"
      animate="enter"
      exit="exit"
      // whileInView="enter"
      // viewport={{ once: true }}
      custom={{ dur, delay }}
    >
      {children}
    </motion.div>
  );
}
