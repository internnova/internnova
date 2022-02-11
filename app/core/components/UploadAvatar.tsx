import { useState } from "react"
import { BsUpload } from "react-icons/bs"
import { LabeledFileField } from "./LabeledFileField"

const defaultSource =
  "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"

export const UploadAvatar = ({ source }: { source: string }) => {
  const [src, setSrc] = useState<string>(defaultSource)

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
