// src/components/Menu.jsx
import React from 'react';

const Menu = ({ isVisible, onClose }) => {
  return (
    <div
      className={`z-50 fixed top-0 right-0 h-full w-full bg-white shadow-lg transition-transform ${
        isVisible ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      style={{ transition: 'transform 0.5s ease-in-out' }}
    >
      <button onClick={onClose} className="p-4 text-red-500">Close</button>
      <div className="p-4">
        <h2 className="text-lg font-bold">Menu</h2>
        {/* Add menu items here */}
      </div>
    </div>
  );
};

export default Menu;
