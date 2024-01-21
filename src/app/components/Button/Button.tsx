"use client";

import { Inter } from "next/font/google";
import React from "react";

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
  const handleClick = () => {
    alert(tag);
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
