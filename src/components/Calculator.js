import React, { useState } from "react";
import Keypad from "./Keypad";
import Result from "./Result";

import "./Calculator.css";

const Calculator = () => {
  const [calc, setCalc] = useState("");

  return (
    <div className={"calculator"}>
      <Result calc={calc} />
      <Keypad calc={calc} setCalc={setCalc} />
    </div>
  );
};

export default Calculator;
