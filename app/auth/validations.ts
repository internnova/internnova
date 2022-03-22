import { optional, z } from "zod"
import { JobType, Tag } from "db"

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const name = z
  .string()
  .min(3, { message: "Name must be at least 3 characters" })
  .max(20, { message: "Name must be at most 20 characters" })

const description = z.string().min(100, { message: "Description must be at least 100 characters" })

const logo = z.string().url()

export const website = z.string().url()

const interests = z.array(z.string())

const bio = z.string().min(20, { message: "Must be at least 20 characters" })

export const oneliner = z.string().max(40, { message: "Must be at most 40 characters" })

const role = z.string()

export const username = z.string().regex(/^[a-zA-Z0-9_]{3,20}$/, {
  message: "Username can only contain letters, numbers, and underscores",
})

export const Signup = z.object({ email, password, name, role })

export const Company = z.object({ description, website, logo, username })

export const Intern = z.object({ logo, bio, oneliner, username })

export const CompanySignup = Signup.merge(Company)

export const InternSignup = Signup.merge(Intern).extend({ interests })

export const Login = z.object({ email, password })

export const ForgotPassword = z.object({ email })

export const SendConfirmationEmail = z.object({ email })

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

export const UpdateIntern = z.object({
  name,
  username,
  oneliner,
  bio,
  email,
})

export const UpdateCompany = z.object({
  name,
  username,
  description,
  email,
  website,
})

export const jobType = z.nativeEnum(JobType)
const industryType = z.nativeEnum(Tag)

export const CreateJobServer = z.object({
  position: z.string().min(10).max(50),
  description: z.string().min(100).max(1000),
  jobType: jobType,
  location: z.optional(z.string()),
  salary: z.optional(z.string()),
  skillsRequired: z.string().array(),
  industry: industryType,
  duration: z.string(),
  companyName: username,
})

export const CreateJobClient = z.object({
  position: z.string().min(10).max(50),
  description: z.string().min(100, { message: "Should have at least 100 characters" }).max(1000),
  jobType: jobType,
  location: z.optional(z.string()),
  salary: z.optional(z.string()),
  skillsRequired: z.string(),
  industry: industryType,
  duration: z.string(),
})
