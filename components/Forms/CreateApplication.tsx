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
  const router = useRouter();

  return (
    <FormWrapper
      title={`Apply to ${props.job.position} at ${props.job.company.name}`}
    >
      <form
        onSubmit={(e) => {
          try {
            e.preventDefault();
            console.log(props.user, "user");

            const createdUserAndCompany = {
              description,
              user: props.user,
              job: props.job,
            };

            fetch("/api/db/createUserAndCompany", {
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
      >
        <div>
          <h3 className="text-red-500">
            {" "}
            {(() => {
              if (error !== "") {
                setError("");
                return "Please fill out all fields correctly and choose at least one interest";
              } else {
                return "";
              }
            })()}
          </h3>
        </div>
        <div className={`flex flex-col gap-1`}>
          <h3 className="text-sm font-semibold uppercase">Description</h3>
          <h3 className="text-sm">
            Why should you be hired by this company? What makes you unique?
          </h3>
          <textarea
            placeholder="Enter A Description"
            className="h-60 text-gray-700 p-5 mb-5 border rounded-md"
            minLength={100}
            maxLength={1000}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="my-5">
          <button type="submit" className="button w-full">
            Create A Company
          </button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default CreateApplication;
