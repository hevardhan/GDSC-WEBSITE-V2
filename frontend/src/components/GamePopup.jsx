import React from 'react';
import '../GamePopup.css';

const GamePopup = ({ closePopup }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = './popupGameScript.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="game-popup-overlay">
      <div className="game-popup-content">
        <button className="close-btn" onClick={closePopup}>
          &times;
        </button>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">GDSC</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Google Developer Student Club SIT</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="game-container">
          <div className="game-wrap">
            <canvas id="game" width="960" height="540"></canvas>
            <article className="game-content">
              <h1 className="game-title">
                <span>Color Blast</span>
              </h1>
              <p className="game-text">Use the <code className="game-code">Left</code> and <code className="game-code">Right</code> arrows or <code className="game-code">A</code> and <code className="game-code">D</code> keys to move, <code className="game-code">Spacebar</code> to shoot.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePopup;