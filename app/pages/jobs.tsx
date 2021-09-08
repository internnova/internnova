import JobComponent from "app/core/components/JobComponent"
import Navbar from "app/core/components/Navbar"
import { Routes } from "blitz"
import prisma from "db"
import React, { useState } from "react"
import { internshipType } from "types"

type jobProps = {
  jobsData: string | internshipType[]
}
type jobListProps = {
  jobsData: string | internshipType[]
  filterFunc: any
  handleTagClick: any
}
const JobsList = ({ jobsData, filterFunc, handleTagClick }: jobListProps) => {
  let filteredJobs: internshipType[] =
    jobsData && typeof jobsData !== "string" ? jobsData.filter(filterFunc) : []
  if (typeof jobsData !== "string") {
    if (jobsData.length === 0) {
      return <h1 className="text-center text-variant-2 text-6xl font-bold mb-8">{jobsData}</h1>
    } else {
      return (
        <>
          {filteredJobs.map((job: internshipType) => (
            <JobComponent job={job} key={job.id} handleTagClick={handleTagClick} />
          ))}
        </>
      )
    }
  }
  return <h1 className="text-center text-variant-2 text-6xl font-bold mb-8">{jobsData}</h1>
}

const JobsPage = ({ jobsData }: jobProps) => {
  const [filters, setFilters] = useState<string[]>([])

  const filterFunc = ({ role, level, tools }) => {
    if (filters.length === 0) {
      return true
    }

    const tags = [role, level]

    if (tools) {
      tags.push(...tools)
    }

    return filters.every((filter) => tags.includes(filter))
  }

  const handleTagClick = (tag: string) => {
    if (filters.includes(tag)) return
    setFilters([...filters, tag])
  }

  const handleFilterClick = (passedFilter: string) => {
    setFilters(filters.filter((f) => f !== passedFilter))
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto w-screen relative">
      <header className="mb-8 mt-5">
        <Navbar />
      </header>
      <h1 className="text-center text-variant-2 text-6xl font-bold mb-8">Jobs</h1>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className={`flex flex-wrap shadow-md mb-10 mx-10 pb-6 px-6 rounded bg-variant-2 pt-6`}
          >
            {filters.map((filter) => (
              <div
                onClick={() => handleFilterClick(filter)}
                className="text-variant-2 bg-variant-1 h-10 w-auto cursor-pointer font-bold justify-center items-center flex rounded lg:mb-0"
                key={filter}
              >
                {filter}
                <span className="-mr-4 ml-8 h-10 w-10 bg-variant-2">
                  <img src="/images/icon-remove.svg" className="w-4 h-4 mt-3 ml-3" alt="bg" />
                </span>
              </div>
            ))}
            <button onClick={clearFilters} className="font-bold ml-auto">
              clear
            </button>
          </div>
        )}
        <JobsList jobsData={jobsData} filterFunc={filterFunc} handleTagClick={handleTagClick} />
      </div>
    </div>
  )
}

JobsPage.authenticate = { redirectTo: Routes.LoginPage() }

export async function getStaticProps() {
  let data: any = await prisma.internship.findMany()
  try {
    data = await prisma.internship.findMany()
  } catch {
    data = ""
  }
  if (!data) {
    return {
      props: {
        jobsData: "Sorry no jobs are currently available",
      },
    }
  }

  return {
    props: { jobsData: data }, // will be passed to the page component as props
  }
}

export default JobsPage
