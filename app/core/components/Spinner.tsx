import {SpinningOrbitLoader} from "react-loaders-kit"
export const Spinner = () => {
  // very simple spinner
  return (
    <section className="flex h-screen">
      <div className="my-auto mx-auto">
        <SpinningOrbitLoader size={150} loading />
      </div>
    </section>
  )
}
