import { Logo } from "components/Logo"

const Loading = () => (
  <div className="flex h-screen justify-center items-center">
    <div className="animate-bounce">
      <Logo big />
    </div>
  </div>
)

export default Loading
