"use client";
import React, { useState } from "react";
import { TextareaHTMLAttributes } from "react";

// import fonts from another file in this same folder called font
// and there put all the options for the fonts

interface FormProps {
  //placeholder: string;
}

export const PreviewArea: React.FC<FormProps> = ({}) => {
  const value = "This is a display of your text";

  return (
    <div className="flex flex-col">
      <h2 className="mb-1 text-xl text-light-grey font-bold mt-4">Preview</h2>
      <div
        //placeholder={placeholder}
        //onChange={handleInputChange}
        spellCheck="false"
        contentEditable={false}
        className={`
            bg-medium-grey w-full min-h-56 mt-2.5 placeholder:text-placeholder-grey text-light-grey border border-black transition ease-in-out delay-150 px-6 py-4 rounded-3xl`}>
        {value}
      </div>
    </div>
  );
};

export default PreviewArea;