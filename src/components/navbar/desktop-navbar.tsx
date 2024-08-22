import React from "react";
import { menuBtns } from "./index";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <ul
      className=" flex items-center list-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      {menuBtns.map(({ id, title, links, mobileHeight }) => (
        <li key={id} className="group py-3 px-2 relative">
          <Btn key={id} title={title} />
          {/* Dropdown menu */}
          <ul
            className={`overflow-hidden h-0 absolute left-0 top-[70px] shadow w-60 bg-white transition-all duration-300 ${mobileHeight} `}
          >
            {links.map(({ name, link }) => (
              <LinkItem key={name} name={name} link={link} />
            ))}
          </ul>
        </li>
      ))}
      <a
        href="https://nolemons.help"
        className=" bg-green-600 transition-colors duration-300 hover:bg-green-500 text-white px-6 py-2.5 rounded-full cursor-pointer ml-8"
      >
        Help Center
      </a>
    </ul>
  );
}

function Btn({ rotateIcon, title, onClickHandler }: any) {
  return (
    <button
      onClick={onClickHandler}
      className="gap-2 flex px-4 py-2.5 w-full items-center justify-between"
    >
      <span className=" group-hover:text-lime-700">{title}</span>
      <MdKeyboardArrowDown className="group-hover:text-lime-700 transition-all duration-300 group-hover:rotate-180" />
    </button>
  );
}

function LinkItem({ name, link }: any) {
  if (name == "Sell Your Car")
    return (
      <li>
        <Link
          href={link}
          className="hover:bg-sky-50  p-3 pl-4 flex items-center gap-1 text-sm"
        >
          <MdKeyboardArrowRight className="" />
          <span>{name}</span>
        </Link>
      </li>
    );
  return (
    <li>
      <a
        href={link}
        className="hover:bg-sky-50  p-3 pl-4 flex items-center gap-1 text-sm"
      >
        <MdKeyboardArrowRight className="" />
        <span>{name}</span>
      </a>
    </li>
  );
}
