"use client";
import React, { Dispatch, createContext, useContext, useState } from "react";

// Define the properties and their types that you want to store in the context
interface FontContextProps {
  heading: string;
  link: string;
  paragraph: string;
  setHeading: Dispatch<string>;
  setLink: Dispatch<string>;
  setParagraph: Dispatch<string>;
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
  const [heading, setHeading] = useState("Noto Serif");
  const [link, setLink] = useState("Noto Serif");
  const [paragraph, setParagraph] = useState("Noto Serif");

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
