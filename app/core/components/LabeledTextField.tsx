import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps}>
        <input
          {...input}
          disabled={submitting}
          {...props}
          ref={ref}
          required={true}
          className="shadow appearance-none border rounded text-[16px] w-full py-4 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

export default LabeledTextField
