import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"

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
    console.log(input)
    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps}>
        <textarea
          {...input}
          disabled={submitting}
          {...props}
          ref={ref}
          required={true}
          className="h-[100px] resize-none shadow appearance-none border rounded text-[16px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
