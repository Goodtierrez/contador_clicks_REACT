import React from "react";
import "../styleSheets/Contador.css"

const Contador = ({ numClicks }) => {

  return (

    <div className="contador">
      {numClicks}
    </div>

  )
}

export default Contador;