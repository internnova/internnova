import React from "react";

interface SmallButtonProps {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "button" | "submit" | "reset";
}
const SmallButton = ({ content, onClick, buttonType }: SmallButtonProps) => {
  return (
    <>
      <button
        className="button"
        onClick={(e) => onClick && onClick(e)}
        type={buttonType}
      >
        {content}
      </button>
    </>
  );
};

export default SmallButton;
