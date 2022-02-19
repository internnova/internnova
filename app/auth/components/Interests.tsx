import { useState } from "react"
import { Popup } from "../../core/components/Popup"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { Button } from "../../core/components/Button"
import { SignUpValues } from "./SignupForm"
import { ErrorLabel } from "../../core/components/ErrorLabel"

interface InterestsProps {
  onSuccess(interests: string[]): void
  interest: string[]
  goBack(): void
}

export const Interests = ({ onSuccess, interest, goBack }: InterestsProps) => {
  const [interests, setInterests] = useState<string[]>(interest ?? [])
  const fields = [
    "Web development",
    "AI/ML",
    "Systems",
    "Game development",
    "Startups",
    "Robotics/IoT",
    "Trading",
  ]

  const isSelected = (value) => interests.find((v) => v === value)

  const handleInterestSelect = (value: string) => {
    if (value === "") {
      return
    } else if (isSelected(value)) {
      setInterests(interests.filter((v) => v !== value))
    } else {
      setInterests([...interests, value])
    }
  }

  return (
    <Popup title="Your interests" step={2} scroll={true}>
      <div className="flex flex-col gap-5 px-8 py-10 mb-4">
        <span className="text-neutral-800">
          Which field do you specialize in? Which field interests you?
        </span>
        <div className="flex pt-4 flex-col gap-5 w-[80vw] sm:w-[50vw] lg:w-[35vw] xl:w-[28vw] cursor-pointer">
          {fields.map((field) => {
            const selected = isSelected(field)
            return (
              <div
                className="flex items-center justify-between w-full rounded-lg p-5 bg-white"
                style={{ border: `1px solid ${selected ? "#5c6cff" : "#e6e6e6"}` }}
                key={field}
                onClick={() => handleInterestSelect(field)}
              >
                <span>{field}</span>
                {selected && <BsFillCheckCircleFill color="#5c6cff" />}
              </div>
            )
          })}
        </div>
        {interests.length === 0 && <ErrorLabel error="Select at least one interest to continue" />}
        <div className="flex w-full items-center gap-4">
          <Button
            options="w-1/2"
            onClick={() => onSuccess(interests)}
            {...{ disabled: interests.length === 0 }}
          >
            Next
          </Button>
          <Button options="w-1/2" onClick={goBack}>
            Back
          </Button>
        </div>
      </div>
    </Popup>
  )
}
