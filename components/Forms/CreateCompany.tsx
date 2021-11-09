import { useRouter } from "next/router";
import { useState } from "react";
import { SupabaseUser } from "../../lib/SupabaseUser";
import FormWrapper from "./Components/FormWrapper";
import TextBox from "./Components/TextBox";

type CreateCompanyProps = {
  user: SupabaseUser;
};

const CreateCompany = (props: CreateCompanyProps) => {
  const [companyName, setCompanyName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [CIN, setCIN] = useState<string>("");
  const router = useRouter();
  // SHUT UP ESLINT
  console.log(router);

  return (
    <FormWrapper title="Create a Company">
      <form
        onSubmit={(e) => {
          try {
            e.preventDefault();
            console.log(props.user, "user");

            const createdUserAndCompany = {
              email: props.user?.email,
              name: companyName,
              role: "EMPLOYER",
              logo: logo,
              description: description,
              website: website,
              CIN: CIN,
            };

            fetch("/api/db/createUserAndCompany", {
              method: "POST",
              body: JSON.stringify(createdUserAndCompany),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.text())
              .then(() => router.push("/"));
            /*eslint-disable*/
          } catch (e: any) {
            setError(e?.message);
          }
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
          <div>
            <h3 className="text-red-500">{error}</h3>
          </div>
          <h3 className="text-sm font-semibold uppercase">Description</h3>
          <h3 className="text-sm">
            Enter a short description about your company
          </h3>
          <textarea
            placeholder="Enter A Description"
            className="h-60 text-grey-700 p-5 mb-5 border rounded-md"
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
