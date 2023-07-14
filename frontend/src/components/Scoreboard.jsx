import React from "react";

export const Scoreboard = (props) => {
  const resetScore = () => {
    props.setScore({
      player1: 0,
      player2: 0,
    });
  };
  return (
    <div className="scoreboard-container">
      <h2>Scoreboard</h2>
      <h5>Player 1 : {props.score.player1}</h5>
      <h5>Player 2 : {props.score.player2}</h5>
      <button className="scoreboard-button" onClick={resetScore}>
        Reset
      </button>
    </div>
  );
};
