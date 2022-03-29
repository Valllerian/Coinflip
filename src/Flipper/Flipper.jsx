import React, { useState } from "react";
import Coin from "../Coin/Coin";

import Heads from "./heads.jpeg"; // with import
import Tails from "./tails.jpeg"; // with import
import Gif from "./eatingCerbe.gif"; // with import

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
    <div className="shadow-xl border-2 border-black bg-white p-5 content-end rounded-md ">
      <div className="mb-4 font-serif">Let`s flip a Cerbe-Coin!</div>
      <Coin coin={coin} />
      <button className="ease inline-block cursor-pointer rounded-full bg-[#fbcfe8] px-4 py-1 mt-8 mb-4 text-xl text-black transition duration-500 hover:bg-gray-200 shadow-xl  border-2 border-black font-serif" onClick={(e) => flipCoin(e)}>Flip it!</button>
      <div className="font-serif">
        Out of {flips} flips, there have been {heads} Cerbe-Heads and {tails} Cerbe-Tails.
      </div>
      <div className="absolute bottom-0 left-0"><img src={Gif} alt="" /></div>
    </div>
  );
};

export default Flipper;
