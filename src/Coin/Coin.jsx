import React, {useState} from 'react'
import Heads from './heads.jpeg'; // with import
import Tails from './tails.jpeg'; // with import

const Coin = (props) => {
    let coin = props.coin
  
  return (
    <div>
        <img src={coin} alt="Coin heads" />
    </div>
  )
}

export default Coin