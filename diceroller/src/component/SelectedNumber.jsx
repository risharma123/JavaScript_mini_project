import React, { useState } from "react";

const SelectedNumber = ({ clickNumber, setClickNumber, error, setError }) => {
  const number = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setClickNumber(value);
    setError("");
  };
  return (
    <div>
      <p className="error">{error}</p>
      <div className="selected-box">
        {number.map((value, i) => (
          <div
            key={i}
            className={value === clickNumber ? "hoverNumber" : "selectedNumber"}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="para">Selected Number</p>
    </div>
  );
};

export default SelectedNumber;
