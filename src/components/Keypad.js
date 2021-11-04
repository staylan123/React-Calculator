import React from "react";
import "./Keypad.css";

const Keypad = ({ calc, setCalc }) => {
  // Eval expression
  const calculateExpression = () => {

    if(calc === "") {
      setCalc(0)
      return;
    }

    try {
      setCalc(eval(calc));
    } catch (error) {
      alert("Invalid Syntax!");
      clearCalc();
    }
  };

  // Create Express
  const createExpression = (val) => {
    setCalc(calc + val);
  };

  // Clear Calc
  const clearCalc = () => {
    setCalc("");
  };

  return (
    <div className={"keypad"}>
      <button className={"functional"} onClick={clearCalc}>
        AC
      </button>
      <button className={"functional"} onClick={() => createExpression("(")}>
        (
      </button>
      <button className={"functional"} onClick={() => createExpression(")")}>
        )
      </button>
      <button className={"operational"} onClick={() => createExpression("/")}>
        /
      </button>
      <button onClick={() => createExpression("7")}>7</button>
      <button onClick={() => createExpression("8")}>8</button>
      <button onClick={() => createExpression("9")}>9</button>
      <button
        onClick={() => createExpression("*")}
        className={"operational"}
        value="*"
      >
        *
      </button>
      <button onClick={() => createExpression("4")}>4</button>
      <button onClick={() => createExpression("5")}>5</button>
      <button onClick={() => createExpression("6")}>6</button>
      <button className={"operational"} onClick={() => createExpression("-")}>
        -
      </button>
      <button onClick={() => createExpression("1")}>1</button>
      <button onClick={() => createExpression("2")}>2</button>
      <button onClick={() => createExpression("3")}>3</button>
      <button className={"operational"} onClick={() => createExpression("+")}>
        +
      </button>
      <button className={"zero"} onClick={() => createExpression("0")}>
        0
      </button>
      <button onClick={() => createExpression(".")}>.</button>
      <button className={"operational"} onClick={calculateExpression}>
        =
      </button>
    </div>
  );
};

export default Keypad;
