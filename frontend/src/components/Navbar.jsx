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
      setNavbarStyle({ top: '-100px' });
    } else {
      setNavbarStyle({ top: '0' });
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
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
        className="flex justify-between items-center px-10 pt-5 fixed w-full z-50 bg-black"
      >
        <a href="#home" onClick={onHomeClick}>
        <div className='flex items-center gap-4'>
        <img className="w-[75px] flex-shrink-0" src={LOGO} alt="GDSC Logo" />
        <h1 className='text-white text-3xl'>GDSC</h1>
        </div>
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
