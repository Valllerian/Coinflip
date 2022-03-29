import React, { useState } from "react";
import Coin from "../Coin/Coin";

import Heads from "./heads.jpeg"; // with import
import Tails from "./tails.jpeg"; // with import

const Flipper = () => {
  const [coin, setCoin] = useState(Heads);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [flips, setFlips] = useState(0);

  const flipCoin = (e) => {
    e.preventDefault();
    let x = Math.floor(Math.random() * 2);
    setFlips(flips + 1);
    if (x === 1) {
      setHeads(heads + 1);
      setCoin(Heads);
    } else {
      setTails(tails + 1);
      setCoin(Tails);
    }
  };
  return (
    <div>
      <div>Let`s flip a coin!</div>
      <Coin coin={coin} />
      <button onClick={(e) => flipCoin(e)}>Flip it!</button>
      <div>
        Out of {flips} flips, there have been {heads} heads and {tails} tails.
      </div>
    </div>
  );
};

export default Flipper;
