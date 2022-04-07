import React, { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import "./App.css";

// const numbers = [1, 2];

function App() {
  const [tempArray, setTempArray] = useState([1, 2]);
  let tm = {};
  useEffect(() => {
    tm = setTimeout(() => {
      let tempArrayL = tempArray.length;
      let tempA = cloneDeep(tempArray);
      tempA[tempArrayL] = tempArrayL + 1;
      if (tempA.length <= 100) {
        setTempArray(tempA);
      }
    }, 1000);
  });
  if (tempArray.length >= 100) {
    clearInterval(tm);
  } else {
    console.log(tempArray, "+++");
  }

  return (
    <ul className={`${tempArray && tempArray.length >= 100 ? "addClass" : ""}`}>
      {tempArray.map((num) => {
        return (
          <li
            key={num}
            className={`${
              num % 6 === 0
                ? "orange"
                : num % 3 === 0
                ? "green"
                : num % 2 === 0
                ? "blue"
                : ""
            }`}
          >
            {num}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
