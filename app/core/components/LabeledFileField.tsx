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
      meta: { error, submitError, submitting, touched },
    } = useField(name)
    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

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

        {touched && normalizedError && (
          <div role="alert" className="mt-2">
            <p className="text-red-500 text-sm italic">{normalizedError}</p>
          </div>
        )}
      </div>
    )
  }
)
