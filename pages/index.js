import Head from "next/head";
import Toolbar from "../components/Toolbar";

export default function Home() {
  return (
    <>
      <Toolbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className={"text-4xl mb-6"}>Welcome To My News App </h1>
        <p className={"font-light"}>
          {" "}
          This was made so I can better understand the fetures of next.js and
          serverside rendering{" "}
        </p>
      </div>
    </>
  );
}
