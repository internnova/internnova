import JobComponent from "components/JobComponent"
import { useUser } from "@auth0/nextjs-auth0"
import Loading from "components/Loading"
import Navbar from "components/Navbar"
import prisma from "db"
import React, { useState } from "react"
import { internshipType } from "types"

type jobProps = {
  jobsData: string | internshipType[]
}

type jobListProps = {
  jobsData: string | internshipType[]
  filterFunc: ({ role, level, tools }) => any
  handleTagClick: (passedFilter: string) => void
}

type FilterListProps = {
  filters: Array<string>
  handleFilterClick: (tag: any) => void
  clearFilters: () => void
}

const FilterList = ({ filters, handleFilterClick, clearFilters }: FilterListProps) => {
  const { isLoading } = useUser()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {filters.length > 0 && (
        <div className={`flex flex-wrap shadow-md mb-10 mx-10 pb-6 px-6 rounded bg-variant-2 pt-6`}>
          {filters.map((filter: string) => (
            <div
              onClick={() => handleFilterClick(filter)}
              className="text-white bg-variant-2 h-10 w-auto cursor-pointer font-bold justify-center items-center flex rounded lg:mb-0 mr-2"
              key={filter}
            >
              {filter}
              <span className="mr-2 ml-2 h-10 w-10 bg-variant-2">
                <img src="/images/icon-remove.svg" className="w-4 h-4 mt-3 ml-3" alt="bg" />
              </span>
            </div>
          ))}
          <button onClick={clearFilters} className="font-bold ml-auto">
            clear
          </button>
        </div>
      )}
    </>
  )
}

const JobsList = ({ jobsData, filterFunc, handleTagClick }: jobListProps) => {
  let filteredJobs: internshipType[] =
    // @ts-ignore
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
        <div>
          <FilterList
            filters={filters}
            handleFilterClick={handleFilterClick}
            clearFilters={clearFilters}
          />
        </div>
        <JobsList jobsData={jobsData} filterFunc={filterFunc} handleTagClick={handleTagClick} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let data: any
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
