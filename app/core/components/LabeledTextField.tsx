import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"
import { ErrorLabel } from "app/core/components/ErrorLabel"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  label?: string
  options?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, outerProps, options, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizedError: string = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps} className="flex flex-col gap-1">
        <p className="text-neutral-600 text-[15px]"> {props?.label} </p>
        <input
          {...input}
          disabled={submitting}
          {...props}
          ref={ref}
          required={true}
          className={`w-full rounded-md p-3 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 md:text-[15px] ${options}`}
          style={{ border: "2px solid rgb(225, 225, 225)" }}
        />

        {touched && normalizedError && <ErrorLabel error={normalizedError} />}
      </div>
    )
  }
)
