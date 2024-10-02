import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Beer() {
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
      <div>
        <div className="gap-y-5">
          <div>
            <img
              src="/beer.jpg"
              className="rounded-3xl px-2 w-full h-[423px] object-cover max-w-full"
              alt=""
            />
            <div className="flex justify-between py-2">
              <p className="text-slate-800">Salad 1</p>
              <p className="text-slate-400">250g</p>
            </div>
            <div className="flex justify-between">
              <h5 className="text-2xl">
                3<span>сум</span>
              </h5>
              <div>
                <BsPlusCircleFill className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="gap-y-5">
          <div>
            <img
              src="/beer2.jpg"
              className="rounded-3xl px-2 w-full h-[423px] object-cover max-w-full"
              alt=""
            />
            <div className="flex justify-between py-2">
              <p className="text-slate-800">Salad 1</p>
              <p className="text-slate-400">250g</p>
            </div>
            <div className="flex justify-between">
              <h5 className="text-2xl">
                4<span>сум</span>
              </h5>
              <div>
                <BsPlusCircleFill className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beer;
