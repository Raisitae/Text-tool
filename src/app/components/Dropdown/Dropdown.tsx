"use client";
import React, { useState } from "react";
import { useFontContext } from "@/app/context/FontContext";
import { handleAll } from "@/app/utils/fontFunctions";
import { NextFont } from "next/dist/compiled/@next/font";

interface ButtonProps {
  fonts: Array<any>;
  title: string;
  type: string;
  isOpen: boolean;
  onClick: () => void;
}

const Dropdown: React.FC<ButtonProps> = ({ fonts, title, isOpen, onClick }) => {
  const [font, setFont] = useState<string>("Noto Serif");
  const { setHeading, heading, setLink, setParagraph } = useFontContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as HTMLButtonElement;
    setFont(target.value);
    //aqui va a haber que setear la font global de acuerdo al title y al value tocado
    //si mando la font, todavia el font no esta seteado y se manda cualq cosa asi que voy a mandar el value
    handleAll(title, setHeading, setLink, setParagraph, target.value);
    onClick();
  };

  return (
    <div className="flex flex-col w-full">
      <button
        className={`mb-2 flex flex-row justify-self-stretch bg-border-grey hover:bg-bubble-gum text-light-grey transition ease-in-out delay-150 px-4 py-2 rounded-sm mr-4`}
        type="button"
        onClick={onClick}>
        {font != null ? font : title}
        <span className="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } bg-dark-grey p-3 absolute rounded flex flex-col items-baseline gap-2 border border-black  w-[94%]`}>
        {fonts.map((text, index) => (
          <button
            key={index}
            className=" text-light-grey hover:text-bubble-gum transition ease-in-out delay-150"
            onClick={handleClick}
            value={text.font}>
            {text.font}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
