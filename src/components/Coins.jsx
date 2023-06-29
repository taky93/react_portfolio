import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Coins() {
  const [coin,setCoin] = useState('')

  const fetchCoins = async () => {
    const coins = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=hu"
    );
    console.log(coins.data[0].id)
    setCoin(coin.data[0].id)}
  useEffect(() => {
   fetchCoins()
  }, []);

  return (
    <div className="text-center bg-violet-950 font-bold font-Raj text-white rounded p-5 m-5 border-opacity-50">
      <h1>Coins</h1>
      <p>{coin}</p>
    </div>
  );
}
