"use client";
import React, { useState } from "react";
import { TextareaHTMLAttributes } from "react";
// import fonts from another file in this same folder called font
import { PreviewStyle } from "../../utils/previewStyle";

import { useTextareaContext } from "@/app/context/TextareaContext";

export const PreviewArea: React.FC<{}> = ({}) => {
  const { textareaContent } = useTextareaContext();

  // should add dom purify
  return (
    <div className="flex flex-col ">
      <PreviewStyle />
      <div
        //onChange={handleInputChange}
        spellCheck="false"
        contentEditable={false}
        //this textarea only tracks what the users is selecting
        dangerouslySetInnerHTML={{
          __html: textareaContent || "Preview your text here",
        }}
        id="textarea__preview"
        className={`
        h-text overflow-scroll break-words bg-medium-grey w-full ${
          textareaContent == ""
            ? `text-placeholder-grey`
            : `text-light-grey border`
        }   border-black transition ease-in-out delay-150 px-6 py-4 rounded-3xl`}></div>
    </div>
  );
};

export default PreviewArea;
