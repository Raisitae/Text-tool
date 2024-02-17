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

export const handleAll = (
  type: string,
  setButtonClick: Dispatch<boolean>,
  setHeading: Dispatch<NextFont>,
  setLink: Dispatch<NextFont>,
  setParagraph: Dispatch<NextFont>
) => {
  switch (type) {
    case "heading":

    case "paragraph":
      break;
    case "link": //br
      break;
  }
};
