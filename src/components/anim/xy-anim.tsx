"use client";
import { motion } from "framer-motion";

const animVar = {
  init: ({ xy, dis }: { xy: string; dis: number }) => {
    const initState = {
      opacity: 0,
    };

    // Mapping for xy directions
    const initialPosition: any = {
      ltr: { x: -1 * dis },
      btu: { y: dis },
      utb: { y: -1 * dis },
      rtl: { x: dis },
    };

    return {
      ...initState,
      ...initialPosition[xy],
    };
  },

  enter: ({ dur, delay, xy }: { dur: number; delay: number; xy: string }) => {
    const finalState = {
      opacity: 1,
      transition: {
        duration: dur,
        delay,
      },
    };

    // Mapping for xy directions
    const finalPosition: any = {
      ltr: { x: 0 },
      btu: { y: 0 },
      utb: { y: 0 },
      rtl: { x: 0 },
    };

    return { ...finalState, ...finalPosition[xy] };
  },
  exit: ({ dur, xy, dis }: { dur: number; xy: string; dis: number }) => {
    const initState = {
      opacity: 0,
      transition: {
        duration: dur,
      },
    };

    // Mapping for xy directions
    const initialPosition: any = {
      ltr: { x: -1 * dis },
      btu: { y: dis },
      utb: { y: -1 * dis },
      rtl: { x: dis },
    };

    return {
      ...initState,
      ...initialPosition[xy],
    };
  },
};

// ltr rtl utb btu

export default function XYAnim({
  children,
  xy = "btu",
  delay = 0,
  dur = 0.8,
  classes = "",
  dis = 80,
}: any) {
  return (
    <motion.div
      className={classes}
      variants={animVar}
      initial="init"
      exit="exit"
      animate="enter"
      // whileInView="enter"
      // viewport={{ once: true }}
      custom={{ dur, delay, xy, dis }}
    >
      {children}
    </motion.div>
  );
}
