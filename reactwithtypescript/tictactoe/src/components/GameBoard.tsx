import { useState } from "react";
import Block from "./Block";

const GameBoard: React.FC = () => {
  const [data, setData] = useState(Array(9).fill(null));

  const [player, setPlayer] = useState<number | string>("X");

  const checkResult = (data: any[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (data[a] === data[b] && data[a] && data[c]) {
        return player;
      }
    }
  };
  //Handle Block
  const handleBlockClick = (id: number) => {
    //copy data from initial state
    const newData = Array.from(data);
    newData[id] = player;
    setData(newData);
    setPlayer(player === "X" ? "O" : "X");

    if (newData[id] !== null) {
      return true;
    }

    //check for winning conditions
    const win = checkResult(newData);
    if (win) {
      console.log(player);

      alert(`${player} won the game`);
    }
  };

  const handleReset = () => {
    setData([...Array(9)].map(() => null));
  };
  // console.log(data);

  return (
    <>
      <div className=" border-2 border-gray-700 rounded-md p-6 ">
        <div className="flex justify-center items-center gap-4">
          <Block value={data[0]} onClick={() => handleBlockClick(0)} />
          <Block value={data[1]} onClick={() => handleBlockClick(1)} />
          <Block value={data[2]} onClick={() => handleBlockClick(2)} />
        </div>
        <div className="flex justify-center items-center gap-4 my-4">
          <Block value={data[3]} onClick={() => handleBlockClick(3)} />
          <Block value={data[4]} onClick={() => handleBlockClick(4)} />
          <Block value={data[5]} onClick={() => handleBlockClick(5)} />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Block value={data[6]} onClick={() => handleBlockClick(6)} />
          <Block value={data[7]} onClick={() => handleBlockClick(7)} />
          <Block value={data[8]} onClick={() => handleBlockClick(8)} />
        </div>
      </div>
      <button
        className="px-4 py-2 border rounded-xl bg-slate-200 text-black font-bold font-mono leading-normal text-xl"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
};

export default GameBoard;
