import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux-toolkit/Features/Cart/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base_Url = import.meta.env.VITE_APP_API_URL;

const SingleProducts = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${base_Url}/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product", error);
        setError("An error occurred while fetching the product.");
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [productId]);

  const handleBuyButton = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
      })
    );

    // Show a toast notification
    toast.success("Product added to cart", {
      position: "top-right",
      autoClose: 2000, // Close the notification after 2 seconds
    });
  };

  if (loading) {
    return <h2 className="text-center text-xl">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-2xl">Error: {error}</h2>;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <p className="leading-relaxed">{product.description}</p>

            <div className="flex mt-6 justify-around">
              <span className="title-font font-medium text-2xl text-gray-900">
                Price: ${product.price}
              </span>
              <button
                onClick={handleBuyButton}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default SingleProducts;
