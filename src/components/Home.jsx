import Hero from "./Hero";
import Skills from "./Skills";
import ChuckApi from "./ChuckApi";
import Weather from "./Weather";
import Coins from "./Coins";
import React from "react";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <div className="mt-20 md:grid grid-cols-3 flex flex-col">
        <ChuckApi />
        <Weather />
        <Coins/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
