import Form from "app/core/components/Form"
import {LabeledTextField} from "app/core/components/LabeledTextField"
import {Button} from "app/core/components/Button"
import {ChangePassword} from "app/auth/validations"
import changePassword from "app/auth/mutations/changePassword"
import {useMutation} from "blitz"

export const Security = ({onSuccess}: {onSuccess: () => void}) => {
  const [changePass, {isSuccess}] = useMutation(changePassword)

  return (
    <div>
      <Form
        schema={ChangePassword}
        onSubmit={async (values) => {
          await changePass(values)
          if (isSuccess) onSuccess()
        }}
      >
        <LabeledTextField
          name="currentPassword"
          label="Password"
          placeholder="Current Password"
          type="password"
        />
        <LabeledTextField
          name="newPassword"
          label="New Password"
          placeholder="New Password"
          type="password"
        />
        <Button options="w-16 p-1">Submit</Button>
      </Form>
    </div>
  )
}
