import { useEffect, useState } from "react";
import CryptoTable from "./components/CryptoTable";

type CryptoData = {
  coins: any[];
  hasNext: boolean;
};

const App = () => {
  const [data, setData] = useState<CryptoData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false); // Set initial loading state to false
  const [error, setError] = useState<boolean>(false);
  const [next, setNext] = useState<number>(1);

  const fetchCryptoData = async () => {
    setLoading(true); // Set loading state to true when fetching data
    try {
      const response = await fetch(`/api/fe/cryptocurrencies?page=${next}`);
      if (!response.ok) {
        setError(true);
        throw new Error("API request failed");
      }
      const result = await response.json();

      // Merge the new data with the existing data
      if (data) {
        setData({
          coins: [...data.coins, ...result.coins],
          hasNext: result.hasNext,
        });
      } else {
        setData(result);
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching crypto data:", error);
    }
    setLoading(false); // Set loading state to false after fetching data
  };

  const handleNext = () => {
    setNext(next + 1);
  };

  const handlePrev = () => {
    setNext(next - 1);
  };

  // Fetch data when the component first mounts
  useEffect(() => {
    fetchCryptoData();
  }, [next]); // Empty dependency array to fetch data only once when component mounts

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>There was an error...</h2>;
  }

  return (
    <div className="container mx-auto p-4 bg-slate-100">
      <h1 className="text-4xl font-semibold p-6 text-center font-serif leading-4">
        Crypto Table
      </h1>
      <CryptoTable
        data={data}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default App;
