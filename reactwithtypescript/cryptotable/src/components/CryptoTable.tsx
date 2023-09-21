type CryptoData = {
  id: string;
  name: string;
  price: number;
  marketCap: number;
};
type CryptoTableProps = {
  data: { coins: CryptoData[]; hasNext: boolean } | null;
  handleNext: () => void;
  handlePrev: () => void;
};
const CryptoTable: React.FC<CryptoTableProps> = ({
  data,
  handleNext,
  handlePrev,
}) => {
  //console.log(data);
  if (data === null) {
    return <h3>Data is loading..!</h3>;
  }
  const { coins, hasNext } = data;
  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="border">
            <th className="px-4 py-2 font-semibold text-2xl">Coin</th>
            <th className="px-4 py-2 font-semibold text-2xl">Price</th>
            <th className="px-4 py-2 font-semibold text-2xl">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((crypto: any) => (
            <tr key={crypto.name}>
              <td className="border px-4 py-2">{crypto.name}</td>
              <td className="border px-4 py-2">{crypto.price}</td>
              <td className="border px-4 py-2">{crypto.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        {coins.length > 0 && (
          <button
            className="px-4 py-2 border rounded-md bg-gray-600 text-white font-bold"
            onClick={handlePrev}
          >
            Prev
          </button>
        )}
        {hasNext && (
          <button
            className="px-4 py-2 border rounded-md bg-gray-600 text-white font-bold"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;
