import React, { useState } from "react";
import ScoerePge from "./ScoerePge";
import SelectedNumber from "./SelectedNumber";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [clickNumber, setClickNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [score,setScore]=useState(0);

  let randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const RollDice1 = () => {
    if (!clickNumber) {
      setError("You have not selected any number");
      return;
    }
    let randomNumber = randomNumberInRange(1, 6);
    setCurrentDice((prev) => randomNumber);
    if(clickNumber===randomNumber){
        setScore(pre=>pre+randomNumber)
    }
    else{
        setScore(pre=>pre-2)
    }
    setClickNumber(undefined)
  };

  const resetScore=()=>{
    setScore(0);
  }
  return (
    <div>
      <div className="GamePlay">
        <ScoerePge score={score}/>
        <SelectedNumber
          error={error}
          setError={setError}
          clickNumber={clickNumber}
          setClickNumber={setClickNumber}
        />
      </div>
      <RollDice RollDice1={RollDice1} currentDice={currentDice} reset={resetScore}/>
    </div>
  );
};

export default GamePlay;
