"use client";

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
} from "./fonts";
import { Dispatch } from "react";

const translateFont = (font: string) => {
  console.log(font);
  switch (font) {
    case "Montserrat Light":
      return montLight;
    case "Open Sans":
      return openSans;
    case "Open Sans Bold":
      return openSansBold;
    case "Roboto":
      return roboto;
    case "Volkhov":
      return volkov;
    case "Source Sans Pro":
      return sourceSansPro;
    case "Noto Serif":
      return notoSerif;
    case "Manrope":
      return manrope;
    case "Karla":
      return karla;
    default:
      return notoSerif; // Assign a default font here
  }
};

export const handleAll = (
  type: string,
  setHeading: Dispatch<NextFont>,
  setLink: Dispatch<NextFont>,
  setParagraph: Dispatch<NextFont>,
  font: string
) => {
  let chosenFont: NextFont = translateFont(font);
  switch (type) {
    case "Heading font":
      setHeading(chosenFont);
      break;
    case "Paragraph font":
      setParagraph(chosenFont);
      break;
    case "Link font":
      setLink(chosenFont);
      break;
  }
};
