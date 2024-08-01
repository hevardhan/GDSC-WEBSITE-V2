import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex flex-col items-center navigation">
      <ul className="list-none p-0">
        <li className="my-2 text-center sm:text-left">
          <a href="#home" className="text-white hover:text-gray-300 text-sm sm:text-sm md:text-base leading-tight">
            HOME
          </a>
        </li>
        <li className="my-2 text-center sm:text-left">
          <a href="#about" className="text-white hover:text-gray-300 text-sm sm:text-sm md:text-base leading-tight">
            ABOUT
          </a>
        </li>
        <li className="my-2 text-center sm:text-left">
          <a href="#team" className="text-white hover:text-gray-300 text-sm sm:text-sm md:text-base leading-tight">
            MEET THE TEAM
          </a>
        </li>
        <li className="my-2 text-center sm:text-left">
          <a href="#events" className="text-white hover:text-gray-300 text-sm sm:text-sm md:text-base leading-tight">
            EVENTS
          </a>
        </li>
        <li className="my-2 text-center sm:text-left">
          <a href="#join" className="text-white hover:text-gray-300 text-sm sm:text-sm md:text-base leading-tight">
            JOIN US
          </a>
        </li>
        <li className="my-2 text-center sm:text-left">
          <a href="#contact" className="text-white hover:text-gray-300 text-sm sm:text-sm md:text-base leading-tight">
            CONTACT US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
