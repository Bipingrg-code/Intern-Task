import TipCalculator from "./components/TipCalculator";

export const App = () => {
  return (
    <div className="flex justify-center items-center flex-col  gap-2 min-h-screen bg-purple-200 rounded-md border">
      <h2 className="text-2xl font-mono font-bold">Tip Calculator</h2>
      <TipCalculator />
    </div>
  );
};
export default App;
