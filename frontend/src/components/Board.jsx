import React, { useState } from "react";
import { Scoreboard } from "./Scoreboard";
import { Square } from "./Square";

export const Board = (props) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [score, setScore] = useState({
    player1: 0,
    player2: 0,
  });

  const [value, setValue] = useState({
    count: 0,
    arr: Array(9).fill(null),
  });
  const [turn, setTurn] = useState(getRandomInt(2) === 0 ? 0 : 1);

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
      if (
        value.arr[a] !== null &&
        value.arr[a] === value.arr[b] &&
        value.arr[a] === value.arr[c]
      ) {
        return value.arr[a];
      }
    }

    return false;
  };

  const checkDraw = () => {
    if (value.count === 9) {
      return true;
    }
    return false;
  };

  const isWinner = checkWinner();
  const isDraw = checkDraw();
  const handleClick = (index) => {
    if (value.arr[index] !== null) {
      return;
    }
    const copyValue = [...value.arr];
    copyValue[index] = turn ? "O" : "X";
    setValue({
      count: value.count + 1,
      arr: copyValue,
    });

    setTurn(!turn);
  };

  const handleWinner = () => {
    const copyScore = score;
    if (isDraw) {
      setValue({ count: 0, arr: Array(9).fill(null) });
      return;
    }
    if (isWinner) {
      if (isWinner === "O") {
        copyScore.player1 = copyScore.player1 + 1;
      } else {
        copyScore.player2 = copyScore.player2 + 1;
      }
    }

    setScore(copyScore);
    setValue({ count: 0, arr: Array(9).fill(null) });
  };

  return (
    <div className="board-container">
      {isWinner || isDraw ? (
        <>
          <h4>{isDraw ? "Draw ho gaya" : `${isWinner} jeet gaya`}</h4>
          <div className="grid">
            <button onClick={handleWinner}>Play Again</button>
          </div>
        </>
      ) : (
        <>
          <h4>Player {turn ? "O" : "X"} please move</h4>
          <div className="grid">
            <div className="board-row">
              <Square
                id="box0"
                value={value.arr[0]}
                onClick={() => handleClick(0)}
              />
              <Square
                id="box1"
                value={value.arr[1]}
                onClick={() => handleClick(1)}
              />
              <Square
                id="box2"
                value={value.arr[2]}
                onClick={() => handleClick(2)}
              />
            </div>
            <div className="board-row">
              <Square
                id="box3"
                value={value.arr[3]}
                onClick={() => handleClick(3)}
              />
              <Square
                id="box4"
                value={value.arr[4]}
                onClick={() => handleClick(4)}
              />
              <Square
                id="box5"
                value={value.arr[5]}
                onClick={() => handleClick(5)}
              />
            </div>
            <div className="board-row">
              <Square
                id="box6"
                value={value.arr[6]}
                onClick={() => handleClick(6)}
              />
              <Square
                id="box7"
                value={value.arr[7]}
                onClick={() => handleClick(7)}
              />
              <Square
                id="box8"
                value={value.arr[8]}
                onClick={() => handleClick(8)}
              />
            </div>
          </div>
        </>
      )}
      <Scoreboard score={score} setScore={setScore} />
    </div>
  );
};
