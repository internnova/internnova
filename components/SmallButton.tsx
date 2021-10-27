import React from "react";
interface SmallButtonProps {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const SmallButton = ({ content, onClick }: SmallButtonProps) => {
  return (
    <>
      <button className="button" onClick={(e) => onClick && onClick(e)}>
        {content}
      </button>
    </>
  );
};

export default SmallButton;
