// src/components/Menu.jsx
import React from 'react';

const Menu = ({ isVisible, onClose }) => {
    const handleItemClick = () => {
        // Close the menu when an item is clicked
        onClose();
      };
  return (
    <div
      className={`z-50 fixed rounded-s-3xl top-0 right-0 h-full w-1/4 bg-white shadow-lg transition-transform ${
        isVisible ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      style={{ transition: 'transform 0.5s ease-in-out' }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-red-500 text-2xl"
        aria-label="Close menu"
      >
        &times; {/* "X" mark */}
      </button>
      <div className="p-4">
        <h2 className="text-6xl font-bold mb-10">Menu</h2>
        <ul className="space-y-4">
          <li><a href="#home" className="text-lg text-gray-800" onClick={handleItemClick}>Home</a></li>
          <li><a href="#about" className="text-lg text-gray-800" onClick={handleItemClick}>About</a></li>
          <li><a href="#team" className="text-lg text-gray-800" onClick={handleItemClick}>Team</a></li>
          <li><a href="#events" className="text-lg text-gray-800" onClick={handleItemClick}>Events</a></li>
          <li><a href="#join" className="text-lg text-gray-800" onClick={handleItemClick}>Join</a></li>
          <li><a href="#contact" className="text-lg text-gray-800" onClick={handleItemClick}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
