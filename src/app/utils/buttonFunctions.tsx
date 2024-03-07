"use client";

import { Dispatch, SetStateAction } from "react";

interface ButtonFunctionsProps {
  setTextarea: Dispatch<SetStateAction<string>>;
  setButtonClick: Dispatch<SetStateAction<boolean>>;
}

export const handleSentenceChange = (
  index: number,
  updatedSentence: string,
  sentences: string[],
  setSentences: (value: React.SetStateAction<string[]>) => void
) => {
  // Update the specified sentence in the array
  const newSentences = [...sentences];
  newSentences[index] = updatedSentence;
  setSentences(newSentences);
};

export const handleAll = (
  tagCase: number,
  tag: string,
  textarea: string,
  setTextarea: Dispatch<string>,
  setButtonClick: Dispatch<boolean>,
  setSentences: (value: React.SetStateAction<string[]>) => void,
  check?: boolean,
  link?: string
) => {
  //all this ifs should redirect to other functions above this one to make this moke atomic

  let numberOfLineBreaks = (textarea.match(/\n/g) || []).length;
  if (numberOfLineBreaks <= 0) {
    //this verification will have to be a function outside of this
    //enormous function
    console.log("length", textarea.length);
    let newString = textarea;
    let endSpace = false;
    let length = textarea.length - 1;
    while (newString[length] === " ") {
      newString = textarea.slice(0, length);
      endSpace = true;
      length -= 1;
    }
    // i will need to do the same for the beginning of the text
    //and do a verification for both begining and end
    // is something was removed
    //then a space at the beginning or end should be added

    switch (tagCase) {
      case 1: //normal tags only 1
      case 2: //normal tags multiple
        setTextarea(
          `<${tag}>` + newString + `</${tag}>${endSpace == true ? ` ` : ``}`
        );
        break;
      case 3: //br
        setTextarea(newString + `<${tag}/>${endSpace == true ? ` ` : ``}`);
        break;
      case 4: //a href
        setTextarea(
          `<${tag} href="${link}"${check ? `target="_blank">` : `>`}` +
            newString +
            `</${tag}>${endSpace == true ? ` ` : ``}`
        );
        break;
    }
  } else {
    if (tagCase === 1) {
      setTextarea(`<${tag}>` + textarea + `</${tag}>`);
    } else {
      const newSentences = textarea.split(/\n+/);
      setSentences(newSentences);
      for (let i = 0; i < newSentences.length; i++) {
        switch (tagCase) {
          case 2: //normal tags
            let textChanged1 =
              `<${tag}>` + newSentences[i] + `</${tag}>` + "\n";
            newSentences[i] = textChanged1;
            break;
          case 3: //br/
            let textChanged2 = newSentences[i] + `<${tag}/>`;
            newSentences[i] = textChanged2;
            break;
          case 4: // a href
            let textChanged3 =
              `<${tag} href="${link}" ${check ? `target="_blank">` : `>`}` +
              newSentences[i] +
              `</${tag}>`;
            newSentences[i] = textChanged3;
            break;
        }
      }
      let text = newSentences.join("\n");
      setTextarea(text);
    }
  }
  setButtonClick(true);
};

export const handleEmptySpaces = (
  textarea: string,
  setTextarea: Dispatch<string>,
  setButtonClick: Dispatch<boolean>
) => {
  //this function wont update the textarea
  //but it will modify a string that will be passed to the other
  //functions
  //and it should also verify the beining of the string
  //to remove spaces from there
};

export const handleSentenceCase = (text: string) => {
  // Split the text into words based on whitespace characters, and make them lower case
  const words = text.toLowerCase().split(" ");
  // Capitalize the first letter of each word
  const sentenceCaseText = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return sentenceCaseText;
};

export const handleCapitalization = (
  tagcase: string,
  textarea: string,
  setTextarea: Dispatch<string>,
  setButtonClick: Dispatch<boolean>
) => {
  console.log(tagcase);

  switch (tagcase) {
    case "upper":
      setTextarea(textarea.toUpperCase());
      console.log(tagcase);
      break;

    case "lower":
      console.log(tagcase);
      setTextarea(textarea.toLowerCase());
      break;

    case "sentence":
      console.log(tagcase);
      setTextarea(handleSentenceCase(textarea));
      break;

    // Add more cases if needed
    default:
      console.log("Unknown tagcase:", tagcase);
      break;
  }

  setButtonClick(true);
};
