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
          className="fixed z-10 bottom-0 left-8 h-8  text-white px-4 text-sm font-semibold flex items-center justify-center"
          style={{ background: "#15803D" }}
          href={`https://wa.me/971566633668?text=${text}`}
          target="_blank"
        >
          {t("chat_with_us")}
          <FaWhatsapp className=" text-xl ml-1" />
        </a>
      ) : null}
    </Fragment>
  );
}
