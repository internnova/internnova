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
  min?: string | number;
  max?: string | number;
};

const TextBox = ({
  title,
  placeholder,
  value,
  setValue,
  description,
  type = "text",
  width = "w-full",
  height = "h-[3rem]",
  min = undefined,
  max = undefined,
}: TextBoxProps) => {
  return (
    <div className="pb-5">
      <div className={`flex flex-col gap-1`}>
        <h3 className="uppercase text-grey-700 font-semibold text-sm">
          {title}
        </h3>
        {description && (
          <h3 className="text-grey-700 text-sm">{description}</h3>
        )}
        <input
          type={type}
          className={`${width} ${height} text-grey-700 rounded-md outline-none border p-5 `}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};

export default TextBox;
