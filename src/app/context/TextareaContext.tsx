"use client";
import React, { Dispatch, createContext, useContext, useState } from "react";

// Define the properties and their types that you want to store in the context
interface TextareaContextProps {
  TextareaContent: string;
  textarea: string;
  setTextarea: Dispatch<string>;
  buttonClick: boolean;
  setButtonClick: Dispatch<boolean>;
  link: string;
  setLink: Dispatch<string>;
  check: boolean;
  setCheck: Dispatch<boolean>;
}

export const TextareaContext = createContext<TextareaContextProps | undefined>(
  undefined
);

export const useTextareaContext = () => {
  const context = useContext(TextareaContext);
  if (!context) {
    throw new Error(
      "useTextareaContext must be used within a TextareaContextProvider"
    );
  }
  return context;
};

const ProviderTextarea: React.FC<{
  value?: Partial<TextareaContextProps>;
  children: React.ReactNode; // Include the React.ReactNode type for children
}> = ({ value, children }) => {
  const [textarea, setTextarea] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  const [link, setLink] = useState("");
  const [check, setCheck] = useState(false);

  // Add the missing setTextarea function to the context value
  const contextValue: TextareaContextProps = {
    ...value,
    TextareaContent: value?.TextareaContent ?? "", // Provide a default value if not provided
    textarea,
    setTextarea,
    buttonClick,
    setButtonClick,
    link,
    setLink,
    check,
    setCheck,
  };

  return (
    <TextareaContext.Provider value={contextValue}>
      {children}
    </TextareaContext.Provider>
  );
};
export { ProviderTextarea };
