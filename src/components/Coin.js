import React from "react";
import ArrowUp from "../../public/assets/arrow-drop-up-fill.svg";
import ArrowDown from "../../public/assets/arrow-drop-down-fill.svg";

const Coin = ({ coin }) => {
  let coinChange = parseFloat(coin?.changePercent24Hr).toFixed(2);

  const myStyle = {
    Wrapper: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.5rem 1.5rem",
      backgroundColor: "#1f2937",
      maxWidth: "500px",
      margin: "0 auto 1.5rem",
      borderRadius: "5px",
      border: ".5px solid #374151",
    },
    CoinName: {
      color: "#0ea5e9",
      textTransform: "capitalize",
    },
    CoinSymbol: {
      display: "block",
      color: "#d1d5db",
      fontSize: ".875rem",
    },
    CoinChange: {
      color: coinChange > 0 ? "#22c55e" : "#f43f5e",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      textAlign: "right",
    },
    CoinArrow: {},
  };

  console.log(coinChange);
  return (
    <section style={myStyle.Wrapper}>
      <div>
        <h3 style={myStyle.CoinName}>{coin.id}</h3>
        <p style={myStyle.CoinSymbol}>{coin.symbol}</p>
      </div>
      <div>
        <h3 style={myStyle.CoinPrice}>
          ${parseFloat(coin?.priceUsd).toFixed(2)}
        </h3>
        <p style={myStyle.CoinChange}>
          {parseFloat(coin?.changePercent24Hr).toFixed(2)}
          <span>
            <img
              src={coinChange > 0 ? ArrowUp : ArrowDown}
              alt="price-change"
              className={myStyle.CoinArrow}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Coin;
