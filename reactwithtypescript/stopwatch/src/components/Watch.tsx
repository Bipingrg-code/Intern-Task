import { useEffect, useState } from "react";
import Control from "./Control";
import CalculateTimer from "./CalculateTimer";

export const Watch: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = CalculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);
  return (
    <div className="border-2 rounded-full w-[400px] h-[400px] bg-slate-100 text-slate-500 flex justify-center items-center flex-col gap-6 p-4">
      <h3 className="text-center font-bold text-4xl font-mono">Stopwatch</h3>
      <div className="flex gap-2 font-mono text-2xl font-bold">
        <p>{timerArray[0]}:</p>
        <p>{timerArray[1]}:</p>
        <p>{timerArray[2]}</p>
      </div>
      <Control setTimeInSeconds={setTimeInSeconds} />
    </div>
  );
};

export default Watch;
