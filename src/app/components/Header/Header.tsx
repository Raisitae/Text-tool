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
    <div className="flex items-baseline mb-5">
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
