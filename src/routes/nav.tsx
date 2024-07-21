import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">MyLogo</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex lg:space-x-4">
            <li className="text-white py-2 lg:py-0">
              <Link to="/signup" className="hover:text-gray-400">
                Signup
              </Link>
            </li>
            <li className="text-white py-2 lg:py-0">
              <Link to="/aboutus" className="hover:text-gray-400">
                ABOUT US
              </Link>
            </li>
            <li className="text-white py-2 lg:py-0">
              <Link to="/contactus" className="hover:text-gray-400">
                CONTACT US
              </Link>
            </li>
            <li className="text-white py-2 lg:py-0">
              <Link to="/profile" className="hover:text-gray-400">
                PROFILE
              </Link>
            </li>
            <li className="text-white py-2 lg:py-0">
              <Link to="/login" className="hover:text-gray-400">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
