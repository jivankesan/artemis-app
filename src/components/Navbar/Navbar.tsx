import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ARTEMIS
          </span>
        </Link>

        <div className="flex items-center md:order-2">
          <Link
            to="/login"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </Link>
          {/* You might need to adjust this button's logic for collapsing the menu in a React way */}
          <button className="...">...</button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link to="/" className="text-gray-800 dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-gray-800 dark:text-white"
              >
                Company
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 grid grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                  <div className="p-4">
                    <Link
                      to="/about-us"
                      className="text-gray-800 dark:text-white"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/library"
                      className="text-gray-800 dark:text-white"
                    >
                      Library
                    </Link>
                    <Link
                      to="/resources"
                      className="text-gray-800 dark:text-white"
                    >
                      Resources
                    </Link>
                    <Link
                      to="/pro-version"
                      className="text-gray-800 dark:text-white"
                    >
                      Pro Version
                    </Link>
                  </div>
                  {/* ... other links/columns ... */}
                </div>
              )}
            </li>
            <li>
              <Link to="/team" className="text-gray-800 dark:text-white">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 dark:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
