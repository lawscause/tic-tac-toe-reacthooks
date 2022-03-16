import "./App.css";
import { useState } from "react";
import Square from "./Components/Square";

function App() {
  //create the state to store the tic-tac-toe board
  //begin with an empty board, which will be represented by
  //an array of nine which are all initially blank
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  //const [r0c0, r0c1, r0c2, r1c0, r1c1, r1c2, r2c0, r2c1, r2c2] = board;

  //
  const Ecks = "X";
  const Owh = "O";

  //Player X gets to go first
  const [player, setPlayer] = useState(Ecks);

  //when a player chooses the square have it play either an X or an O
  //based on whose turn it is. Don't allow a square to be changed if
  //it has been previously chosen
  const chooseSquare = (square) => {
    console.log("square : ", square);
    setBoard(
      board.map((val, index) => {
        console.log("val : ", val);
        console.log("index : ", index);

        //return the player if the Square hasn't already been chosen
        if (index == square && val == "") {
          console.log("player : ", player);
          return player;
        }

        return val;
      })
    );

    //if it was Ecks' turn change it to Owh's turn
    if (player == Ecks) {
      setPlayer(Owh);
    } else {
      setPlayer(Ecks);
    }
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            id="sq3"
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            id="sq4"
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            id="sq5"
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            id="sq6"
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            id="sq7"
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            id="sq8"
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
