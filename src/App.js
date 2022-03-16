import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //create the state to store the tic-tac-toe board
  //begin with an empty board, which will be represented by
  //an array of nine which are all initially blank
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <div className="board"></div>
    </div>
  );
}

export default App;
