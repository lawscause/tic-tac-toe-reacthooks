//import React from the react library
import React from "react";
//import the css we will use from App.css in src folder
import "../App.css";

//create a component that represents each square on the tic tac toe board
//the Square needs to know which value to show X or O and it needs to
//execute a function which chooses the Square
var Square = ({ val, chooseSquare }) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
