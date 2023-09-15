import { useState } from "react";

type Props = {
  setTimeInSeconds: Function;
};
const Control = (props: Props) => {
  const { setTimeInSeconds } = props;

  const [intervalID, setIntervalID] = useState<number>(0);

  const handleStartTimer = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((prevState: number) => prevState + 0.001); // Increment by 1 millisecond
    }, 1); // Update every 1 millisecond
    setIntervalID(interval);
  };
  const handleStopTimer = () => {
    clearInterval(intervalID);
  };
  const handleRestTimer = () => {
    clearInterval(intervalID);
    setTimeInSeconds(0);
  };
  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={handleStartTimer}
          className="px-4 py-2 border rounded-md bg-slate-500 text-white font-bold font-mono uppercase tracking-tighter"
        >
          Start
        </button>
        <button
          onClick={handleStopTimer}
          className="px-4 py-2 border rounded-md bg-slate-500 text-white font-bold font-mono uppercase tracking-tighter"
        >
          Stop
        </button>
        <button
          onClick={handleRestTimer}
          className="px-4 py-2 border rounded-md bg-slate-500 text-white font-bold font-mono uppercase tracking-tighter"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Control;
