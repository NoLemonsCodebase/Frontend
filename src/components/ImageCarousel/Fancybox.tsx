import React, { useRef, useEffect, PropsWithChildren } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import Image from "next/image";
interface Props {
  delegate?: string;
  options?: Partial<OptionsType>;
  className?: string;
}

function Fancybox(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {
      // Toolbar: {
      //   display: {
      //     left: ["infobar"],
      //     middle: ["facebook", "b", "d", "c"],
      //     right: ["close"],
      //   },
      //   enabled: true,
      //   // absolute: true,
      //   items: {
      //     facebook: {
      //       tpl: `<button class="f-button" >mohamed atef</button>`,
      //       click: ({ instance }) => {
      //         instance.jumpTo(50);
      //       },
      //     },
      //     b: {
      //       tpl: `<button class="" >mohamed atef</button>`,
      //       click: ({ instance }) => {
      //         instance.jumpTo(50);
      //       },
      //     },
      //     c: {
      //       tpl: `<button class="" >mohamed atef</button>`,
      //       click: ({ instance }) => {
      //         instance.jumpTo(50);
      //       },
      //     },
      //     d: {
      //       tpl: `<button class="" >mohamed atef</button>`,
      //       click: ({ instance }) => {
      //         instance.jumpTo(50);
      //       },
      //     },
      //   },
      // },
      Images: {
        content: (_ref, slide) => {
          console.log(slide);
          let rez = "";
          // const media = slide?.media?.split(";");
          // slide?.sources?.split(";").map((source, index) => {
          //   rez += `<source
          //         media="${media?.[index] || ""}"
          //         srcset="${source}"
          //       />`;
          // });
          rez += `<img width="100" hieght="100" src="${slide.src}" alt="" />`;
          rez += "";
          return rez;
        },
      },
    };

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
}

export default Fancybox;
