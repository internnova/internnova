import { useRouter } from "next/router";
import { useState } from "react";
import { SupabaseUser } from "../../lib/SupabaseUser";
import { Job } from "@prisma/client";
import FormWrapper from "./Components/FormWrapper";
import { Company } from "@prisma/client";

type CreateCompanyProps = {
  user: SupabaseUser;
  job: Job & { company: Company };
};

const CreateApplication = (props: CreateCompanyProps) => {
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [textLength, setTextLength] = useState<number>(0);
  const router = useRouter();

  return (
    <FormWrapper
      title={`Apply to ${props.job.company.name}, for the ${props.job.position} position`}
      textSm
    >
      <form
        onSubmit={(e) => {
          try {
            e.preventDefault();

            const createdUserAndCompany = {
              description,
              user: props.user,
              job: props.job,
            };

            fetch("/api/db/createApplication", {
              method: "POST",
              body: JSON.stringify(createdUserAndCompany),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(() => {
              setError("");
              router.push("/");
            });
            /*eslint-disable*/
          } catch (e: any) {
            setError(e?.message);
          }
        }}
        className="mt-8"
      >
        <div>
          <h3 className="text-red-500">
            {" "}
            {(() => {
              if (error !== "") {
                setError("");
                return "Please fill out all fields";
              } else {
                return "";
              }
            })()}
          </h3>
        </div>
        <div className={`flex flex-col gap-1`}>
          <h3 className="text-sm font-semibold uppercase">Description</h3>
          <h3 className="text-sm my-1 mb-4">
            Why should you be hired by this company? What makes you unique? Do
            you have the skills and experience to do this job?
            <br />
            Use 100-1000 words
          </h3>
          <span className="uppercase text-xs">Text Length: {textLength}</span>
          <textarea
            placeholder="Enter A Description"
            className="h-60 text-gray-700 p-5 mb-5 border rounded-md"
            minLength={100}
            maxLength={10000}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setTextLength(description.length);
            }}
          />
        </div>
        <div className="my-5">
          <button type="submit" className="button w-full">
            Apply
          </button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default CreateApplication;
