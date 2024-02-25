"use client";
import React, {
  Dispatch,
  createContext,
  useContext,
  useState,
  SetStateAction,
} from "react";
import { NextFont } from "next/dist/compiled/@next/font";

import {
  montLight,
  openSans,
  openSansBold,
  roboto,
  volkov,
  notoSerif,
  manrope,
  karla,
  sourceSansPro,
} from "../utils/fonts";

// Define the properties and their types that you want to store in the context
interface FontContextProps {
  heading: NextFont;
  link: NextFont;
  paragraph: NextFont;
  setHeading: Dispatch<SetStateAction<NextFont>>;
  setLink: Dispatch<SetStateAction<NextFont>>;
  setParagraph: Dispatch<SetStateAction<NextFont>>;
}

export const FontContext = createContext<FontContextProps | undefined>(
  undefined
);

export const useFontContext = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFontContext must be used within a FontContextProvider");
  }
  return context;
};

const ProviderFontStyle: React.FC<{
  value?: Partial<FontContextProps>;
  children: React.ReactNode; // Include the React.ReactNode type for children
}> = ({ value, children }) => {
  const [heading, setHeading] = useState(notoSerif);
  const [link, setLink] = useState(notoSerif);
  const [paragraph, setParagraph] = useState(notoSerif);

  // Add the missing setTextarea function to the context value
  const contextValue: FontContextProps = {
    ...value,
    link,
    setLink,
    heading,
    setHeading,
    paragraph,
    setParagraph,
  };

  return (
    <FontContext.Provider value={contextValue}>{children}</FontContext.Provider>
  );
};
export { ProviderFontStyle };
