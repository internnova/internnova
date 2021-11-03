import FormWrapper from "../FormWrapper";
import { TextBox } from "../TextBox";
import { useState } from "react";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");

  return (
    <FormWrapper title="Create a Company">
      <form>
        <div className="mt-5">
          <TextBox
            title="Company Name"
            placeholder="Company Name"
            value={companyName}
            setValue={setCompanyName}
          />
        </div>
        <div className={`flex flex-col gap-1`}>
          <h3 className="uppercase font-semibold text-muted1 text-sm">
            Description
          </h3>
          <textarea
            placeholder="Enter A Description"
            className="h-60 text-grey-700 rounded-md border p-5 mb-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <TextBox
          title="Logo"
          placeholder="website"
          value={website}
          setValue={setWebsite}
        />
        <TextBox
          title="Industry"
          placeholder="Industry"
          value={industry}
          setValue={setIndustry}
        />
        <TextBox
          title="CIN Number"
          description="A CIN number is proof of official registration of a company. We only support India Registered Companies at the moment"
          placeholder="Industry"
          value={industry}
          setValue={setIndustry}
        />
        <div className="my-5">
          <button type="submit" className="button w-full">
            Create A Company
          </button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default CreateCompany;
