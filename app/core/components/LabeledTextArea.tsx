import React, {PropsWithoutRef} from "react"
import {useField} from "react-final-form"
import {ErrorLabel} from "app/core/components/ErrorLabel"

export interface LabeledTextAreaProps extends PropsWithoutRef<JSX.IntrinsicElements["textarea"]> {
  /** Field name. */
  name: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = React.forwardRef<HTMLTextAreaElement, LabeledTextAreaProps>(
  ({name, outerProps, ...props}, ref) => {
    const {
      input,
      meta: {touched, error, submitError, submitting},
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
          className="w-full min-h-[80px] max-h-[180px] rounded-sm py-2 px-3 shadow-sm focus:border-indigo-600 focus:outline-none resize-y focus:ring-1 focus:ring-indigo-600 sm:text-[15px]"
          style={{border: "2px solid rgb(225, 225, 225)"}}
        />
        {touched && normalizedError && <ErrorLabel error={normalizedError} />}
      </div>
    )
  }
)

export default LabeledTextField
