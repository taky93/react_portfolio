import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Weather() {
  useEffect(() => {
    get_weather();
  }, []);

  const [city, setCity] = useState("London");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const get_weather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=4e37b909a7d54cc7afc223220231905&q=${city}&aqi=no`
      );
      setData(response.data.current);
      setLocation(response.data.location);
      console.log(response.data);
    } catch (error) {
      alert("Development phase in progress.");
    }
  };

  const eventHandler = (e) => {
    if (e.key == "Enter") {
      get_weather();
    }
  };

  return (
    <div className="text-center bg-violet-950 font-bold font-Raj text-white rounded p-5 m-5 border-opacity-50">
      <h1 className="text-2xl">Weather API</h1>
      <input
        placeholder="Enter city name..."
        onKeyDown={eventHandler}
        className="p-1 my-2 text-black"
        onChange={(e) => setCity(e.target.value)}
        type="text"
      />
      <span><button onClick={get_weather} className="ml-1 bg-orange-500 rounded p-1 px-1">Get</button></span>

      <div className="py-3 text-lg">
        <p className="py-3">City:{location.name}</p>
        <p className="py-3">Feels like:{data.feelslike_c + "°C"}</p>
        <p className="py-3">Temperature:{data.temp_c + "°C"}</p>
        <p className="py-3">Pressure:{data.pressure_mb + "BAR"}</p>
        <p className="py-3">Wind:{data.wind_kph + "km/h"}</p>
      </div>
    </div>
  );
}
