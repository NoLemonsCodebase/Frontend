"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import cn from "classnames";

interface Props {
  //boolean to always open ddm (for presentation)
  forceOpen?: boolean;
  label?: string;
  withDivider?: boolean;
  icon?: JSX.Element;
  items: DDMItem[];
  withBackground?: boolean;
  className?: string;
}

export interface DDMItem {
  icon?: JSX.Element;
  label: string;
  desc?: string;
  link?: string;
}

const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("relative inline-block text-left", props.className)}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={` ${
            props.withBackground
              ? "border border-gray-300 bg-white dark:bg-gray-800 shadow-sm"
              : ""
          } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700  focus:outline-none`}
          id="options-menu"
        >
          {isOpen ? (
            <Cross1Icon width={20} height={20} color="black" />
          ) : (
            <HamburgerMenuIcon width={20} height={20} color="black" />
          )}
        </button>
      </div>

      {(props.forceOpen || isOpen) && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className={`py-1 ${
              props.withDivider ? "divide-y divide-gray-100" : ""
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.items.map((item) => {

              return (
                <a
                  key={item.label}
                  href={item.link || "#"}
                  className={`${
                    item.icon ? "flex items-center" : "block"
                  } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600`}
                  role="menuitem"
                >
                  {item.icon}

                  <span className="flex flex-col">
                    <span>{item.label}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownMenu;
