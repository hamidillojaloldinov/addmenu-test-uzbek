import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layoute() {
  return (
    <div className="w-[580px] mx-auto bg-white h-screen">
      <div></div>
      <Outlet />
      <footer className="mt-4 flex justify-center text-gray-600 pb-5">
        <Footer />
      </footer>
    </div>
  );
}

export default Layoute;
