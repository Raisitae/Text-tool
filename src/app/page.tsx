import Image from "next/image";
import Selector from "./components/Selector/Selector";
import { selectorsData } from "./components/Selector/SelectorData";
import Header from "./components/Header/Header";
import TextArea from "./components/TextArea/TextArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center align-center bg-dark-grey p-12">
      <Header
        title={"Quick HTML formatting"}
        subtitle={"by Raisitae"}
        link={"link"}
      />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-left w-1/2">
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
        <div className="flex flex-col items-left w-1/2">
          <h2 className="mb-2 text-light-grey font-bold">Instructions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            repellat deserunt esse placeat excepturi ipsum, adipisci qui
            architecto id cupiditate, pariatur reiciendis soluta. Quaerat libero
            dolores totam recusandae aliquam suscipit!
          </p>
        </div>
      </div>
    </main>
  );
}
