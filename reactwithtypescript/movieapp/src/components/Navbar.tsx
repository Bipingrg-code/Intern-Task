import { navLinksData } from "../data";
import User from "../assets/icons/user.png";

const Navbar = () => {
  const navLinks = navLinksData.navLinks;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        <div className=" flex  gap-4 flex-grow">
          <div className="text-white font-bold text-xl">Ramailo Movie</div>
          <ul className="flex justify-center items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex justify-end items-end flex-1 gap-2 text-white cursor-pointer">
          login
          <img
            src={User}
            alt="user-icons"
            height={22}
            width={22}
            className="object-fill bg-white rounded-full border-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
