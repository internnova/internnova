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

const name = z
  .string()
  .min(3, { message: "Name must be at least 3 characters" })
  .max(20, { message: "Name must be at most 20 characters" })

const description = z.string().min(100, { message: "Description must be at least 100 characters" })

const logo = z.string().url()

const website = z.string().url()

const interests = z.array(z.string())

const bio = z.string().min(20, { message: "Must be at least 20 characters" })

const oneliner = z.string().max(40, { message: "Must be at most 40 characters" })

const role = z.string()

export const CompanySignup = z.object({
  email,
  password,
  name,
  description,
  website,
  logo,
  role,
})

export const InternSignup = z.object({
  name,
  email,
  password,
  logo,
  bio,
  interests,
  oneliner,
  role,
})

export const Signup = z.object({
  email,
  password,
  name,
  role,
})

export const Company = z.object({
  description,
  website,
  logo,
})

export const Intern = z.object({
  logo,
  bio,
  oneliner,
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
