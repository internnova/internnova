import { SpinningOrbitLoader } from "react-loaders-kit";
const Loading = () => {
  // very simple spinner
  return (
    <section className="flex h-screen">
      <div className="my-auto mx-auto">
        <SpinningOrbitLoader size={150} loading />
      </div>
    </section>
  );
};

export default Loading;
