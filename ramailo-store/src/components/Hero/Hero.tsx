import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchProducts from "../SearchProducts/SearchProducts";
const base_Url = import.meta.env.VITE_APP_API_URL;

export const Hero: React.FC = () => {
  // const [bgImg, setBgImg] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState<any | string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleSearchQuery = (e: any) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      setError(null);
      try {
        const fetchSearchQuery = async () => {
          const response = await axios.get(
            `${base_Url}/search?q=${encodeURIComponent(searchQuery)}`
          );
          console.log(response.data);
          setSearchResults(response.data);
          setLoading(false);
        };
        fetchSearchQuery();
      } catch (error) {
        console.error("Error fetching data from API", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    }
  }, [searchQuery]);

  return (
    <section
      className="text-gray-400 bg-gray-100 body-font"
      // style={{
      //   backgroundImage: `url('https://www.apple.com/v/iphone-15-pro/a/images/specs/hero_iphone_pro__c9kj8iil656q_large.jpg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Ramailo Dashain With Ramailo Store
          </h1>
          <p className="mb-8 leading-relaxed text-blue-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            porro modi cupiditate magnam vitae voluptatem iusto ipsam corporis
            veniam quos inventore, vero non illo quae dolor labore. A, suscipit
            dolores.
          </p>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label className="leading-7 text-center text-sm text-gray-400">
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                value={searchQuery}
                onChange={handleSearchQuery}
                className="w-full bg-slat rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:border-blue-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <BsSearch size={36} className="cursor-pointer" />
          </div>
          {loading && <h2 className="mt-4">Search products</h2>}
          {error && <div>Error: {error}</div>}
          {searchResults?.products?.length > 0 && (
            <SearchProducts
              searchResults={searchResults}
              searchQuery={searchQuery}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
