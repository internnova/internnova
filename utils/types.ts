/**
 * Model User
 */

export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  role: Role;
  name: string | null;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model JobApplication
 */

export type JobApplication = {
  id: number;
  description: string;
  internId: number;
  jobId: number;
};

/**
 * Model Job
 */

export type Job = {
  id: number;
  position: string;
  description: string;
  industry: string;
  jobType: JobType;
  skillsRequired: string[];
  numOfOpenings: number;
  expirationData: Date | null;
  duration: string;
  postedAt: Date;
  companyId: number;
};

/**
 * Model Company
 */

export type Company = {
  id: number;
  name: string;
  description: string;
  logo: string | null;
  website: string | null;
  industry: string;
  foundedYear: number;
};

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role = {
  ADMINISTRATOR: "ADMINISTRATOR",
  EMPLOYER: "EMPLOYER",
  INTERN: "INTERN",
  STANDARD: "STANDARD",
};

export type Role = typeof Role[keyof typeof Role];

export const JobType = {
  PART_TIME: "PART_TIME",
  FULL_TIME: "FULL_TIME",
};

export type JobType = typeof JobType[keyof typeof JobType];
