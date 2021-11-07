import { Tag } from "@prisma/client";
import React, { useState } from "react";
import SmallButton from "../../SmallButton";

type DropDownListProps = {
  // values will not be a useState item, just a constant
  values: string[];
  setChosenValues: (values: string[]) => void;
  title: string;
};

const DropDownList = (props: DropDownListProps) => {
  const [chosenValues, setChosenValues] = useState<string[]>([]);

  const [tempChosenValue, setTempChosenValue] = useState<string>("");

  const removeValue = (value: string) => {
    setChosenValues(chosenValues.filter((v) => v !== value));
  };

  const buttonStyleRed =
    "flex-no-shrink p-2 ml-4 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500";

  return (
    <div>
      <svg
        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fillRule="nonzero"
        />
      </svg>
      <div>
        <h3 className="uppercase text-grey-700 font-semibold text-sm">
          {props.title}
        </h3>
      </div>

      <div className="flex justify-between mb-4 items-center ">
        <select
          className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={(e) => setTempChosenValue(e.target.value)}
        >
          {props.values.map((value) => (
            <option key={value} value={value}>
              {value.replace("_", " ")}
            </option>
          ))}
        </select>
        <SmallButton
          content="Add new interest"
          onClick={(e) => {
            e.preventDefault();

            /*eslint-disable*/
            if (tempChosenValue && !(tempChosenValue in chosenValues)) {
              props.setChosenValues([...chosenValues, tempChosenValue]);
              setChosenValues([...chosenValues, tempChosenValue]);
            }
          }}
        />
      </div>
      <div className="pl-4">
        {chosenValues.map((value) => (
          <div className="flex mb-4 items-center mr-4" key={value}>
            <p className="w-full text-gray-500 font-semibold">
              {value.replace("_", " ")}
            </p>
            <button
              className={buttonStyleRed}
              onClick={() => removeValue(value)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownList;
