import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <span className="ml-3 text-4xl md:text-gray-900 md:font-bold cursor-pointer">
            Ramailo Store
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base cursor-pointer justify-center">
          <a className="mr-5 hover:text-blue-500 hover:font-semibold">Home</a>
          <a className="mr-5 hover:text-blue-500 hover:font-semibold">About</a>
          <a className="mr-5 hover:text-blue-500 hover:font-semibold">
            Contact
          </a>
          <a className="mr-5 hover:text-blue-500 hover:font-semibold">
            Product
          </a>
        </nav>
        <AiOutlineShoppingCart size={32} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
