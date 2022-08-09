import React from "react";
import TicTacToe from "../Components/demos/TicTacToe";
import ShowHide from "../Components/ShowHide";

const Demo = () => {
  return(
    <div>
      <h1> Demos Page</h1>
      <hr/>
      <ShowHide title={"Tic-Tac-Toe"}><TicTacToe/></ShowHide>
      <hr/>
      <h2>More to be added</h2>
    </div>
  )
};

export default Demo;
