import { useState } from "react";


// icons
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { menuBtns } from "./index";







export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState("")

  function openDropHandler(id: string) {
    if (id == openDrop) setOpenDrop("")
    else setOpenDrop(id)
  }

  return (
    <div>
      <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          id="options-menu" 
        >
          { isOpen ? 
          <IoClose className=" text-3xl " />
            : <CgMenuRightAlt className=" text-3xl"   /> }
        </button>

      <div className={` ${isOpen ? " scale-y-100" : "scale-y-0"} absolute origin-top-right transition-all duration-300 right-0 w-full mt-4 bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5`}>
        <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            >
              {menuBtns.map(({id,title, links, height}) => (
                <li onClick={openDropHandler.bind(null, id)} key={id} className="">
                <Btn rotateIcon={id == openDrop} key={id} title={title}/>
                {/* Dropdown menu */}
                <ul
                  className={`overflow-hidden transition-all duration-300 ${id == openDrop ? height : "h-0" }`}>
                  {links.map(({name, link}) => <Link key={name} name={name} link={link}/>)}
                </ul>
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

function Btn  ({rotateIcon, title }: any) {
  return <button className="group flex hover:bg-sky-100 px-4 py-2.5 w-full items-center justify-between">
    <span className=" group-hover:text-lime-700">{title}</span>
    <MdKeyboardArrowDown className={` group-hover:text-lime-700 text-xl transition-all duration-300 ${rotateIcon ? " rotate-180" : " rotate-0"}`} />
  </button>
}


function Link({ name, link }: any) {
  return <li>
    <a href={link} className="hover:bg-sky-50  p-3 pl-4 flex items-center gap-1 text-sm">
      <MdKeyboardArrowRight className="" />
      <span>{name}</span>
    </a>
  </li>
}