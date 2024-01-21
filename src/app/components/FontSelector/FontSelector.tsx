"use client";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { fontSelectorsData } from "./FontSelectorData";

interface FontSelectorProps {
  text: string;
}

export default function FontSelector({ text }: FontSelectorProps) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col  justify-around">
      <h2 className="mb-2 text-light-grey font-bold">{text}</h2>
      <div className="grid grid-cols-3 grid-rows-1 w-full">
        {fontSelectorsData.map((font, index) => (
          <div key={index}>
            <h2 className="mb-2 text-light-grey font-bold">{font.title}</h2>
            <Dropdown
              key={index}
              fonts={font.buttons}
              title={font.title}
              isOpen={openDropdownIndex === index}
              onClick={() => handleDropdownClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
