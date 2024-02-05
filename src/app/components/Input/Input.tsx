"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useTextareaContext } from "@/app/context/TextareaContext";

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

  const { setLink } = useTextareaContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setLink(newValue);
    // maybe this should be in the button later but in the meantime its okay, putting it in the button will reduce load time
    // this is causing the last letter to not be registered
  };
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
