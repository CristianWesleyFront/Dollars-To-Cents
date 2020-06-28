import React, { useState } from "react";
import CurrencyInput from "react-currency-input";

import "./App.css";

import Card from "./components/Card";
import DisplayCoins from "./components/DisplayCoins";

function App() {
  const [coin, setCoin] = useState("0");

  const handleChange = (e) => {
    setCoin(e);
  };

  return (
    <div className="App">
      <Card>
        <div className="content-app">
          <CurrencyInput
            onChange={handleChange}
            value={coin}
            decimalSeparator=","
            thousandSeparator="."
            precision="2"
            prefix="R$ "
          />

          <DisplayCoins coins={parseInt(coin.replace(/[\D]+/g, ""))} />
        </div>
      </Card>
    </div>
  );
}

export default App;
