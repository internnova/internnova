export type internshipType = {
  id: number
  position: string
  contract: string
  location: string
  logo: string
  company: string
  postedAt: Date
  tools: Array<string>
  isNew?: boolean
  description: string
  numOfOpenings: string
  duration: string
}

export type FormDataType = {
  name: string
  email: string
  tel: string
  about: string
}

export type UserAuth0Type = {
  given_name: string
  family_name: string
  nickname: string
  name: string
  picture: string
  locale: string
  updated_at: Date
  email: string
  email_verified: boolean
  sub: string
}
