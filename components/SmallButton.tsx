import React from "react";

type SmallButtonProps = {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "button" | "submit" | "reset";
};

const SmallButton = (props: SmallButtonProps) => {
  return (
    <>
      <button
        className="button"
        onClick={(e) => props.onClick && props.onClick(e)}
        type={props.buttonType}
      >
        {props.content}
      </button>
    </>
  );
};

export default SmallButton;
