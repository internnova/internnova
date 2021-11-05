import React, { useState } from "react";
import SmallButton from "../../SmallButton";

type DropDownListProps = {
  // values will not be a useState item, just a constant
  values: { id: string; value: string }[];
  setChosenValues: (values: { id: string; value: string }[]) => void;
  title: string;
};

const DropDownList = (props: DropDownListProps) => {
  const [chosenValues, setChosenValues] = useState<
    { id: string; value: string }[]
  >([]);

  const [tempChosenValue, setTempChosenValue] = useState<string>("");

  const addNewValue = (value: { id: string; value: string }) => {
    setChosenValues([...chosenValues, value]);
  };

  const removeValue = (value: { id: string; value: string }) => {
    setChosenValues(chosenValues.filter((v) => v.id !== value.id));
  };

  const buttonStyle =
    "flex-no-shrink p-2 ml-4 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500";

  return (
    <div>
      <form
        onSubmit={() => {
          const valueObject = props.values.filter((value) => {
            value.id === tempChosenValue;
          })[0];
          if (valueObject) {
            addNewValue(valueObject);
          }
          props.setChosenValues(chosenValues);
        }}
      >
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
        <span className="text-gray-600"> {props.title}</span>

        <select
          className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={(e) => setTempChosenValue(e.target.value)}
        >
          {props.values.map((value) => (
            <option key={value.id} value={value.id}>
              {value.value}
            </option>
          ))}
        </select>
        <SmallButton buttonType="submit" content="Add" />
      </form>
      <div>
        {chosenValues.map((value) => (
          <div className="flex mb-4 items-center max-w-xs" key={value.id}>
            <p className="w-full text-gray-600 font-semibold">{value.value}</p>
            <button className={buttonStyle} onClick={() => removeValue(value)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownList;
