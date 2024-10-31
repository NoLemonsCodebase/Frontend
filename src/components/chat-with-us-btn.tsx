"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatWithUsBtn() {
  const text = encodeURIComponent(
    "Hi I am from Nolemons website. Could you please tell me:"
  );

  const pathname = usePathname();
  const { width } = useWindowSize();
  //  Don't show whatsapp button in bid page detail

  let whatsup_style: string = "";

  if (
    pathname.includes("/bid") ||
    pathname.includes("/payment-success") ||
    pathname.includes("/return")
  ) {
    whatsup_style = "pointer-events-none opacity-0";
  } else {
    whatsup_style = "pointer-events-auto opacity-100";
  }

  const isCar_page =
    pathname.includes("/cars") || pathname.includes("/import-a-car");
  if (width && width <= 768 && isCar_page) whatsup_style += " bottom-20";
  else whatsup_style += " bottom-4";

  return (
    <a
      className={`fixed z-10 left-4 h-12 w-12 rounded-full transition-all duration-500 text-white flex items-center justify-center ${whatsup_style}`}
      style={{ background: "#15803D" }}
      href={`https://wa.me/971585133668?text=${text}`}
      target="_blank"
    >
      <FaWhatsapp className=" text-3xl" />
    </a>
  );
}
