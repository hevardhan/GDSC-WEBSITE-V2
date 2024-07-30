import React from 'react';
import '../Popup.css';  // Ensure to create appropriate styling in Popup.css

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>Popup Title</h2>
                <p>This is your Popup content!</p>
            </div>
        </div>
    );
};

export default Popup;