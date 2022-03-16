import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Square from "./Components/Square";

function App() {
  //create the state to store the tic-tac-toe board
  //begin with an empty board, which will be represented by
  //an array of nine which are all initially blank
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [r0c0, r0c1, r0c2, r1c0, r1c1, r1c2, r2c0,r2c1,r2c2] = board;

  return (
    <div className="App">
      <div className="board">
        <div id="sq0" className="row">
          <Square val={board[0]} chooseSquare={() => {alert(0);}}/>
        </div>
        <div id="sq1" className="row">
          <Square val={board[1]} chooseSquare={() => {alert(1);}}/>
        </div>
        <div id="sq2" className="row">
          <Square val={board[2]} chooseSquare={() => {alert(2);}}/>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
