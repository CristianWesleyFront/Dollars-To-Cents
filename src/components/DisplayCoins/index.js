import React from "react";

import "./styles.css";

function DisplayCoins({ coins = 0 }) {
  const coinsToCents = (coin) => {
    let balance = coin;
    const result = {};

    result.halfDollar = Math.floor(balance / 50);
    balance = Math.round(balance % 50);
    result.quarterDollar = Math.floor(balance / 25);
    balance = Math.round(balance % 25);
    result.oneDime = Math.floor(balance / 10);
    balance = Math.round(balance % 10);
    result.nickel = Math.floor(balance / 5);
    balance = Math.round(balance % 5);
    result.penny = Math.floor(balance / 1);
    console.log(balance);
    return result;
  };

  const cents = coinsToCents(coins);

  return (
    <div className="cents-wrapper">
      <div className="cents-item">
        {cents.halfDollar}
        <span>Half Dollar</span>
      </div>
      <div className="cents-item">
        {cents.quarterDollar}
        <span>Quarter Dollar</span>
      </div>
      <div className="cents-item">
        {cents.oneDime}
        <span>Dimes</span>
      </div>
      <div className="cents-item">
        {cents.nickel}
        <span>Nickel</span>
      </div>
      <div className="cents-item">
        {cents.penny}
        <span>Penny</span>
      </div>
    </div>
  );
}

export default DisplayCoins;
