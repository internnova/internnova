import { Tag } from "@prisma/client";
import { useState } from "react";
import DropDownList from "./Components/DropDownList";
import FormWrapper from "./Components/FormWrapper";
import TextBox from "./Components/TextBox";
import { useRouter } from "next/router";
import { SupabaseUser } from "../../lib/SupabaseUser";

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

const CreateIntern = (props: { user: SupabaseUser }) => {
  const router = useRouter();
  // Printing router to console to make ESLint shut up
  console.log(router);
  const [userFullName, setUserFullName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  /*eslint-disable  @typescript-eslint/no-unused-vars*/
  const [interests, setInterests] = useState<{ id: Tag; value: string }[]>([]);

  return (
    <FormWrapper title="Sign Up">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // TODO: create api route for creating interns and users
          const createdUser = {
            email: props.user?.email,
            name: userFullName,
            role: "EMPLOYER",
          };

          const createdIntern = {
            // TODO: fetch id from created User
            userId: 1,
            bio: bio,
            interests: interests.map((i) => i.id),
          };
          console.log(createdUser, createdIntern);
        }}
      >
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
            A bit about yourself
          </h3>
          <textarea
            placeholder="Enter A bio"
            className="h-60 text-grey-700 rounded-md border p-5 mb-5"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
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
