import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"

interface LabeledFileFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  options?: string
}

export const LabeledFileField = React.forwardRef<HTMLInputElement, LabeledFileFieldProps>(
  ({ name, options, ...props }, ref) => {
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
          ref={ref}
          className={`shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${options}`}
        />
      </div>
    )
  }
)
