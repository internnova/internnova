import React, { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef, FormEvent } from "react"
import { useField, UseFieldConfig, Field } from "react-final-form"

export interface LabeledOptionFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  values: string[]
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const LabeledOptionField = forwardRef<HTMLInputElement, LabeledOptionFieldProps>(
  ({ name, label, outerProps, fieldProps, labelProps, values, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse:
        props.type === "number"
          ? (Number as any)
          : // Converting `""` to `null` ensures empty values will be set to null in the DB
            (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps}>
        <label {...labelProps}>
          {label}
          <Field
            {...input}
            disabled={submitting}
            {...props}
            ref={ref}
            required={true}
            component="select"
            className="rounded text-gray-700 focus:outline-none focus:shadow-outline"
          >
            {values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Field>
        </label>

        {touched && normalizedError && (
          <div role="alert" style={{ color: "red" }}>
            {normalizedError}
          </div>
        )}
      </div>
    )
  }
)

export default LabeledOptionField
