import React from "react";

type SmallButtonProps = {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "button" | "submit" | "reset";
  small?: boolean;
};

const SmallButton = (props: SmallButtonProps) => {
  // simple small button
  return (
    <>
      <button
        className={`hover:bg-blue-600 ${
          props.small ? "px-3 py-3" : "px-8 py-3"
        } font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow`}
        onClick={(e) => props.onClick && props.onClick(e)}
        type={props.buttonType}
      >
        {props.content}
      </button>
    </>
  );
};

export default SmallButton;
