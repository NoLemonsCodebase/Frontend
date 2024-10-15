"use client";

import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface IIndexProps {}

export default function ChatWithUsBtn() {
  const t = useTranslations("default.home_page");
  const text = encodeURIComponent(
    "Hi I am from Nolemons website. Could you please tell me:"
  );
  // get path url after [local] route
  const pathname = usePathname();
  const url = pathname.split("/").at(2) || "";
  // Don't show whatsapp button in single car detail
  const showButton = url != "cars";
  return (
    <Fragment>
      {showButton ? (
        <a
          className="fixed z-10 bottom-4 left-4 h-12 w-12 rounded-full  text-white font-semibold flex items-center justify-center"
          style={{ background: "#15803D" }}
          href={`https://wa.me/971566633668?text=${text}`}
          target="_blank"
        >
          <FaWhatsapp className=" text-3xl" />
        </a>
      ) : null}
    </Fragment>
  );
}
