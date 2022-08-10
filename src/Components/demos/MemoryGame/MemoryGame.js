import { useState } from "react";
import createStart from "./Randomizer";
import "../../../StylingSheets/main.scss"

const Memory = () => {
  let gameArray = createStart();
  const [spaces, setSpaces] = useState(gameArray);
  const [player, setPlayer] = useState([0,0]);
  const [turn, setTurn] = useState(0);
  const [reveal, setReveal] = useState([]);
  const [pause, setPause] = useState(false)
  
  const check = (ind) => {
    if (reveal.includes(ind) || pause || spaces[ind].flipped === true) {
      return;
    }
    flip(ind);
    reveal.push(ind);
    console.log(reveal.length);
    if (reveal.length <= 1) {
      setReveal(reveal);
      return;
    }
    if (spaces[reveal[0]].value === spaces[reveal[1]].value) {
      let p = turn % 2
      player[p]++
      setPlayer([...player])
    } else {
      setPause(true)
      setTimeout(() => {
        reveal.forEach((rev) => {
          unflip(rev);
        });
      }, 1000);
      setTurn(turn + 1);
    }
    setReveal([]);
  };

  const flip = (ind) => {
    spaces[ind].flipped = true;
    setSpaces([...spaces]);
  };

  const unflip = (ind) => {
    setPause(false)
    spaces[ind].flipped = false;
    setSpaces([...spaces]);
  };

  const renderSpace = () => {
    return spaces.map((space, ind) => {
      return (
        <div key={ind} onClick={() => check(ind)}>
          <h1>{space.flipped ? space.value : "flip"}</h1>
        </div>
      );
    });
  };

  const reset = () => {
    let newGame = createStart();
    setSpaces(newGame);
    setTurn(0)
    setPlayer([0,0])
  };

  return (
    <div className="projectDiv">
      <h1>Memory</h1>
      <p>{turn%2 === 0 ? "Player One's Turn": "Player Two's Turn"}</p>
      <p>Player One: {player[0]} Player Two: {player[1]}</p>
      <div className="mem-grid">{renderSpace()}</div>
      <button onClick={reset}>Reset Game</button>
    </div>
  );
};

export default Memory;
