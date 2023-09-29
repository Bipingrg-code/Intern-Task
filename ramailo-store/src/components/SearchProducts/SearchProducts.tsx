import { Link } from "react-router-dom";

interface ProductProps {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  title: string;
  price: number;
}
interface SearchProductsProps {
  searchResults: any;
  searchQuery: string;
}
const SearchProducts: React.FC<SearchProductsProps> = ({
  searchResults,
  searchQuery,
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-blue-400 tracking-widest font-medium title-font mb-6">
        Popular {searchQuery}
      </h2>
      <div className="flex flex-wrap -m-4 cursor-pointer">
        {searchResults.products.map((product: ProductProps) => (
          <Link
            to={`/products/${product.id}`}
            className="lg:w-1/4 md:w-1/2 p-4 w-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div key={product.id}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.thumbnail}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
