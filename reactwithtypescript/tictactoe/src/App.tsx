import GameBoard from "./components/GameBoard";

export default function App() {
  return (
    <div className="min-h-full flex justify-center items-center gap-4 flex-col py-10 container mx-auto">
      <p className="text-center text-4xl p-4 font-mono font-semibold ">
        Tic Tac Toe
      </p>
      <GameBoard />
    </div>
  );
}
