import { useState } from "react";

// icons
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { menuBtns } from "./index";
import Link from "next/link";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState("");

  function openDropHandler(id: string) {
    if (id == openDrop) setOpenDrop("");
    else setOpenDrop(id);
  }

  return (
    <div>
      <button
        className="p-3.5 pr-0"
        onClick={() => setIsOpen(!isOpen)}
        id="options-menu"
      >
        {isOpen ? (
          <IoClose className=" text-3xl " />
        ) : (
          <CgMenuRightAlt className=" text-3xl" />
        )}
      </button>

      <ul
        className={` ${
          isOpen ? " scale-y-100" : "scale-y-0"
        } absolute origin-top-right transition-all duration-300 left-2/4 -translate-x-2/4 w-full list-none bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {menuBtns.map(({ id, title, links, height }) => (
          <li key={id} className="">
            <Btn
              onClickHandler={openDropHandler.bind(null, id)}
              rotateIcon={id == openDrop}
              key={id}
              title={title}
            />
            {/* Dropdown menu */}
            <ul
              className={`overflow-hidden transition-all duration-300 ${
                id == openDrop ? height : "h-0"
              }`}
            >
              {links.map(({ name, link }) => (
                <LinkItem key={name} name={name} link={link} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Btn({ rotateIcon, title, onClickHandler }: any) {
  return (
    <button
      onClick={onClickHandler}
      className="group flex hover:bg-sky-100 px-4 py-2.5 w-full items-center justify-between"
    >
      <span className=" group-hover:text-lime-700">{title}</span>
      <MdKeyboardArrowDown
        className={` group-hover:text-lime-700 text-xl transition-all duration-300 ${
          rotateIcon ? " rotate-180" : " rotate-0"
        }`}
      />
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
