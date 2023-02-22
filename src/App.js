import React, { useEffect, useState } from "react";
import Coin from "./components/Coin";

const App = ({ coinName }) => {
  const [coin, setCoin] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function getCoinDetails(coin) {
    if (!coin) return;
    fetch(`https://api.coincap.io/v2/assets/${coin}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data.data);
        setIsLoading(false);
      });
  }

  console.log(coin);

  useEffect(() => {
    getCoinDetails(coinName);
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {coin && <Coin coin={coin} />}
    </>
  );
};

export default App;
