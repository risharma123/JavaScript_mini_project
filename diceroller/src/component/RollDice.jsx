import React, { useState } from "react";
import Rules from "./Rules";

const RollDice = ({ RollDice1, currentDice,reset }) => {
  const [ruleShow, setRuleShow] = useState(false);
  const handleRulestoggle = () => {
    setRuleShow((pre) => !pre);
  };

  return (
    <div className="dice-detail">
      <div className="dice-img" onClick={RollDice1}>
        <img src={`/dice/dice_${currentDice}.png`} className="img" />
      </div>
      <div>
        <p>Click on Dice to Roll</p>
        <div className="dice-btn">
          <button className="btn-reset" onClick={reset}>Reset Score</button>
          <button className="btn-game" onClick={handleRulestoggle}>
            {ruleShow ? "hide" : "show"} Rules
          </button>
        </div>
      </div>
      {ruleShow && <Rules />}
    </div>
  );
};

export default RollDice;
