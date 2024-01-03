import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="white backdrop-blur-lg p-4">
        <nav>
          <ul className="flex flex-row justify-center  space-x-12 content-center">
            <li className="transition duration-700 ease-in-out rounded-lg hover:bg-lime-700 hover:text-gray-200 px-5 py-2">
              About
            </li>
            <li className="transition duration-700 ease-in-out rounded-lg hover:bg-lime-700 hover:text-gray-200 px-5 py-2">
              Services
            </li>
            <li className="transition duration-700 ease-in-out rounded-lg hover:bg-lime-700 hover:text-gray-200 px-5 py-2">
              Gallery
            </li>
            <li className="transition duration-700 ease-in-out rounded-lg hover:bg-lime-700 hover:text-gray-200 px-5 py-2">
              Blog
            </li>
            <li className="transition duration-700 ease-in-out rounded-lg hover:bg-lime-700 hover:text-gray-200 px-5 py-2">
              Store
            </li>
            <li className="transition duration-700 ease-in-out rounded-lg hover:bg-lime-700 hover:text-gray-200 px-5 py-2">
              Contact Us
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
