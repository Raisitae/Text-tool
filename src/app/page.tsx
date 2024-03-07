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
    <main className="max-h-screen w-full flex flex-col grid-cols-1 justify-start align-center bg-dark-grey overflow-x-hidden">
      <Header
        title={"Quick HTML formatting"}
        subtitle={"by Raisitae"}
        link={"link"}
      />
      <div className="grid grid-cols-6 h-avail">
        <div className="items-left gap-1 col-span-1 overflow-scroll overflow-x-hidden p-7 bg-[#151516]">
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
          <FontSelector text="Font selector" />
        </div>
        <div className="col-span-5 flex px-7 items-center">
          <div className="flex flex-col items-left w-1/2">
            <TextArea placeholder="Enter your text here" />
          </div>
          <div className="border-4 mx-6 my-5 h-text border-border-grey"></div>
          <div className="flex flex-col items-left w-1/2">
            <PreviewArea />
          </div>
        </div>
      </div>
    </main>
  );
}
