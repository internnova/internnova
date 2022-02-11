import { JsxElement } from "typescript"

interface PopupProps {
  title: string
  step: number
  total: number
  children: React.ReactElement
}

export const Popup = ({ title, children, step, total }: PopupProps) => (
  <div className="popup h-screen w-screen grid place-items-center fixed top-0 left-0 select-none overflow-hidden">
    <div className="rounded-xl bg-slate-100 shadow-[#8a8a8a] shadow-sm">
      <div className="flex justify-between items-center px-8 pt-4">
        <h2 className="font-medium">{title}</h2>
        <p>
          Step {step} of {total}
        </p>
      </div>

      {children}
    </div>
  </div>
)
