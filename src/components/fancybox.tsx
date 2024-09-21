// import React, { useRef, useEffect, PropsWithChildren } from "react";

// import { Fancybox as NativeFancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

// interface Props {
//   delegate?: string;
//   options?: Partial<OptionsType>;
//   className?: string;
// }

// function Fancybox(props: PropsWithChildren<Props>) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const delegate = props.delegate || `[data-fancybox="gallery"]`;
//     const options = props.options || {
//       hideScrollbar: true,
//       Thumbs: {
//         type: "classic",
//       },
//       Toolbar: {
//         enabled: true,
//         display: {
//           left: ["infobar"],
//           middle: [
//             "zoomIn",
//             "zoomOut",
//             "toggle1to1",
//             "rotateCCW",
//             "rotateCW",
//             "flipX",
//             "flipY",
//           ],
//           right: ["slideshow", "thumbs", "close"],
//         },
//       },
//       // Toolbar: {
//       //   display: {
//       //     left: ["infobar"],
//       //     middle: ["facebook", "b", "d", "c"],
//       //     right: ["close"],
//       //   },
//       //   enabled: true,
//       //   // absolute: true,
//       //   items: {
//       //     facebook: {
//       //       tpl: `<button class="f-button" >mohamed atef</button>`,
//       //       click: ({ instance }) => {
//       //         instance.jumpTo(50);
//       //       },
//       //     },
//       //     b: {
//       //       tpl: `<button class="" >mohamed atef</button>`,
//       //       click: ({ instance }) => {
//       //         instance.jumpTo(50);
//       //       },
//       //     },
//       //     c: {
//       //       tpl: `<button class="" >mohamed atef</button>`,
//       //       click: ({ instance }) => {
//       //         instance.jumpTo(50);
//       //       },
//       //     },
//       //     d: {
//       //       tpl: `<button class="" >mohamed atef</button>`,
//       //       click: ({ instance }) => {
//       //         instance.jumpTo(50);
//       //       },
//       //     },
//       //   },
//       // },
//     };

//     NativeFancybox.bind(container, delegate, options);

//     return () => {
//       NativeFancybox.unbind(container);
//       NativeFancybox.close();
//     };
//   });

//   return (
//     <div ref={containerRef} className={props.className}>
//       {props.children}
//     </div>
//   );
// }

// export default Fancybox;

import { useRef, useEffect, PropsWithChildren } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface Props {
  options?: Partial<OptionsType>;
  delegate?: string;
}

function Fancybox(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
