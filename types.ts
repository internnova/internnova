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
  featured?: boolean
  description: string
  numOfOpenings: string
  duration: string
}
