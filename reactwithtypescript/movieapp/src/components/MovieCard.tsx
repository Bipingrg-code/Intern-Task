import { useMovieData } from "../context/MovieContext";
import UseFetch from "../hooks/UseFetch";

const api_KEY = import.meta.env.VITE_APP_TMDB_KEY;
const base_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_KEY}`;

export const MovieCard: React.FC = () => {
  UseFetch({ url: base_URL });
  const { isLoading, error, data } = useMovieData() as {
    isLoading: boolean;
    error: boolean;
    data: {
      results?: any[]; // Use optional chaining to handle possible absence of 'results'
    };
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movies.</p>;
  }

  if (!data || !Array.isArray(data.results) || data.results.length === 0) {
    return <p>No movie data available.</p>;
  }
  console.log(data);

  return (
    <div>
      {data.results.map((movie) => (
        <div
          key={movie.id}
          className="bg-white rounded-lg shadow-md p-4 w-[300px]"
        >
          <img
            src={movie.backdrop_path}
            className="w-full h-auto mb-4 rounded-lg"
            alt={movie.original_name}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{movie.original_name}</h2>
            <p className="text-gray-500 text-sm">{movie.first_air_date}</p>
            <p className="text-yellow-500 text-lg">{movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
