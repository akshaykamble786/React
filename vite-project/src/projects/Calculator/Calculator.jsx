import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const clearDisplay = () => setDisplay("");

  const calculate = () => {
    try {
      setDisplay(eval(display));
    } catch {
      setDisplay("Error Occurred");
    }
  };

  const appendToDisplay = (input) => {
    setDisplay((prev) => prev + input);
  };

  return (
    <div className="cal">
      <input readOnly value={display} />
      <div className="keys">
        <button onClick={() => appendToDisplay("+")}>+</button>
        <button onClick={() => appendToDisplay("-")}>-</button>
        <button onClick={() => appendToDisplay("/")}>/</button>
        <button onClick={() => appendToDisplay("*")}>*</button>
        <button onClick={() => appendToDisplay(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay("0")}>0</button>
        <button onClick={() => appendToDisplay("9")}>9</button>
        <button onClick={() => appendToDisplay("8")}>8</button>
        <button onClick={() => appendToDisplay("7")}>7</button>
        <button onClick={() => appendToDisplay("6")}>6</button>
        <button onClick={() => appendToDisplay("5")}>5</button>
        <button onClick={() => appendToDisplay("4")}>4</button>
        <button onClick={() => appendToDisplay("3")}>3</button>
        <button onClick={() => appendToDisplay("2")}>2</button>
        <button onClick={() => appendToDisplay("1")}>1</button>
      </div>
    </div>
  );
};

export default Calculator;
