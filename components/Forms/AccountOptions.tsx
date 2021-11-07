import React from "react";
import { Role } from "@prisma/client";

type AccountOptionsProps = {
  setDone: (value: boolean) => void;
  accountType: Role;
  setAccountType: (value: Role) => void;
};

const AccountOptions = (props: AccountOptionsProps) => {
  return (
    <>
      <div className="flex items-center h-screen w-screen overflow-hidden">
        <div className="mx-auto text-left md:w-[60%] xl:w-[32rem]">
          <div className="flex flex-col gap-1 pb-10">
            <h3 className="uppercase font-semibold text-blue-700 text-3xl">
              Choose a role
            </h3>
            <AccountTypeOptions
              accountType={props.accountType}
              setAccountType={props.setAccountType}
            />
          </div>
          <button
            type="submit"
            className="button w-full"
            onClick={() => props.setDone(true)}
          >
            Next
          </button>
        </div>
      </div>
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
        illustrationUrl="/assets/img/onboarding/highschooler.png"
        title="High Schooler"
        code="INTERN"
        accountType={props.accountType}
        setAccountType={props.setAccountType}
      />
      <AccountTypeOption
        illustrationUrl="/assets/img/onboarding/employer.png"
        title="Employer"
        code="EMPLOYER"
        accountType={props.accountType}
        setAccountType={props.setAccountType}
      />
    </div>
  );
};

type AccountTypeOptionProps = {
  illustrationUrl: string;
  title: string;
  code: Role;
  accountType: Role;
  setAccountType: (value: Role) => void;
};

const AccountTypeOption = ({
  illustrationUrl,
  title,
  code,
  accountType,
  setAccountType,
}: AccountTypeOptionProps) => {
  return (
    <div
      className={`p-5 rounded-lg ${
        accountType === code ? "bg-blue-700" : "bg-blue-500"
      } col-span-1 w-1/2 h-[18rem] flex flex-col justify-between gap-6 select-none hover:opacity-[0.7] cursor-pointer`}
      onClick={() => setAccountType(code)}
    >
      <img
        src={
          accountType === code
            ? "/assets/img/onboarding/checkmark_illustration.svg"
            : illustrationUrl
        }
        alt=""
        className="max-w-[200px] mx-auto"
      />

      <h2 className="text-lg font-semibold text-white text-center">{title}</h2>
    </div>
  );
};

export default AccountOptions;
