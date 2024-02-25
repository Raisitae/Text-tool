"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { useTextareaContext } from "../../context/TextareaContext";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface FormProps {
  placeholder: string;
}

export const TextArea: React.FC<FormProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectionUser, setSelectionUser] = useState("");

  const {
    textarea,
    setTextarea,
    buttonClick,
    setButtonClick,
    setTextareaContent,
  } = useTextareaContext();

  useEffect(() => {
    handleButtonClick();
    setButtonClick(false);
    setTextareaContent(inputValue);
  }, [buttonClick]);
  // this will need fix

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    setInputValue(newContent);
    setTextareaContent(newContent);
  };

  const handleButtonClick = () => {
    // Use the selectionUser value to replace the selected text
    if (selectionUser) {
      const start = inputValue.indexOf(selectionUser);
      const end = start + selectionUser.length;

      // Replace the selected text
      const newInputValue =
        inputValue.substring(0, start) + textarea + inputValue.substring(end);

      setInputValue(newInputValue);
      setSelectionUser(""); // Clear the selection after replacement
    } else {
      const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        setInputValue(event.target.value);
        const positionOfClick = event.target.selectionStart;
        console.log(positionOfClick);

        const end = positionOfClick + 1;

        const newInputValue =
          inputValue.substring(0, positionOfClick) + inputValue.substring(end);

        setSelectionUser(newInputValue); // Clear the selection after replacement
      };
    }
  };

  const getTextSelection = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const selectedText = window.getSelection()?.toString() || "";
    setSelectionUser(selectedText);
    setTextarea(selectedText);
  };

  return (
    <div className="flex justify-end items-end">
      <textarea
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onSelect={getTextSelection}
        spellCheck="false"
        className={`font-mono 
      bg-medium-grey w-full min-h-56 placeholder:text-placeholder-grey text-light-grey border border-black transition ease-in-out delay-150 px-6 py-4 rounded-3xl mt-5`}
      />
      <div className="absolute m-3 cursor-pointer">
        <svg
          data-tooltip-id="paste-character-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#F710B6"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default TextArea;
