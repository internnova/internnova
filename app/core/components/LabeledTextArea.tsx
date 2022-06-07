import { ErrorLabel } from "app/core/components/ErrorLabel"
import React, { PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextAreaProps extends PropsWithoutRef<JSX.IntrinsicElements["textarea"]> {
  /** Field name. */
  name: string
  label?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<HTMLTextAreaElement, LabeledTextAreaProps>(
  ({ name, outerProps, label, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizedError: string = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps}>
        <p className="pb-1 text-neutral-600">{label}</p>
        <textarea
          {...input}
          disabled={submitting}
          {...props}
          rows={props.rows || 12}
          cols={100}
          ref={ref}
          required={true}
          className="max-w-[90vw] md:max-w-[80vw] rounded-sm py-2 px-3 shadow-sm focus:border-indigo-600 focus:outline-none resize-y focus:ring-1 focus:ring-indigo-600 sm:text-[15px] max-h-[400px]"
          style={{ border: "2px solid rgb(225, 225, 225)" }}
        />
        {touched && normalizedError && <ErrorLabel error={normalizedError} />}
      </div>
    )
  }
)

export default LabeledTextField
