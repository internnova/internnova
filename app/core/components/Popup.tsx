import { ReactElement } from "react"
import { BsXLg } from "react-icons/bs"

interface PopupProps {
  title: string
  step?: number
  scroll: boolean
  children: ReactElement
  close?: () => void
}

export const Popup = ({ title, children, step, scroll, close, ...props }: PopupProps) => (
  <div className="grid fixed top-0 left-0 place-items-center w-screen h-screen select-none popup">
    <div
      {...props}
      className={`relative rounded-xl bg-slate-100 shadow-[#8a8a8a] shadow-sm h-[85%] ${
        scroll ? " overflow-y-scroll overflow-x-hidden" : "overflow-hidden"
      }`}
    >
      <div className="flex justify-between items-center px-8 pt-4">
        <h2 className="font-medium">{title}</h2>
        {step && <p>Step {step} of 2</p>}
      </div>

      {children}

      {close && (
        <div className="absolute right-5 top-5 cursor-pointer" onClick={close}>
          <BsXLg />
        </div>
      )}
    </div>
  </div>
)
