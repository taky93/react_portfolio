import React from "react";
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import Skills from "./Skills";

function Navbar() {
  return (
    <div className="flex font-Raj bg-violet-950 opacity-90 w-full h-20 fixed text-white">
      <div className="flex justify-center align-middle w-full ">
        <div className=" flex gap-5 text-lg font-bold m-6 align-middle sm:justify-center">
          <a
            href="/"
            className=" rounded mx-10 hover:animate-pulse duration-200"
          >
            Home
          </a>

          <a
            href="/skills"
            className="rounded mx-10 hover:animate-pulse duration-200"
          >
            Skills
          </a>
          <a
            href="/about"
            className="rounded mx-10 hover:animate-pulse duration-200"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
