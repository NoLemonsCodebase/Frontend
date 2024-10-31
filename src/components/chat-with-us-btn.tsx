"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

interface ChatWithUsBtnProps {
  text: string;
  number: string;
}

const ChatWithUsBtn: React.FC<ChatWithUsBtnProps> = ({ text, number }) => {
  const encode_text = encodeURIComponent(text);

  const pathname = usePathname();
  const { width } = useWindowSize();
  //  Don't show whatsapp button in bid page detail

  let whatsup_style: string = "";

  const isCar_page =
    pathname.includes("/cars") || pathname.includes("/import-a-car");
  if (width && width <= 768 && isCar_page) whatsup_style += " bottom-20";
  else whatsup_style += " bottom-4";

  return (
    <a
      className={`fixed z-10 left-4 h-12 w-12 rounded-full transition-all duration-500 text-white flex items-center justify-center ${whatsup_style}`}
      style={{ background: "#15803D" }}
      href={`https://wa.me/${number}?text=${encode_text}`}
      target="_blank"
    >
      <FaWhatsapp className=" text-3xl" />
    </a>
  );
};

export default ChatWithUsBtn;
