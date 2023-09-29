import { useSelector, useDispatch } from "react-redux";
import { fetchedCategoryProducts } from "../../Redux-toolkit/Features/CategoryProducts/categoryProductsSlice";
import { useEffect } from "react";
import { RootState } from "../../App/store";
import { Link } from "react-router-dom";

const CategoryProducts: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector(
    (state: RootState) => state.categoryProducts
  );
  useEffect(() => {
    dispatch(fetchedCategoryProducts() as any);
  }, []);
  if (loading) {
    <h2 className="text-center text-2xl">Loading..!</h2>;;
  }
  if (!error && !loading) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="xl:w-1/6 lg:w-1/4 md:w-full gap-2">
              <Link
                to={`/products/category/${encodeURIComponent(category)}`}
                className="text-base sm:text-xl text-slate-800 font-medium title-font mb-2 mr-4 border bg-blue-200 rounded-xl flex items-center justify-center group relative transition duration-300 ease-in-out hover:text-blue-500 hover:border-b hover:border-blue-500"
              >
                <span className="group-hover:border-b-transparent cursor-pointer">
                  {category}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
