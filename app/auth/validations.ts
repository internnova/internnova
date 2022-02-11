import { z } from "zod"

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const Signup = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(100),
  name: z.string(),
  role: z.string(),
  description: z.string().min(100, { message: "Must be at least 100 characters" }),
  logo: z.string().url(),
  website: z.string().url(),
})

export const SignupFront = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(100),
  name: z.string(),
  role: z.string(),
})

export const SignupPopup = z.object({
  description: z.string().min(100, { message: "Must be at least 100 characters" }),
  website: z.string().url(),
})

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const SendConfirmationEmail = z.object({
  email,
})

export const ConfirmEmail = z.object({
  token: z.string(),
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})
