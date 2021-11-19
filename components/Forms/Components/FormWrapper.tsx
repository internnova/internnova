import React from "react";

type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
  textSm?: boolean;
};

const FormWrapper = (props: FormWrapperProps) => {
  return (
    <div className="flex items-center w-full mt-20 overflow-hidden">
      <div className="mx-auto text-left w-[90%] md:w-[60%] xl:w-[32rem]">
        <h1
          className={`text-[2.0rem] ${
            !props.textSm && "xl:text-[2.8rem] "
          } font-extrabold`}
        >
          {props.title}
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default FormWrapper;
