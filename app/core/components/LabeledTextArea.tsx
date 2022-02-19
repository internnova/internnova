import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"
import { ErrorLabel } from "./ErrorLabel"

export interface LabeledTextAreaProps extends PropsWithoutRef<JSX.IntrinsicElements["textarea"]> {
  /** Field name. */
  name: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<HTMLTextAreaElement, LabeledTextAreaProps>(
  ({ name, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizedError: string = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps}>
        <textarea
          {...input}
          disabled={submitting}
          {...props}
          ref={ref}
          required={true}
          className="py-2 px-3 w-full leading-tight text-gray-700 rounded border shadow appearance-none resize-none focus:outline-none h-[100px] text-[16px] focus:shadow-outline"
        />

        {touched && normalizedError && <ErrorLabel error={normalizedError} />}
      </div>
    )
  }
)

export default LabeledTextField
