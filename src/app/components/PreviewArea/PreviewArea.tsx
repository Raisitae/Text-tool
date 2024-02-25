"use client";
import React, { useState } from "react";
import { TextareaHTMLAttributes } from "react";
// import fonts from another file in this same folder called font
import { PreviewStyle } from "../../utils/previewStyle";

import { useTextareaContext } from "@/app/context/TextareaContext";

export const PreviewArea: React.FC<{}> = ({}) => {
  const { textareaContent } = useTextareaContext();

  // should add dom purify
  console.log(textareaContent);
  return (
    <div className="flex flex-col">
      <h2 className="mb-1 text-xl text-light-grey font-bold mt-4">Preview</h2>
      <PreviewStyle />
      <div
        //placeholder={placeholder}
        //onChange={handleInputChange}
        spellCheck="false"
        contentEditable={false}
        //this textarea only tracks what the users is selecting
        dangerouslySetInnerHTML={{ __html: textareaContent || "" }}
        id="textarea__preview"
        className={`
            bg-medium-grey w-full min-h-56 mt-2.5 placeholder:text-placeholder-grey text-light-grey border border-black transition ease-in-out delay-150 px-6 py-4 rounded-3xl`}></div>
    </div>
  );
};

export default PreviewArea;
