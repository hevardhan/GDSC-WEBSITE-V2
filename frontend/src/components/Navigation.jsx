import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex flex-col items-center navigation hidden sm:block">
      <ul className="list-none p-0">
        <li className="my-2"><a href="#home" className="text-white hover:text-gray-300">HOME</a></li>
        <li className="my-2"><a href="#about" className="text-white hover:text-gray-300">ABOUT</a></li>
        <li className="my-2"><a href="#team" className="text-white hover:text-gray-300">MEET THE TEAM</a></li>
        <li className="my-2"><a href="#events" className="text-white hover:text-gray-300">EVENTS</a></li>
        <li className="my-2"><a href="#join" className="text-white hover:text-gray-300">JOIN US</a></li>
        <li className="my-2"><a href="#contact" className="text-white hover:text-gray-300">CONTACT US</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;