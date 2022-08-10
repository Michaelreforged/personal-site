import React from "react";
import Memory from "../Components/demos/MemoryGame/MemoryGame";
import TicTacToe from "../Components/demos/TicTacToe";
import ShowHide from "../Components/ShowHide";

const Demo = () => {
  return(
    <div>
      <h1> Demos Page</h1>
      <hr/>
      <ShowHide title={"Tic-Tac-Toe"}><TicTacToe/></ShowHide>
      <hr/>
      <ShowHide title={"Memory Game Matching"}><Memory/></ShowHide>
    </div>
  )
};

export default Demo;
