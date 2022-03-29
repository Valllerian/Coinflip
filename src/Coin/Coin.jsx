import React, { useState } from "react";

const Coin = (props) => {
  let coin = props.coin;

  return (
    <div className="">
      <img src={coin} alt="Coin heads" className="mx-auto"/>
    </div>
  );
};

export default Coin;
