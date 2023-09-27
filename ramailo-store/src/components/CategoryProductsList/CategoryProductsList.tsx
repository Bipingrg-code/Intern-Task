import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const base_Url = import.meta.env.VITE_APP_API_URL;

export const CategoryProductList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${base_Url}/category/${category}`;
        const response = await axios.get(apiUrl);
        setProducts(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
        setError("Error fetching products. Please try again.");
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  //console.log(products);
  return (
    <section className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <h2 className="text-2xl text-blue-400 tracking-widest font-medium title-font mb-6 flex gap-2">
          <Link to="/">
            <span className="underline">Products</span>
          </Link>
          {category}
        </h2>
        <div className="flex flex-wrap -m-4 cursor-pointer">
          {products?.products.map((product: any) => (
            <Link
              to={`/products/${product.id}`} // Add a dynamic product URL here
              key={product.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.title}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProductList;
