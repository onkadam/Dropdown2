import "./styles.css";

import React, { useState } from "react";

function DropdownFrom() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number2Options, setNumber2Options] = useState([]);

  function handleNumber1Change(e) {
    const selectedNumber = parseInt(e.target.value);
    setNumber1(selectedNumber);
    setNumber2("");
    if (selectedNumber) {
      if (selectedNumber === 11) {
        setNumber2Options([10]);
      } else {
        setNumber2Options(
          [...Array(11 - selectedNumber).keys()].map((i) => {
            return selectedNumber + i;
          })
        );
      }
    } else {
      setNumber2Options([]);
    }
  }

  function handleNumber2Change(e) {
    const selectedNumber = parseInt(e.target.value);
    setNumber2(selectedNumber);
  }

  return (
    <form>
      <div>
        <h2 style={{ textAlign: "center" }}>Dropdown Form</h2>
        <label>First Dropdown :</label>
        <select value={number1} id="number1" onChange={handleNumber1Change}>
          <option value="">Select a number</option>
          {[...Array(10).keys()].map((i) => (
            <option key={i + 1} value={i + 2}>
              {i + 1}
            </option>
          ))}
        </select>
        <label>Second Dropdown :</label>
        <select
          id="number2"
          value={number2}
          onChange={handleNumber2Change}
          disabled={!number1}
        >
          <option value=""> select number </option>
          {number2Options.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
export default DropdownFrom;
