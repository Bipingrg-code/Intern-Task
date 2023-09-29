import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../App/store";

const Navbar: React.FC = () => {
  const { total } = useSelector((state: RootState) => state.cart);
  console.log(total);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <span className="ml-3 text-4xl md:text-gray-900 md:font-bold cursor-pointer">
            Ramailo Store
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base cursor-pointer justify-center">
          <Link to="/" className="mr-5 hover:text-blue-500 hover:font-semibold">
            Home
          </Link>
          <Link
            to="/about"
            className="mr-5 hover:text-blue-500 hover:font-semibold"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-5 hover:text-blue-500 hover:font-semibold"
          >
            Contact
          </Link>
          <Link
            to="/products"
            className="mr-5 hover:text-blue-500 hover:font-semibold"
          >
            Product
          </Link>
        </nav>
        <Link to="/products/cart">
          <div className="relative">
            <AiOutlineShoppingCart size={32} className="cursor-pointer" />
            {
              <span className="absolute top-0 right-0 bottom-10 left-6 bg-red-500 text-white rounded-full w-5 h-5 text-sm flex items-center justify-center">
                {total}
              </span>
            }
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
