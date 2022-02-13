import React, { ChangeEvent, PropsWithoutRef } from "react"
import { useField } from "react-final-form"

interface LabeledFileFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  options?: string
  onAvatarChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LabeledFileField = React.forwardRef<HTMLInputElement, LabeledFileFieldProps>(
  ({ name, options, onAvatarChange, ...props }, ref) => {
    const {
      input,
      meta: { submitting },
    } = useField(name)

    return (
      <div>
        <input
          {...input}
          disabled={submitting}
          {...props}
          type="file"
          onChange={(e) => {
            input.onChange(e)
            if (onAvatarChange) onAvatarChange(e)
          }}
          ref={ref}
          className={`shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${options}`}
        />
      </div>
    )
  }
)
