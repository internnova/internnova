import React from "react";

type TextBoxProps = {
  title: string;
  description?: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  type?: string;
  width?: string;
  height?: string;
  minValue?: string | number;
  maxValue?: string | number;
  minLength?: number;
  maxLength?: number;
};

const TextBox = (props: TextBoxProps) => {
  return (
    <div className="pb-5">
      <div className={`flex flex-col gap-1`}>
        <h3 className="text-grey-700 text-sm font-semibold uppercase">
          {props.title}
        </h3>
        {props.description && (
          <h3 className="text-grey-700 text-sm">{props.description}</h3>
        )}
        <input
          type={props.type}
          required
          className={`${props.width} ${props.height} text-grey-700 rounded-md outline-none border p-5 `}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          min={props.minValue}
          max={props.maxValue}
          minLength={props.minLength}
          maxLength={props.maxLength}
        />
      </div>
    </div>
  );
};

export default TextBox;
