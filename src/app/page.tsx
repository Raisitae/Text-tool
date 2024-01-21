import Image from "next/image";
import Selector from "./components/Selector/Selector";
import { selectorsData } from "./components/Selector/SelectorData";
import Header from "./components/Header/Header";
import TextArea from "./components/TextArea/TextArea";
import Instructions from "./components/Instructions/Instructions";
import FontSelector from "./components/FontSelector/FontSelector";
import PreviewArea from "./components/PreviewArea/PreviewArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center align-center bg-dark-grey p-12 ">
      <Header
        title={"Quick HTML formatting"}
        subtitle={"by Raisitae"}
        link={"link"}
      />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-left w-1/2 h-full">
          <div className="flex flex-col items-left justify-center gap-1">
            {selectorsData.map(
              ({ title, buttons, placeholder, label, type }, index) => (
                <Selector
                  key={index}
                  title={title}
                  buttons={buttons}
                  placeholder={placeholder ? placeholder : ""}
                  label={label ? label : ""}
                  type={type}
                />
              )
            )}
            <TextArea placeholder="Enter your text here" />
          </div>
        </div>
        <div className="border-4 mx-2 border-medium-grey"></div>
        <div className="flex flex-col items-left w-1/2 gap-1">
          <Instructions />
          <FontSelector text="Font selector" />
          <PreviewArea />
        </div>
      </div>
    </main>
  );
}
