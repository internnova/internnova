import React, { useState } from 'react'
import Navbar from 'app/core/components/Navbar'
import JobComponent from 'app/core/components/JobComponent'
import jobType from 'app/lib/types/jobType'

async function getvals() {
  try {
    const response = await fetch('http://localhost:3000/api/get-internships', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const responseData = await response.json()
    return responseData
  } catch (error) {
    return console.warn(error)
  }
}

function App() {
  const [jobs, setJobs] = useState<jobType[]>([])
  const [filters, setFilters] = useState<string[]>([])

  getvals().then((response) => {
    setJobs(response as jobType[])
  })

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

  // @ts-ignore
  let filteredJobs: jobType[] = jobs ? jobs.filter(filterFunc) : []

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto h-screen w-screen relative overflow-hidden">
      <header className="bg-teal-500 mb-8 mt-5">
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
                className="text-teal-500 bg-teal-100 h-10 w-auto cursor-pointer font-bold mr-4 mb-4 p-2 justify-center items-center flex rounded lg:mb-0"
                key={filter}
              >
                {filter}
                <span className="-mr-4 ml-8 h-10 w-10 bg-teal-500 ">
                  <img src="/images/icon-remove.svg" className="w-4 h-4 mt-3 ml-3" alt="bg" />
                </span>
              </div>
            ))}
            <button onClick={clearFilters} className="font-bold ml-auto">
              clear
            </button>
          </div>
        )}

        {jobs.length === 0 ? (
          <p> ... Loading</p>
        ) : (
          filteredJobs.map((job) => (
            <JobComponent job={job} key={job.id} handleTagClick={handleTagClick} />
          ))
        )}
      </div>
    </div>
  )
}

export default App
