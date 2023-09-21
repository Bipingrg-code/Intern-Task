import { useState, createContext, useContext } from "react";

type MovieContextType = {
  isLoading: boolean;
  error: boolean;
  data: any[];
  setFetchData: (data: any) => void;
  setErrorState: (error: boolean) => void;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieData = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("context not found");
  }
  return context;
};

type MovieContextProviderProps = {
  children?: React.ReactNode;
};

export const MovieContextProvider: React.FC<MovieContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const setFetchData = (result: any) => {
    setData(result);
    setIsLoading(false); // Set isLoading to false after data is fetched
  };

  const setErrorState = (hasError: boolean) => {
    setError(hasError);
    setIsLoading(false); // Set isLoading to false when an error occurs
  };

  const contextValue: MovieContextType = {
    isLoading,
    error,
    data,
    setFetchData,
    setErrorState,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
