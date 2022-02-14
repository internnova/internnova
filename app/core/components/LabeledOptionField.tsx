import React, {
  forwardRef,
  ComponentPropsWithoutRef,
  PropsWithoutRef,
  FormEvent,
  ChangeEvent,
} from "react"
import { useField, UseFieldConfig, Field } from "react-final-form"

export interface LabeledOptionFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  values: string[]
  onSelection?: (e: ChangeEvent<HTMLInputElement>, value: Array<string>) => Array<string>
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const LabeledOptionField = forwardRef<HTMLInputElement, LabeledOptionFieldProps>(
  ({ name, label, outerProps, fieldProps, onSelection, labelProps, values, ...props }, ref) => {
    const {
      input: { onChange, value, ...input },
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (onSelection) {
                const val = onSelection(e, value)
                onChange(val)
              } else {
                return onChange(e.target.value)
              }
            }}
            required={true}
            component="select"
            className="rounded text-gray-700 focus:outline-none focus:shadow-outline"
          >
            {values.map((value: string) => (
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
