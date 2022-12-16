import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("");

  const increment = () => {
    const t = temp + 1;
    if (t > 50) return;
    changeColor(t);
    setTemp(t);
  };

  const decrement = () => {
    const t = temp - 1;
    if (t < -20) return;
    changeColor(t);
    setTemp(t);
  };

  const changeColor = (x) => {
    if (x >= 15) {
      setTempColor("hot");
    } else if (x > 0) {
      setTempColor("normal");
    } else {
      setTempColor("cold");
    }
  };

  return (
    <div className="container">
      <div className={`temp-dial ${tempColor}`}>
        <p>{`${temp}°C`}</p>
      </div>

      <div className="btn-container">
        <button className="temp-btn-hot" onClick={increment}>
          +
        </button>
        <button className="temp-btn-cold" onClick={() => decrement()}>
          -
        </button>
      </div>
    </div>
  );
}
