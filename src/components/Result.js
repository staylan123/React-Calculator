import React from "react";
import "./Result.css";

const Result = ({ calc }) => {
  return (
    <form>
      <input type="text" className={"result"} value={calc} disabled />
    </form>
  );
};

export default Result;