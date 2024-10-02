import React from "react";
import { Link } from "react-router-dom";

function Drinks() {
  const foots = [
    {
      title: "Beer",
      img: "/beer.jpg",
      url: "/beer",
    },
    { title: "Coffee", img: "/coffee.jpg", url: "/coffee" },
    { title: "Tea", img: "/tea.jpg", url: "/tea" },
  ];
  return (
    <div>
      <div>
        <Link to="/beer">
          <div
            className={`bg-[url("/beer.jpg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >
            Beer
          </div>
        </Link>
        <Link to="/coffee">
          <div
            className={`bg-[url("/coffee.jpg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >
            Coffee
          </div>
        </Link>
        <Link to="/tea">
          <div
            className={`bg-[url("/tea.jpg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px]  text-white font-bold text-3xl text-center my-4`}
          >
            Tea
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Drinks;
