import React, { useState } from "react";

const Coin = (props) => {
  let coin = props.coin;

  return (
    <div>
      <img src={coin} alt="Coin heads" />
    </div>
  );
};

export default Coin;
