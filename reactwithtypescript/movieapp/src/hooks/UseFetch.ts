import { useEffect } from "react";
import { useMovieData } from "../context/MovieContext";

type UseFetchProps = {
  url: string;
};

const UseFetch: React.FC<UseFetchProps> = ({ url }):any => {
  const movieContext = useMovieData() as {
    setFetchData: (data: any) => void;
    setErrorState: (error: boolean) => void;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          movieContext.setErrorState(true);
          return;
        }
        const result = await response.json();
        movieContext.setFetchData(result);
      } catch (error) {
        movieContext.setErrorState(true);
        return;
      }
    };
    fetchData();
  }, []);
  return movieContext;
};
export default UseFetch;
