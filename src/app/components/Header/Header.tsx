import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface HeaderProps {
  title: string;
  subtitle: string;
  link: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, link }) => {
  return (
    <div className="flex items-baseline px-7 py-7 bg-[#31242D]">
      <div className="mr-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F710B6"
          className="w-7 h-7">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>

      <h1 className={`${inter.className} text-4xl text-bubble-gum mr-1`}>
        {title}
      </h1>
      <h3>
        <a
          href={`${link}`}
          className={`${inter.className} text-bubble-gum hover:text-dark-bubble-gum`}>
          {subtitle}
        </a>
      </h3>
    </div>
  );
};

export default Header;
