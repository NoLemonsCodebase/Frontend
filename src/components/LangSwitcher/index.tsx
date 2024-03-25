"use client";
import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  language: string;
  onSelect?: (language: string) => void;
}

const languages = [
  {
    label: "عربي",
    value: "ar",
  },
  {
    label: "en",
    value: "en",
  },
];

const LangSwitcher: React.FC<Props> = ({
  language,
  onSelect = () => {},
  ...rest
}) => {
  const [showList, setShowList] = useState(false);
  const panelResultElement = useRef<HTMLDivElement>(null);
  const selectButton = useRef<HTMLButtonElement>(null);

  const handleClick = (lang: string) => {
    setShowList(false);
    onSelect(lang);
  };

  const handleClickOutside = useCallback((event: any) => {
    const myHTMLWrapper = panelResultElement.current;
    const searchElement = selectButton.current;
    if (
      myHTMLWrapper &&
      searchElement &&
      !myHTMLWrapper.contains(event.target) &&
      !searchElement.contains(event.target)
    ) {
      setShowList(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={cn(rest.className)}>
      <div className="relative mt-1 text-xs sm:text-sm">
        <button
          type="button"
          ref={selectButton}
          onClick={() => setShowList(!showList)}
          className={cn(
            "p-1 sm:p-2 flex space-x-2 items-center text-left bg-white rounded-lg border cursor-pointer"
          )}
        >
          {language ? (
            <span className="flex items-center">
              {/* <CurrencyIcon currency={selectedCurrency.toLowerCase()} /> */}
              <span className="block ml-3 truncate">
                {languages.find((x) => x.value == language)?.label}
              </span>
            </span>
          ) : (
            <p className="text-base text-directness-black opacity-60 ml-2">
              Select
            </p>
          )}
          <p></p>
          <span
            className={cn(
              "flex items-center pointer-events-none transform transition-transform",
              showList ? "rotate-180" : "rotate-0"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              className="w-4 h-4 text-gray-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.44961 9.95052C8.20106 10.1991 7.79809 10.1991 7.54954 9.95052L3.75633 6.1573C3.36581 5.76678 2.73264 5.76678 2.34212 6.1573C1.95159 6.54783 1.95159 7.18099 2.34212 7.57152L7.42098 12.6504C7.74053 12.9699 8.25862 12.9699 8.57817 12.6504L13.657 7.57152C14.0476 7.18099 14.0476 6.54783 13.657 6.1573C13.2665 5.76678 12.6333 5.76678 12.2428 6.1573L8.44961 9.95052Z"
                fill="#517185"
              />
            </svg>
          </span>
        </button>

        {showList && (
          <div
            ref={panelResultElement}
            className="absolute z-10 w-20 mt-1 bg-white rounded-md shadow-md border"
          >
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="p-0.5 overflow-auto rounded-lg max-h-56 focus:outline-none"
            >
              {languages.map((language) => (
                <li
                  id="listbox-item-1"
                  key={language.value}
                  role="option"
                  className="relative py-2 pl-3 text-directness-black select-none hover:bg-confident-light-grey rounded-lg cursor-pointer"
                  onClick={() => handleClick(language.value)}
                >
                  <div className="flex items-center">
                    {/* <CurrencyIcon currency={currency.toLowerCase()} /> */}
                    <span className="block ml-3 font-normal truncate">
                      {language.label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default LangSwitcher;
