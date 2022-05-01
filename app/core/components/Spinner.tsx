import { SpinningOrbitLoader } from "react-loaders-kit"

interface SpinnerProps {
  small?: boolean
}
export const Spinner = ({ small }: SpinnerProps) => {
  // very simple spinner
  return (
    <section className="flex h-screen">
      <div className="my-auto mx-auto">
        <SpinningOrbitLoader size={small ? 100 : 150} loading />
      </div>
    </section>
  )
}
