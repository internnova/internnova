import {UpdateCompany, UpdateIntern} from "app/auth/validations"
import updateCompany from "app/companies/mutations/updateCompany"
import {Button} from "app/core/components/Button"
import Form from "app/core/components/Form"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import {LabeledTextField} from "app/core/components/LabeledTextField"
import {Popup} from "app/core/components/Popup"
import {UploadAvatar} from "app/core/components/UploadAvatar"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import updateIntern from "app/interns/mutations/updateIntern"
import {Image, Link, useMutation} from "blitz"
import {useState} from "react"

const CommonFields = ({changePass}: {changePass: () => void}) => {
  const [uploadAvatar, setUploadAvatar] = useState<boolean>(false)

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="sm:w-1/2">
          <LabeledTextField name="name" label="Name" />
        </div>
        <div className="sm:w-1/2 flex flex-col">
          <p className="text-neutral-600 text-[15px]">Username</p>
          <div className="flex items-center overflow-hidden">
            <span className="inline-flex items-center px-2 rounded-l-md  text-sm md:text-[15px] text-gray-500">
              internnova.co/
            </span>
            <LabeledTextField name="username" options="rounded-l-none" />
          </div>
        </div>

        <div className="sm:w-1/2">
          <LabeledTextField name="email" label="Email" />
        </div>

        <div
          className="text-neutral-600 text-sm hover:text-indigo-600 cursor-pointer"
          onClick={changePass}
        >
          Change Password
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/default_profile.png"
            alt="Profile"
            height={40}
            width={40}
            className="rounded-full"
          />
          <div
            className="cursor-pointer text-[12px] bg-gray-50 rounded-sm p-1 hover:bg-white"
            onClick={() => setUploadAvatar(true)}
          >
            Change Avatar
          </div>
        </div>
      </div>
      {uploadAvatar && (
        <Popup
          title="Change Avatar"
          scroll={false}
          close={() => setUploadAvatar(false)}
          options="h-[40%] w-[80vw] sm:w-[50vw] lg:w-[35vw] xl:w-[28vw]"
        >
          <div className="grid justify-center pt-8 gap-10">
            <UploadAvatar />
            <button
              type="button"
              className="p-2 bg-indigo-500 text-white rounded"
              onClick={() => setUploadAvatar(false)}
            >
              Change
            </button>
          </div>
        </Popup>
      )}
    </>
  )
}
export const Profile = ({changePass}: {changePass: () => void}) => {
  const [internUpdateMutate, {isSuccess}] = useMutation(updateIntern)
  const user = useCurrentUser()
  const [updateCompanyMut] = useMutation(updateCompany)

  if (!user) {
    return <></>
  }

  const {id, username, name, email, intern, company} = user

  return (
    <main className="max-w-4xl py-4 h-screen">
      {user.role === "COMPANY" ? (
        <Form
          schema={UpdateCompany}
          onSubmit={(values) => updateCompanyMut({userId: id, ...values})}
          options="w-full"
          initialValues={{
            name,
            username,
            email,
            displayName: company?.displayName,
            description: company?.description,
            website: company?.website as string,
          }}
        >
          <CommonFields changePass={changePass} />
          <LabeledTextField name="website" label="Website" placeholder="Company's website" />
          <LabeledTextField
            name="displayName"
            label="Display name"
            placeholder="Company's visible name"
          />
          <LabeledTextArea name="description" placeholder="Describe your company" />
          <Button options="w-12">Save</Button>
        </Form>
      ) : (
        <Form
          schema={UpdateIntern}
          onSubmit={(values) => internUpdateMutate({userId: id, ...values})}
          initialValues={{name, username, email, bio: intern?.bio, oneliner: intern?.oneliner}}
          options="w-full"
        >
          <div className="flex flex-col gap-[4ch]">
            <CommonFields changePass={changePass} />
            <LabeledTextField
              name="oneliner"
              label="One liner"
              placeholder="Describe yourself in a line"
            />
            <LabeledTextArea name="bio" placeholder="About you" />
          </div>
          <Button options="w-12">Save</Button>
        </Form>
      )}
    </main>
  )
}

export default Profile
