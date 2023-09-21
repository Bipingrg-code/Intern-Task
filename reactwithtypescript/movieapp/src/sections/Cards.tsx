import MovieCard from "../components/MovieCard";

const Cards = () => {
  return (
    <div className="h-auto container mx-auto">
      <div className="py-6 flex gap-4">
        <h1 className="text-4xl text-slate-500 font-bold leading-normal ">
          What's Popular
        </h1>
        <button className="border rounded-full px-4 py-1 font-bold text-base">
          Streaming
        </button>
      </div>
      <MovieCard />
    </div>
  );
};

export default Cards;
