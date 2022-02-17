import { ReactElement } from "react"

interface PopupProps {
  title: string
  step: number
  scroll: boolean
  children: ReactElement
}

export const Popup = ({ title, children, step, scroll }: PopupProps) => (
  <div className="popup h-screen w-screen grid place-items-center fixed top-0 left-0 select-none overflow-hidden">
    <div
      className={`rounded-xl bg-slate-100 shadow-[#8a8a8a] shadow-sm h-[85%] ${
        scroll ? " overflow-y-scroll overflow-x-hidden" : "overflow-hidden"
      }`}
    >
      <div className="flex justify-between items-center px-8 pt-4">
        <h2 className="font-medium">{title}</h2>
        <p>Step {step} of 3</p>
      </div>

      {children}
    </div>
  </div>
)
