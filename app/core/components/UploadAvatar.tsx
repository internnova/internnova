import { ChangeEvent, useState } from "react"
import { BsUpload } from "react-icons/bs"
import { LabeledFileField } from "./LabeledFileField"

export const UploadAvatar = () => {
  const [src, setSrc] = useState<string>("/images/default_profile.png")

  const onAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e.target.files![0]
    const reader = new FileReader()
    reader.readAsDataURL(file as Blob)

    if (file && reader) {
      reader.onloadend = () => {
        setSrc(reader.result as string)
      }
    }
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
          {...{ accept: "image/*", id: "avatar", onChange: (e) => onAvatarChange(e) }}
        />
      </div>
    </label>
  )
}
