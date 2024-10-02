import React from "react";
import { Link } from "react-router-dom";

function Food() {
  return (
    <div>
      <div>
        <div className="flex justify-between gap-x-2">
          <Link
            to="/"
            className="text-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
          >
            foods
          </Link>

          <Link
            to="/"
            className="text-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
          >
            drinks
          </Link>
          <Link
            to="/"
            className="text-yellow-800 font-bold py-1 px-4 text-md border-yellow-800 border-[3px] rounded-3xl"
          >
            test
          </Link>
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
      </div>
    </div>
  );
}

export default Food;
