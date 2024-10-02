import React from "react";
import { Link } from "react-router-dom";
import bir from "/1.jpg";

function Foots() {
  return (
    <div>
      <div>
        <Link to="/salad">
          <div
            className={`bg-[url("1.jpg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >
            SALADS
          </div>
        </Link>
        <Link to="/pizza">
          <div
            className={`bg-[url("/2.jpeg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >PIZZAS (11 AM - 9 PM)</div>
        </Link>
        <Link to="/burgers">
          <div
            className={`bg-[url("/3.jpg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >BURGERS (11 AM - 9PM)</div>
        </Link>
        <Link to="/dessert">
          <div
            className={`bg-[url("/4.jpg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >DESERTS</div>
        </Link>
      </div>
    </div>
  );
}

export default Foots;
