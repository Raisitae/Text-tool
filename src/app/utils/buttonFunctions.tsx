"use client";

import { Dispatch, SetStateAction } from "react";

//const { textarea, setTextarea, buttonClick, setButtonClick } =
// useTextareaContext();

//const [sentences, setSentences] = useState<string[]>([]);

interface ButtonFunctionsProps {
  setTextarea: Dispatch<SetStateAction<string>>;
  setButtonClick: Dispatch<SetStateAction<boolean>>;
}

//it would be good to have a function that removes emtpy space
//from the beggining and the end of the textarea
//so the tags dont appear with <tag>         then your text   <tag>

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
  if (textarea === " ") {
    console.log(tag);
    switch (tagCase) {
      case 1: //normal tags only 1
      case 2: //normal tags multiple
        setTextarea(`<${tag}></${tag}>`);
        break;
      case 3: //br
        setTextarea(`<${tag}/>`);
        break;
      case 4: // a href
        setTextarea(
          `<${tag} href="${link}" ${check ? `target="_blank">` : `>`}</${tag}>`
        );
        break;
    }
  }
  let numberOfLineBreaks = (textarea.match(/\n/g) || []).length;
  if (numberOfLineBreaks <= 0) {
    switch (tagCase) {
      case 1: //normal tags only 1
      case 2: //normal tags multiple
        setTextarea(`<${tag}>` + textarea + `</${tag}>`);
        break;
      case 3: //br
        setTextarea(textarea + `<${tag}/>`);
        break;
      case 4: // a href
        setTextarea(
          `<${tag} href="${link}" ${check ? `target="_blank">` : `>`}` +
            textarea +
            `</${tag}>`
        );
        break;
    }
  } else {
    // Split the text into sentences based on line breaks

    // maybe we should add a br between the paragraphs. not sure.
    const newSentences = textarea.split(/\n+/);
    setSentences(newSentences);
    for (let i = 0; i < newSentences.length; i++) {
      switch (tagCase) {
        case 2: //normal tags
          let textChanged1 = `<${tag}>` + newSentences[i] + `</${tag}>`;
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
  setButtonClick(true);
};

export const handleSentenceCase = (text: string) => {
  // Split the text into words based on whitespace characters
  const words = text.split(/\s+/);

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
