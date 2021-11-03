import FormWrapper from "../FormWrapper";
import { TextBox } from "../TextBox";
import { useState } from "react";

const CreateCompany = () => {
  const [userFullName, setUserFullName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <FormWrapper title="Create a Company">
      <form>
        <div className="mt-5">
          <TextBox
            title="Full Name"
            placeholder="Full Name"
            value={userFullName}
            setValue={setUserFullName}
          />
        </div>
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
