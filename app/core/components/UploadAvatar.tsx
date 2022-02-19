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
        className="box-content grid relative place-items-center bg-no-repeat bg-cover rounded-full imageUploader h-[100px] w-[100px]"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: "50%" }}
      >
        <div className="grid absolute place-items-center w-full h-full font-bold text-center text-white uppercase whitespace-pre rounded-full pointer-events-none changeAvatar text-[12px] leading-[12px]">
          Change <br />
          Avatar
        </div>
        <div className="grid absolute top-0 right-0 z-10 place-items-center bg-white rounded-full w-[28px] h-[28px]">
          <BsUpload width={28} height={28} color="black" />
        </div>
        <LabeledFileField
          name="logo"
          options="hidden"
          onAvatarChange={onAvatarChange}
          {...{ accept: "image/*", id: "avatar" }}
        />
      </div>
    </label>
  )
}
