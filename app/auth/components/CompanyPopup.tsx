import Form from "app/core/components/Form"
import {Company} from "app/auth/validations"
import {LabeledTextField} from "app/core/components/LabeledTextField"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import {Popup} from "app/core/components/Popup"
import {UploadAvatar} from "app/core/components/UploadAvatar"
import {useMutation} from "blitz"
import companySignup from "app/auth/mutations/company-signup"
import {SignUpValues} from "app/auth/components/SignupForm"
import sendConfirmationEmail from "app/auth/mutations/sendConfirmationEmail"

export const CompanyPopup = ({general}: {general: SignUpValues}) => {
  const [companyMutation] = useMutation(companySignup)
  const [sendConfirmationMutation] = useMutation(sendConfirmationEmail)
  return (
    <Popup title="Create account" scroll={true}>
      <Form
        schema={Company}
        submitText="Next"
        initialValues={{description: "", website: "", username: ""}}
        onSubmit={async (values) => {
          await companyMutation({...general, ...values})
          await sendConfirmationMutation(general.role)
        }}
      >
        <div className="grid place-items-center pb-4 w-full">
          <UploadAvatar />
        </div>
        <LabeledTextField
          name="username"
          label="Username"
          placeholder="Unique username for your company"
        />
        <LabeledTextArea name="description" placeholder="A little about your company" />
        <LabeledTextField
          name="website"
          label="Website"
          placeholder="Link to your company's website"
        />
      </Form>
    </Popup>
  )
}
