import React from "react";
import Pic from "../assets/hero.png";
function Hero() {
  return (
    <div className="flex font-Raj h-screen w-full bg-violet-950 px-30">
      <div className=" flex flex-row m-auto items-center  pr-5">
        <div className="flex font-bold text-white text-4xl md:text-6xl">
          <h1 className="flex text-middle text-teal-200">
            Custom
            <h1 className="px-2 text-gold animate-bounce hover:animate-spin duration-300">
              API
            </h1>{" "}
            collection
          </h1>
        </div>
      </div>
      <div className=" w-2/5 h-50 my-auto ">
        <img className="max-md:hidden" src={Pic} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Hero;
