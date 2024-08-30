import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="absolute top-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center p-2 text-white rounded-full z-10 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold">ELEKTRA</Link>
        <nav className="flex space-x-4 ml-14 mr-14">
          <Link to="/mobiles" className="hover:text-gray-300">
            Mobiles
          </Link>
          <a href="#" className="hover:text-gray-300">
            Appliances
          </a>
          <a href="#" className="hover:text-gray-300">
            Computing
          </a>
          <a href="#" className="hover:text-gray-300">
            Accessories
          </a>
        </nav>
        <button className="bg-green-200 hover:bg-yellow-600 text-black px-4 py-2 rounded-full">
          Sign up
        </button>
      </header>
    </>
  );
};

export default Header;
