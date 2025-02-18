import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className=" w-full flex flex-col gap-6 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">
          Welcome to the TekHud World!
        </h1>
        <h3 className="text-xl font-semibold">
          This app is currently in the development phase!
        </h3>
      </div>
    </>
  );
}
