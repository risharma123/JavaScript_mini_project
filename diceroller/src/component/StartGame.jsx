import React from "react";

function StartGame({toggle}) {
  return (
    <div className="dice-box">
      <div className="img-box">
        <img src="dices 1.png" alt="" />
      </div>
      <div className="detail-box">
        <h2 className="font">DICE GAME</h2>
        <button className="btn" onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
}

export default StartGame;
