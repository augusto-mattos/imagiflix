import React from "react";
import "./Score.css";

function Score({ value }) {

    

  const getBorderColor = () => {
    if (value >= 7) {
      return "border-green-400";
    } else if (value > 4 && value < 7) {
      return "border-yellow-400";
    } else {
      return "border-red-400";
    }
  };

  return (
    <span
      className={`score text-center justify-center inline-block py-1 px-2 border-2 ml-2 rounded-full bg-black bg-opacity-75 ${getBorderColor()}`}
    >
      {value}
    </span>
  );
}

export default Score;
