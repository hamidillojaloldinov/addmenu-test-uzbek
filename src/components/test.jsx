import React from "react";
import { Link } from "react-router-dom";

function Test() {

  return (
    <div>
      <Link to="/tests">
        <div className='bg-[url("/tests.jpeg")] bg-cover bg-center content-center rounded-2xl w-[528px] h-[176px] text-slate-300 font-bold text-5xl text-center my-auto'>
          test
        </div>
      </Link>
    </div>
  );
}

export default Test;
