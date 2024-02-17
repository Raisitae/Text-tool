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

//esto es probablemente un componente y haya que moverlo

interface PreviewProps {
  heading?: NextFont;
  links?: NextFont;
  paragraph?: NextFont;
}

export const PreviewStyle: React.FC<PreviewProps> = ({
  heading,
  links,
  paragraph,
}) => {
  console.log();
  return (
    <style>
      {`
      #textarea__preview h1,
      #textarea__preview h2,
      #textarea__preview h3,
      #textarea__preview h4,
      #textarea__preview h5,
      #textarea__preview h6,
      #textarea__preview h7{
        font-family: ${
          heading ? heading.style.fontFamily : notoSerif.style.fontFamily
        };
      };
        
      #textarea__preview p{
        font-family: ${
          paragraph ? paragraph.style.fontFamily : notoSerif.style.fontFamily
        };
      };
        
      #textarea__preview a{
        font-family: ${
          links ? links.style.fontFamily : notoSerif.style.fontFamily
        };
      } `}
    </style>
  );
};
