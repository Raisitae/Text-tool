"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useTextareaContext } from "@/app/context/TextareaContext";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface CheckProps {
  label: string;
}

const Check: React.FC<CheckProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { setCheck } = useTextareaContext();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setCheck(!isChecked);
  };

  return (
    <div className="flex items-center mb-2 relative">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } cursor-pointer z-40 min-h-6 min-w-6 mr-2  relative checked:accent-bubble-gum`}
      />
      <div
        className={`${
          isChecked ? "opacity-0" : "opacity-100"
        } cursor-pointer absolute left-1 z-10 rounded min-h-6 min-w-6 mr-2 p-2 bg-medium-grey border border-border-grey`}></div>
      <p className="text-light-grey">{label}</p>
    </div>
  );
};

export default Check;
