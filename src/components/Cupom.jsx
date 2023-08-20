import React from 'react'
import { FiSend } from "react-icons/fi";


import "./Cupom.css"

const Cupom = () => {
    const handleClick = (event) => {
      event.preventDefault();
      const code = Math.random().toString(36).slice(2, 12);
    alert(`O código do seu cupom é: ${code}`);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Enviar<FiSend/></button>
      </div>
  )
}

export default Cupom