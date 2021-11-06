import FormWrapper from "./Components/FormWrapper";
import TextBox from "./Components/TextBox";
import { useState } from "react";
import { UserProfile } from "@auth0/nextjs-auth0";

const CreateCompany = (props: { user: UserProfile }) => {
  const [companyName, setCompanyName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [CIN, setCIN] = useState<string>("");

  return (
    <FormWrapper title="Create a Company">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // TODO: create api route for creating companies and users
          const createdUser = {
            id: 1,
            email: props.user.email as string,
            name: props.user.name as string,
            picture: props.user.picture as string,
            role: "EMPLOYER",
          };

          const createdCompany = {
            // TODO: fetch id from created User
            userId: 1,
            name: companyName,
            description: description,
            logo: logo,
            website: website,
            CIN: CIN,
          };
          console.log(createdUser, createdCompany);
        }}
      >
        <div className="mt-5">
          <TextBox
            title="Company Name"
            placeholder="Company Name"
            value={companyName}
            setValue={setCompanyName}
          />
        </div>
        <div className={`flex flex-col gap-1`}>
          <h3 className="uppercase font-semibold text-sm">Description</h3>
          <h3 className="text-sm">
            Enter a short description about your company
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
          description="A url that points to your company's logo"
          placeholder="Logo"
          value={logo}
          setValue={setLogo}
        />
        <TextBox
          title="Website"
          placeholder="Website"
          value={website}
          setValue={setWebsite}
        />
        <TextBox
          title="CIN Number"
          description="A CIN number is proof of official registration of a company. We only support India Registered Companies at the moment"
          placeholder="CIN"
          value={CIN}
          setValue={setCIN}
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
