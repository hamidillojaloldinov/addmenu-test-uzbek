import React, { useState } from "react";
import "../index.css";
import Foots from "../components/Foods";
import Drinks from "../components/Drinks";
import Test from "../components/test";
import Footer from "../components/Footer";

function Home() {
  const [layout, setLayout] = useState("foods");
  const setActiveStyle = (patter) => {
    return `text-xl btn-circle btn btn-sm ${
      patter === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <div className=" flex flex-col items-center justify-center  pr-4">
      {/* <header className="p-4 rounded-lg"></header> */}
      <main className="mt-4 w-full max-w-lg">
        <div className="flex justify-between gap-x-2">
          <button
            onClick={() => setLayout("foods")}
            className={
              layout == "foods"
                ? "text-white bg-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
                : "text-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
            }
          >
            foods
          </button>

          <button
            onClick={() => setLayout("drinks")}
            className={`${
              layout == "drinks"
                ? "text-white bg-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
                : "text-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
            }`}
          >
            drinks
          </button>
          <button
            onClick={() => setLayout("test")}
            className={
              layout == "test"
                ? "text-white bg-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
                : "text-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
            }
          >
            test
          </button>
        </div>
        <div>
          <div className="relative my-5">
            <input
              placeholder="Search..."
              className="input shadow-lg border-gray-300 px-5 py-3 rounded-xl w-full transition-all outline-none"
              name="search"
              type="search"
            />
            <svg
              className="size-6 absolute top-3 right-3 text-gray-500"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
          </div>
        </div>
        <div>
          {layout == "foods" ? (
            <Foots />
          ) : layout == "drinks" ? (
            <Drinks />
          ) : (
            <Test />
          )}
        </div>
        {/* <Foots /> */}
      </main>
    </div>
  );
}

export default Home;
