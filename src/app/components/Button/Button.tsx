"use client";

import { Inter } from "next/font/google";
import React, { useState } from "react";
import { useTextareaContext } from "../../context/TextareaContext";
import { handleAll, handleCapitalization } from "../../utils/buttonFunctions";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface ButtonProps {
  tag: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ tag, text }) => {
  const [sentences, setSentences] = useState<string[]>([]);

  const { textarea, setTextarea, buttonClick, setButtonClick, check, link } =
    useTextareaContext();

  const handleClick = () => {
    switch (tag) {
      case "ol":
      case "ul":
        handleAll(1, tag, textarea, setTextarea, setButtonClick, setSentences);
        break;
      case "b":
      case "i":
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "h7":
      case "li":
        handleAll(2, tag, textarea, setTextarea, setButtonClick, setSentences);
        break;
      case "br":
        handleAll(3, tag, textarea, setTextarea, setButtonClick, setSentences);
        break;
      case "a":
        handleAll(
          4,
          tag,
          textarea,
          setTextarea,
          setButtonClick,
          setSentences,
          check,
          link
        );
        break;
      case "upper":
      case "lower":
      case "sentence":
        console.log(tag);
        handleCapitalization(tag, textarea, setTextarea, setButtonClick);
        break;
      default:
        console.log(tag);
        break;
    }
  };

  return (
    <button
      className={` ${inter.className} mb-2 bg-bubble-gum hover:bg-dark-bubble-gum text-light-grey transition ease-in-out delay-150 px-4 py-2 rounded-3xl mr-4`}
      onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
