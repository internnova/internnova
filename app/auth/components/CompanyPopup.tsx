import Form from "../../core/components/Form"
import { Company } from "../validations"
import { SignUpValues } from "./SignupForm"
import signUp from "../mutations/company-signup"
import { useMutation } from "blitz"
import { LabeledTextField } from "../../core/components/LabeledTextField"
import React, { useState } from "react"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { Popup } from "../../core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"

export const CompanyPopup = ({ onSuccess }: { onSuccess(values): void }) => {
  return (
    <Popup title="Create account" step={1} scroll={false}>
      <Form
        schema={Company}
        options=""
        submitText="Next"
        initialValues={{ description: "", website: "" }}
        onSubmit={(values) => {
          onSuccess(values)
        }}
      >
        <div className="grid place-items-center w-full pb-4">
          <UploadAvatar />
        </div>
        <LabeledTextArea name="description" placeholder="Description" />
        <LabeledTextField name="website" placeholder="Website" />
      </Form>
    </Popup>
  )
}
