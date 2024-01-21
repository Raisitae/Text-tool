import Image from "next/image";
import Selector from "./components/Selector/Selector";
import { selectorsData } from "./components/Selector/SelectorData";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-dark-grey">
      <div>
        <Header
          title={"Quick HTML formatting"}
          subtitle={"by Raisitae"}
          link={"link"}
        />
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
      </div>
    </main>
  );
}
