import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // daftar menu disimpan dalam array
  const navLinks = [
      { name: "Home", path: "/" },
    { name: "Form", path: "/form" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 text-gray-900 relative  bg-white ">
      {/* Logo */}
      <Link to="/" className="font-bold text-xl">
        Store Apps
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-2 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:bg-gray-900 hover:text-white py-2 px-3 rounded-2xl"
          >
            {link.name}
          </Link>
        ))}
      </div>


      {/* Hamburger button (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-3 py-4 z-50 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-900 hover:text-white py-2 px-3 rounded-2xl w-32 text-center"
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
