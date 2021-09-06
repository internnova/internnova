import moment from "moment"
import React from "react"
import { internshipType } from "types"

type Props = { job: internshipType; handleTagClick: Function }

const JobComponent = ({ job, handleTagClick }: Props) => {
  const { position, contract, location, logo, company, postedAt, tools, isNew, featured } = job
  const tags = tools

  return (
    <div className="flex flex-col shadow-lg m-4 p-6 my-16 mx-4 rounded 'border-solid border-variant-1 border-l-8 lg:flex-row lg:my-6 hover:shadow-xl transition duration-500">
      <div>
        <img className="-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0" src={logo} alt={company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-variant-2">
          {company}
          {isNew && (
            <span className="bg-variant-2 text-variant-1 uppercase m-2 px-2 py-1 rounded-full">
              New!
            </span>
          )}
          {featured && (
            <span className="bg-gray-800 text-white text-xs uppercase m-0 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2 lg:my-0">{position}</h2>
        <p className="text-gray-500">
          {" "}
          {moment(postedAt).fromNow()} · {contract} · {location}{" "}
        </p>
      </div>
      <div className="flex flex-wrap cursor-pointer items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:mt-0 lg:pt-0">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="text-variant-2 bg-variant-1 font-bold px-3 py-1 mb-4 rounded lg:mb-0"
                key={tag}
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  )
}

export default JobComponent
