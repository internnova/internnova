import Form from "../../core/components/Form"
import {SignupPopup} from "../validations"
import {SignUpValues} from "./SignupForm"
import signUp from "../mutations/signup"
import {FORM_ERROR} from "final-form"
import {Image, Router, useMutation} from "blitz"
import {LabeledTextField} from "../../core/components/LabeledTextField"
import React from "react"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import {LabeledFileField} from "../../core/components/LabeledFileField"

interface SignUpPopupProps {
  signUpValues: SignUpValues
}

export const SignUpPopup = ({signUpValues}: SignUpPopupProps) => {
  const [signUpMutation] = useMutation(signUp)

  return (
    <div className="popup h-screen w-screen grid place-items-center fixed top-0 left-0 select-none overflow-hidden">
      <div className="rounded-xl bg-slate-200">
        <Form
          schema={SignupPopup}
          options=""
          submitText="Done"
          initialValues={{description: "", website: ""}}
          onSubmit={async (values) => {
            try {
              console.log({...signUpValues, ...values})
            } catch (error: any) {
              if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                // This error comes from Prisma
                return {email: "This email is already being used"}
              } else if (error.name === "USER_IS_INTERN") {
                return {
                  email:
                    "An intern is already signed up with this email, please visit intern.internnova.co to access the intern dashboard",
                }
              } else {
                return {[FORM_ERROR]: error.toString()}
              }
            }
          }}
        >
          <div className="grid place-items-center w-full">
            <UploadImage src="/favicons/favicon-32.png" />
          </div>
          <LabeledTextArea name="description" placeholder="Description" />
          <LabeledTextField name="website" placeholder="Website" />
        </Form>
      </div>
    </div>
  )
}

const UploadImage = ({src}) => (
  <label
    htmlFor="photo-upload"
    className="rounded-full w-[64px] h-[64px] border border-neutral-100"
  >
    <div>
      <Image src={src} alt="profile" width={64} height={64} />
    </div>
    <LabeledFileField name="logo" options="hidden" {...{accept: "image/*", id: "photo-upload"}} />
  </label>
)
