import { useState } from "react";
import "../../StylingSheets/main.scss"

function TicTacToe() {
  const [space, setSpace] = useState({
    1: 'Click Me',
    2: 'Click Me',
    3: 'Click Me',
    4: 'Click Me',
    5: 'Click Me',
    6: 'Click Me',
    7: 'Click Me',
    8: 'Click Me',
    9: 'Click Me',
  });
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(null)
  const [winState, setWinState] = useState([])
  const wins = [
    [1,2,3], [1,4,7], [1,5,9], [2,5,8], [4,5,6], [7,8,9], [3,6,9], [3,5,7] 
  ]

  const checkWinner = () =>{
    wins.forEach((win)=>{
      if(space[win[0]] === space[win[1]] && space[win[0]] === space[win[2]] && space[win[0]] !== "Click Me"){
        setWinner(`Player ${space[win[0]].toUpperCase()}`)
        setWinState(win)
      }
    })
    if(turn >= 8){
      setWinner('No one')
    }
  }

  const change = (key) =>{
    if(winner === 'Player X' || winner ===  'Player O'){
      return
    }
    if(space[key] === 'X' || space[key]==='O'){
      return
    }
    if(turn % 2 === 0){
      space[key] = 'X'
      setSpace({...space})
    }
    if(turn % 2 === 1){
      space[key] = 'O'
      setSpace({...space})
    }
    setTurn(turn+1)
    checkWinner()
  }

  const reset = () =>{
    setWinner(null)
    setTurn(0)
    setSpace({
      1: 'Click Me',
      2: 'Click Me',
      3: 'Click Me',
      4: 'Click Me',
      5: 'Click Me',
      6: 'Click Me',
      7: 'Click Me',
      8: 'Click Me',
      9: 'Click Me',
    })
    setWinState([])
  }

  const renderGrid = () => {
    return Object.entries(space).map((space) => {
      return <div onClick={()=>change(space[0])} style={{backgroundColor:`${winState.includes(parseInt(space[0]))?'green':''}`}} key={space[0]}>{space[1]}</div>;
    });
  };

  return (
    <div className="projectDiv">
      <h1>Tic Tac Toe</h1>
      <hr/>
      {winner? "" :<h2>Player {turn%2 === 0 ? "X's" : "O's"} Turn</h2>}
      {winner? <h2>{winner} is the Winner</h2> :<div className="tic-tac-grid">{renderGrid()}</div>}
      <button onClick={()=>reset()}>Reset Button</button>
    </div>
  );
}

export default TicTacToe;