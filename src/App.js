import "./App.css";
import { useState, useEffect } from "react";
import Square from "./components/Square";
import { Patterns } from "./components/Patterns";

function App() {
  //create the state to store the tic-tac-toe board
  //begin with an empty board, which will be represented by
  //an array of nine which are all initially blank
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  //
  const Ecks = "X";
  const Owh = "O";

  //Player X gets to go first
  const [player, setPlayer] = useState(Ecks);

  const [result, setResult] = useState({ winner: "none", state: "none" });

  /* 
    When the result changes if its property state isn't none then the game is finished.
    show the alert message with the winner info, then restart the game.
  */
  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  /*
  when the board changes first check to see, if we have a tie.
  If there is no tie, check to see if there is a winner.
  if neither has occured changed whose turn it is by changing the player.
  */
  useEffect(() => {
    checkIfTie();
    checkForWinner();
    //if it was Ecks' turn change it to Owh's turn
    if (player === Ecks) {
      setPlayer(Owh);
    } else {
      setPlayer(Ecks);
    }
  }, [board]);

  //when a player chooses the square have it play either an X or an O
  //based on whose turn it is. Don't allow a square to be changed if
  //it has been previously chosen
  var chooseSquare = (square) => {
    console.log("square : ", square);
    setBoard(
      board.map((val, index) => {
        console.log("val : ", val);
        console.log("index : ", index);

        //return the player if the Square hasn't already been chosen
        if (index === square && val === "") {
          console.log("player : ", player);
          return player;
        }

        return val;
      })
    );
  };

  var checkForWinner = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      //if no one has played a turn not a winner.
      if (firstPlayer === "") return;

      let foundWinningPattern = true;
      currentPattern.forEach((index) => {
        console.log(`board[${index}]: `, board[index]);
        console.log("firstPlayer: ", firstPlayer);
        console.log(
          `board[${index}] !== ${firstPlayer}`,
          board[index] !== firstPlayer
        );
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
        }

        console.log("foundWinningPattern: ", foundWinningPattern);
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  //if all the squares are filled up and we already checked for a winner
  //then we have a tie.
  var checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No one", state: "Tie" });
    }
  };

  //restart the game by resetting the board to blanks and
  //setting player.
  var restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer(Ecks);
  };

  /*
  Each row has 3 squares
  there are 3 rows
  the value in a square it value of X or O 
  in that position of the array that represents the board.
  Choosing a square is activated by a click (see the component Square),
  which determines whether to place an X or an O based on whose turn it is
  */
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <br />
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
