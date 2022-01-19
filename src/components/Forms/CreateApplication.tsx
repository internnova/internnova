import { useRouter } from "next/router";
import { useState } from "react";
import { Job } from "@prisma/client";
import FormWrapper from "components/Forms/Components/FormWrapper";
import { Company } from "@prisma/client";
import Loading from "components/Loading";

type CreateCompanyProps = {
  email: string;
  job: Job & { company: Company };
};

const CreateApplication = (props: CreateCompanyProps) => {
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [textLength, setTextLength] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  if (loading) return <Loading />;

  return (
    <FormWrapper
      title={`Apply to ${props.job.company.name} - ${props.job.position}`}
      textSm
    >
      <form
        onSubmit={(e) => {
          if (description.split(" ").filter((x) => x !== " ").length < 100) {
            e.preventDefault();
            setError("Fill in at least 100 characters");
            return;
          }
          try {
            e.preventDefault();
            setLoading(true);

            const createdUserAndCompany = {
              description,
              email: props.email,
              jobId: props.job.id,
            };

            fetch("/api/db/createApplication", {
              method: "POST",
              body: JSON.stringify(createdUserAndCompany),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.status === 200) {
                setError("");
                router.push("/jobs?success=true");
              } else {
                res.json().then((data) => {
                  setError(
                    `Something went wrong, please try again, the error is: ${data.error}`
                  );
                  setLoading(false);
                });
              }
            });
            /*eslint-disable*/
          } catch (e: any) {
            setLoading(false);
            setError(e?.message);
          }
        }}
        className="mt-8"
      >
        <div className={`flex flex-col gap-1`}>
          <h3 className="text-sm font-semibold uppercase">Description</h3>
          <h3 className="text-sm my-1 mb-4">
            Why should you be hired by this company? What makes you unique? Do
            you have the skills and experience to do this job?
            <br />
            Use 100-1000 words
          </h3>
          <span className="uppercase text-xs">Text Length: {textLength}</span>
          <div>
            <h3 className="text-red-500">{error}</h3>
          </div>
          <textarea
            placeholder="Enter A Description"
            className="h-60 text-gray-700 p-5 mb-5 border rounded-md"
            required
            minLength={100}
            maxLength={10000}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setTextLength(
                description.split(" ").filter((x) => x !== " ").length
              );
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
