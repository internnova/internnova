import Form from "../../core/components/Form"
import { SignupPopup } from "../validations"
import { SignUpValues } from "./SignupForm"
import signUp from "../mutations/signup"
import { FORM_ERROR } from "final-form";
import { BsUpload } from "react-icons/bs"
import { Router, useMutation } from "blitz"
import { LabeledTextField } from "../../core/components/LabeledTextField"
import React from "react"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { LabeledFileField } from "../../core/components/LabeledFileField"

interface SignUpPopupProps {
  signUpValues: SignUpValues
}

let source = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"

export const SignUpPopup = ({ signUpValues }: SignUpPopupProps) => {
  const [signUpMutation] = useMutation(signUp)

  return (
    <div className="popup h-screen w-screen grid place-items-center fixed top-0 left-0 select-none overflow-hidden">
      <div className="rounded-xl bg-slate-200">
        <h2 className="pl-8 pt-4 font-medium">Create account</h2>
        <Form
          schema={SignupPopup}
          options=""
          submitText="Done"
          initialValues={{ description: "", website: "" }}
          onSubmit={async (values) => {
            try {
              await signUpMutation({ ...signUpValues, ...values, logo: source })
              await Router.push("/")
            } catch (error: any) {
              if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                // This error comes from Prisma
                return { email: "This email is already being used" }
              } else if (error.name === "USER_IS_INTERN") {
                return {
                  email:
                    "An intern is already signed up with this email, please visit intern.internnova.co to access the intern dashboard",
                }
              } else {
                return { [FORM_ERROR]: error.toString() }
              }
            }
          }}
        >
          <div className="grid place-items-center w-full pb-4">
            <UploadImage />
          </div>
          <LabeledTextArea name="description" placeholder="Description" />
          <LabeledTextField name="website" placeholder="Website" />
        </Form>
      </div>
    </div>
  )
}

const UploadImage = () => {
  const [src, setSrc] = React.useState<string>(source)

  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e.target.files![0]
    const reader = new FileReader()
    if (file && reader) {
      reader.onloadend = () => {
        setSrc(reader.result as string)
        source = reader.result as string
      }
    }
    reader.readAsDataURL(file as Blob)
  }

  return (
    <label htmlFor="avatar" className="cursor-pointer">
      <div
        className="imageUploader relative bg-cover bg-no-repeat rounded-full h-[100px] w-[100px] grid place-items-center box-content"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: "50%" }}
      >
        <div className="changeAvatar h-full w-full rounded-full grid place-items-center absolute text-[12px] font-bold uppercase text-white leading-[12px] whitespace-pre pointer-events-none text-center">
          Change <br />
          Avatar
        </div>
        <div className="absolute rounded-full top-0 right-0 bg-white z-10 w-[28px] h-[28px] grid place-items-center">
          <BsUpload width={28} height={28} color="black" />
        </div>
        <LabeledFileField
          name="logo"
          options="hidden"
          {...{ accept: "image/*", id: "avatar" }}
          onChange={onAvatarChange}
        />
      </div>
    </label>
  )
}
