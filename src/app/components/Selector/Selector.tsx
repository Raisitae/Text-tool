import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Check from "../Check/Check";

interface SelectorProps {
  title: string;
  type: number;
  placeholder: string;
  label: string;
  buttons: Array<any>;
}

export default function Selector({
  title,
  buttons,
  type,
  placeholder,
  label,
}: SelectorProps) {
  return (
    <div className="">
      <h2 className="mb-2 text-light-grey font-bold">{title}</h2>
      {type === 1 ? (
        buttons.map((button, index) => (
          <Button key={index} text={button.text} tag={button.tag} />
        ))
      ) : (
        <div className="flex align-center">
          <Input placeholder={placeholder} />
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} tag={button.tag} />
          ))}
          <Check label={label} />
        </div>
      )}
    </div>
  );
}
