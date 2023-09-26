import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux-toolkit/Features/Products/productsSlice";
import { useEffect } from "react";
import { RootState } from "../../App/store";

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);

  if (loading) {
    return <h2>Loading..!</h2>;
  }
  if (error) {
    return <h3>Error..{error}</h3>;
  }
  // const { products } = products;
  // console.log(products?.products);

  return (
    <section className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <h2 className="text-2xl text-blue-400 tracking-widest font-medium title-font mb-6">
          Popular Products
        </h2>
        <div className="flex flex-wrap -m-4 cursor-pointer">
          {products?.products.map((product) => (
            <div
              key={product.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
