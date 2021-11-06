import FormWrapper from "./Components/FormWrapper";
import DropDownList from "./Components/DropDownList";
import TextBox from "./Components/TextBox";
import { useState } from "react";

const values = [
  {
    id: "Marketing",
    value: "Marketing",
  },
  {
    id: "Graphic_Design",
    value: "Graphic Design",
  },
  {
    id: "Programming",
    value: "Programming",
  },
  {
    id: "Communication",
    value: "Communication",
  },
  {
    id: "Charity",
    value: "Charity",
  },
];

const CreateCompany = () => {
  const [userFullName, setUserFullName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  /*eslint-disable  @typescript-eslint/no-unused-vars*/
  const [interests, setInterests] = useState<{ id: string; value: string }[]>(
    []
  );

  return (
    <FormWrapper title="Sign Up">
      <form>
        <div className="mt-5">
          <TextBox
            title="Full Name"
            placeholder="Full Name"
            value={userFullName}
            setValue={setUserFullName}
          />
        </div>
        <DropDownList
          values={values}
          title="Choose an interest"
          setChosenValues={setInterests}
        />
        <div className={`flex flex-col gap-1`}>
          <h3 className="uppercase font-semibold text-muted1 text-sm">
            Description
          </h3>
          <textarea
            placeholder="Enter A bio"
            className="h-60 text-grey-700 rounded-md border p-5 mb-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="my-5">
          <button type="submit" className="button w-full">
            Sign Up
          </button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default CreateCompany;
