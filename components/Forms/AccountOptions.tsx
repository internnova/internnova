import React from "react";
import SmallButton from "../SmallButton";
import { Role } from "@prisma/client";

type AccountOptionsProps = {
  setDone: (value: boolean) => void;
  accountType: Role;
  setAccountType: (value: Role) => void;
};

const AccountOptions = (props: AccountOptionsProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="uppercase font-semibold text-muted1 text-sm">
          What Are You On Unistrive For?
        </h3>
        <AccountTypeOptions
          accountType={props.accountType}
          setAccountType={props.setAccountType}
        />
      </div>
      <SmallButton content="Next" onClick={() => props.setDone(true)} />
    </>
  );
};

type AccountTypeOptionsProps = {
  accountType: Role;
  setAccountType: (value: Role) => void;
};

const AccountTypeOptions = (props: AccountTypeOptionsProps) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <AccountTypeOption
        illustrationUrl="/highschooler_illustration.png"
        title="High Schooler"
        description="A High-Schoolers Purpose on this platform is to seek mentorship from the students of their dream universities."
        code="EMPLOYER"
        accountType={props.accountType}
        setAccountType={props.setAccountType}
      />
      <AccountTypeOption
        illustrationUrl="/consultant_illustration.png"
        title="Consultant"
        description="A Consultants purpose on this platform is to mentor high-schoolers on how to get into the university they go to."
        code="INTERN"
        accountType={props.accountType}
        setAccountType={props.setAccountType}
      />
    </div>
  );
};

type AccountTypeOptionProps = {
  illustrationUrl: string;
  title: string;
  description: string;
  code: Role;
  accountType: Role;
  setAccountType: (value: Role) => void;
};

const AccountTypeOption = ({
  illustrationUrl,
  title,
  description,
  code,
  accountType,
  setAccountType,
}: AccountTypeOptionProps) => {
  return (
    <div
      className={`p-5 rounded-lg ${
        accountType === code ? "bg-accent1" : "bg-bgVariant1"
      } flex flex-col items-center text-center gap-6 w-1/2 h-[20rem] select-none hover:opacity-[0.7] cursor-pointer`}
      onClick={() => setAccountType(code)}
    >
      <img
        src={
          accountType === code ? "/checkmark_illustration.svg" : illustrationUrl
        }
        alt=""
        className=""
      />

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted1">{description}</p>
      </div>
    </div>
  );
};

export default AccountOptions;
