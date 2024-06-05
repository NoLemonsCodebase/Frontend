import * as React from "react";
import { useTranslations } from "next-intl";

interface IIndexProps {}

const ChatWithUsBtn: React.FunctionComponent<IIndexProps> = (props) => {
  const t = useTranslations("default.home_page");

  return (
    <a
      className="fixed z-10 bottom-10 right-10 h-8 mr-8 text-white px-4 text-sm font-semibold flex items-center justify-center"
      style={{ background: "#5a9e6f" }}
      href="https://wa.me/971566633668?text=Hi%21%20I%20am%20from%20NoLemons%20website.%20Could%20you%20please%20tell%20me%3A"
    >
      {t("chat_with_us")}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 icon icon-tabler icon-tabler-brand-whatsapp"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    </a>
  );
};

export default ChatWithUsBtn;
