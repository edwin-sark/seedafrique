import React from "react";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="p-6">
          <ul className="flex flex-row justify-center  space-x-12 content-center">
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:bg-lime-800 hover:text-gray-200 p-1.5">
              About
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:bg-lime-800 hover:text-gray-200 p-1.5">
              Services
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:bg-lime-800 hover:text-gray-200 p-1.5">
              Gallery
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:bg-lime-800 hover:text-gray-200 p-1.5">
              Blog
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:bg-lime-800 hover:text-gray-200 p-1.5">
              Store
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:bg-lime-800 hover:text-gray-200 p-1.5">
              Contact Us
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
