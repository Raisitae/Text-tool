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

import { useFontContext } from "@/app/context/FontContext";

export const PreviewStyle: React.FC = () => {
  const { heading, paragraph, link } = useFontContext();
  //I will need to go to oBundle's tmr and check the font size for each heading and add them below
  const styles = `
    #textarea__preview h1,
    #textarea__preview h2,
    #textarea__preview h3,
    #textarea__preview h4,
    #textarea__preview h5,
    #textarea__preview h6,
    #textarea__preview h7 {
      font-family: ${heading.style.fontFamily};
    }

    #textarea__preview h1{
      font-size: 1rem;
    }
      
    #textarea__preview {
      font-family: ${paragraph.style.fontFamily};
    }
      
    #textarea__preview a {
      font-family: ${link.style.fontFamily};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
};

export default PreviewStyle;
