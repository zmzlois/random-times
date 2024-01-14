import Header from "./components/header";
import TopNav from "./components/top-nav";

export default function ErrorPage() {
  return (
    <>
      <div className="min-w-screen min-h-screen py-5 flex  justify-center content-center">
        <div className="mx-auto container">
          <Header />
          <div className="text-center min-h-[calc(100vh-20vh)] justify-center flex items-center flex-col gap-4">
            <h3 className="text-2xl font-semibold font-karnak-700">
              Sorry the page you are looking for..doesn't exists
            </h3>
            <p className="font-franklin-500">
              Back to the <a href="/" className="underline underline-offset-4">home page</a> perhaps?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
