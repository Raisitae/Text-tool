"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface FormProps {
  placeholder: string;
}

export const Input: React.FC<FormProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      className={`inter-button ${inter.className}
      bg-medium-grey mb-2 placeholder:text-placeholder-grey text-light-grey border border-black transition ease-in-out delay-150 px-4 py-2 rounded-3xl mr-4`}
    />
  );
};

export default Input;
