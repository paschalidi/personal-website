import React from "react";
import Downshift from "downshift";
import clsx from "clsx";
import { ChevronDown } from "../Icons";

interface SelectProps {
  /**
   * items
   */
  options: { value: string }[];
}

export const FormSelectMenu = ({ options }: SelectProps) => {
  return (
    <Downshift
      onChange={(selection) => {
        console.log(selection);
      }}
      itemToString={(item) => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <>
          <div {...getRootProps({}, { suppressRefError: true })}>
            <div
              className={
                "w-[340px] md:w-96 cursor-pointer inline-flex justify-between relative outline-none"
              }
            >
              <button
                {...getToggleButtonProps()}
                aria-label={"toggle menu"}
                className={"w-full"}
              >
                <input
                  className={clsx(
                    "w-full pointer-events-none bg-transparent text-white border-[1px] border-white resize-none h-14 px-4 py-3 rounded-lg justify-start items-center inline-flex text-xl font-normal leading-7 outline-none",
                  )}
                  {...getInputProps()}
                  value={inputValue || options[0].value}
                />
                <div className={"absolute right-4 top-4"}>
                  <ChevronDown
                    className={clsx(
                      isOpen && "rotate-180",
                      "text-white transition-transform duration-100 transform origin-center",
                    )}
                  />
                </div>
              </button>
              <ul
                {...getMenuProps()}
                className={clsx(
                  !(isOpen && options.length) && "hidden",
                  "text-left w-full absolute bg-white mt-[60px] max-h-80 overflow-scroll p-0 z-50 text-xl rounded-lg border border-zinc-900",
                )}
              >
                {isOpen
                  ? options.map((item, index) => (
                      <li
                        className={clsx(
                          highlightedIndex === index && "bg-gray-200",
                          selectedItem === item && "bg-gray-200",
                          "py-3 px-4  flex flex-col z-50 cursor-pointer text-xl font-normal border-0",
                        )}
                        key={item.value}
                        {...getItemProps({
                          index,
                          item,
                        })}
                      >
                        {item.value}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </>
      )}
    </Downshift>
  );
};
