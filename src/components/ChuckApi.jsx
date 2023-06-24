import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";

export default function ChuckApi() {
  //Noob initial api call
  useEffect(() => {
    getJoke();
  }, []);

  const [joke, setjoke] = useState("");
  const getJoke = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setjoke(res.data.value);
    });
  };
  return (
    <div className="text-center bg-violet-950 font-bold text-white rounded shadow p-5 m-5">
      <h1 className="text-4xl">Chuck Norris API</h1>
      <div>
        <button
          className="bg-orange-500 opacity-90 p-5 rounded-md border-opacity-60"
          onClick={getJoke}
        >
          Chuck Norris JOKE
        </button>
        <h1 className="text-2xl overflow-auto pt-10">{joke}</h1>
      </div>
    </div>
  );
}
