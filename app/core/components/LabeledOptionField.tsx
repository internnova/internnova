import { ErrorLabel } from "app/core/components/ErrorLabel"
import React, { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef, ChangeEvent } from "react"
import { useField, UseFieldConfig, Field } from "react-final-form"

export interface LabeledOptionFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  values: string[]
  fields?: string[]
  onSelection?: (e: ChangeEvent<HTMLInputElement>, value: Array<string>) => Array<string>
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

const toTitleCase = (string) => {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export const LabeledOptionField = forwardRef<HTMLInputElement, LabeledOptionFieldProps>(
  (
    { name, label, fields, outerProps, fieldProps, onSelection, labelProps, values, ...props },
    ref
  ) => {
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
            className="text-gray-700 rounded-sm sm:text-sm focus:outline-none focus:shadow-outline"
          >
            {fields
              ? fields.map((value: string, idx) => (
                  <option key={value} value={values[idx]}>
                    {toTitleCase(value)}
                  </option>
                ))
              : values.map((value) => (
                  <option key={value} value={value}>
                    {toTitleCase(value)}
                  </option>
                ))}
          </Field>
        </label>

        {touched && normalizedError && <ErrorLabel error={normalizedError} />}
      </div>
    )
  }
)

export default LabeledOptionField
