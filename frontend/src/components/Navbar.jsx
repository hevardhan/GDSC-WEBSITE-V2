import React, { useState, useEffect } from 'react';
import LOGO from "../assets/photos/gdsc.png";
import Menu from './Menu'; // Import the Menu component

const Navbar = ({ onHomeClick }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({ top: '0' });
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setNavbarStyle({ top: '-100px' }); // Hides the Navbar on scroll down
    } else {
      setNavbarStyle({ top: '0' }); // Shows the Navbar on scroll up
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div
        id="navbar"
        style={{
          ...navbarStyle,
          transition: 'top 0.3s',
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-black flex justify-between items-center px-4 md:px-10 py-3"
      >
        <a href="#home" onClick={onHomeClick} className="flex items-center gap-4">
          <img className="w-16 md:w-20 lg:w-24" src={LOGO} alt="GDSC Logo" />
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white">GDSC</h1>
        </a>
        <button className="flex-shrink-0" onClick={toggleMenu}>
          <span className="button_top font-michrome">Menu</span>
        </button>
      </div>
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
