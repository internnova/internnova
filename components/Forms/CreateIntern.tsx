import { Tag } from "@prisma/client";
import { useState } from "react";
import DropDownList from "./Components/DropDownList";
import FormWrapper from "./Components/FormWrapper";
import TextBox from "./Components/TextBox";
import { useRouter } from "next/router";
import { SupabaseUser } from "../../lib/SupabaseUser";

const values = Object.values(Tag);

const CreateIntern = (props: { user: SupabaseUser }) => {
  const router = useRouter();
  const [userFullName, setUserFullName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [error, setError] = useState<string>("");
  /*eslint-disable  @typescript-eslint/no-unused-vars*/
  const [interests, setInterests] = useState<string[]>([]);

  return (
    <FormWrapper title="Sign Up">
      <form
        onSubmit={(e) => {
          try {
            e.preventDefault();

            const createUserAndIntern = {
              email: props.user.email,
              name: userFullName,
              role: "INTERN",
              bio,
              interests: interests,
            };
            fetch("/api/db/createUserAndIntern", {
              method: "POST",
              body: JSON.stringify(createUserAndIntern),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(() => {
              setError("");
              router.push("/");
            });
          } catch (e: any) {
            setError(e?.message);
          }
        }}
      >
        <div>
          <h3 className="text-red-500">
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
        <div className="mt-5">
          <TextBox
            title="Full Name"
            placeholder="Full Name"
            value={userFullName}
            setValue={setUserFullName}
            minLength={10}
            maxLength={100}
          />
        </div>
        <DropDownList
          values={values}
          title="Choose an interest"
          setChosenValues={setInterests}
        />
        <div className={`flex flex-col gap-1`}>
          <h3 className="text-muted1 text-sm font-semibold uppercase">
            A bit about yourself
          </h3>
          <textarea
            placeholder="Enter A bio"
            className="h-60 text-grey-700 p-5 mb-5 border rounded-md"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            minLength={100}
            maxLength={1000}
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

export default CreateIntern;
