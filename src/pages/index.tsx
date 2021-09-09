import Navbar from "src/components/Navbar"
import { BsSearch } from "react-icons/bs"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <div className="py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto h-screen w-screen relative overflow-hidden">
        <Navbar />
        <Main />
        <img
          src="/images/vector.png"
          className="hidden lg:block lg:h-[25rem] lg:w-[28-rem] xl:h-[30rem] xl:w-[35rem] absolute -bottom-3 right-0 select-none"
          draggable={false}
          alt=""
        />
      </div>
    </>
  )
}

const Main = () => {
  return (
    <div className="mt-[5rem] w-full lg:w-[40rem]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold sm:leading-[3.2rem]">
        Land the best possible <span className="text-variant-2 main">high-school</span> ready
        internships
      </h1>
      <p className="opacity-[0.76] mt-5 text-lg sm:text-xl lg:text-2xl">
        InternNova helps high school students build their profile, enhance their skills, and
        increase their chances of getting admitted into top colleges. Find internships today!
      </p>
      <Link href="/jobs" passHref={true}>
        <button className="bg-variant-1 hover:bg-gray-400 text-gray-800 font-bold py-4 mt-5 px-6 rounded inline-flex items-center">
          <BsSearch className="h-6 w-6 mr-2" />
          <span className="text-xl">Search For internships</span>
        </button>
      </Link>
    </div>
  )
}

export default Home
