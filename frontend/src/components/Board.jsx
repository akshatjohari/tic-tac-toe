import React, { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (value[index] !== null) {
      return;
    }
    const copyValue = [...value];
    copyValue[index] = turn ? "O" : "X";
    setValue(copyValue);
    setTurn(!turn);
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <h1> {isWinner} jeet gaya </h1>
          <button
            onClick={() => {
              setValue(Array(9).fill(null));
            }}
          >
            Play Again
          </button>
        </>
      ) : (
        <>
          <h4>Player {turn ? "O" : "X"} please move</h4>
          <div className="board-row">
            <Square value={value[0]} onClick={() => handleClick(0)} />
            <Square value={value[1]} onClick={() => handleClick(1)} />
            <Square value={value[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={value[3]} onClick={() => handleClick(3)} />
            <Square value={value[4]} onClick={() => handleClick(4)} />
            <Square value={value[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={value[6]} onClick={() => handleClick(6)} />
            <Square value={value[7]} onClick={() => handleClick(7)} />
            <Square value={value[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};
