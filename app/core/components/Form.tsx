import { validateZodSchema } from "blitz"
import { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { z } from "zod"

export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  /** An optional field for additional properties of the popup */
  options?: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  title = "",
  options = "",
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <div className={`px-8 py-10 mb-4 ${options}`}>
          {title && <h1 className="font-semibold">{title}</h1>}
          <form
            autoComplete="off"
            className="flex pt-4 flex-col gap-5 w-[80vw] sm:w-[50vw] lg:w-[28vw]"
            onSubmit={handleSubmit}
            {...props}
          >
            {/* Form fields supplied as children are rendered here */}
            {children}

            {submitError && (
              <div role="alert">
                <p className="text-red-500 text-sm italic">{submitError}</p>
              </div>
            )}

            {submitText && (
              <button
                type="submit"
                disabled={submitting}
                className="py-2 text-[16px] rounded-md bg-[#5c6cff] text-white"
              >
                {submitText}
              </button>
            )}

            <style global jsx>{`
              .form > * + * {
                margin-top: 1rem;
              }
            `}</style>
          </form>
        </div>
      )}
    />
  )
}

export default Form
