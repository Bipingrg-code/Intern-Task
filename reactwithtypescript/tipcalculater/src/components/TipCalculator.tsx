import { useState } from "react";

export const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  const calculateTip = () => {
    const tipAmount = (bill * tipPercent) / 100;
    const totalAmount = bill + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    return {
      tipAmount: tipAmount.toFixed(2),
      amountPerPerson: amountPerPerson.toFixed(2),
    };
  };
  const tipResult = calculateTip();
  return (
    <div className="border rounded-md h-[350px] w-[300px] bg-slate-200 p-4 gap-4 flex flex-col">
      <div className="flex flex-col justify-start items-start">
        <label htmlFor="">Bill</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
          placeholder="input total"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <label htmlFor="">Tip %</label>
        <input
          type="number"
          value={tipPercent}
          onChange={(e) => setTipPercent(parseFloat(e.target.value))}
          placeholder="input bill"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <label htmlFor="">Number of People</label>
        <input
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(parseFloat(e.target.value))}
          placeholder="input number of people"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="flex justify-end items-end flex-col gap-4">
        <p className="font-semibold">Total Tip: ${tipResult.tipAmount}</p>
        <p className="font-semibold">
          Tip Per Person: `$
          {tipResult.amountPerPerson ? `${tipResult.amountPerPerson}` : "00"}`
        </p>
      </div>
    </div>
  );
};

export default TipCalculator;
