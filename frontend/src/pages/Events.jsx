import React, { useEffect } from 'react';
import './styles.css';

const Events = () => {
  useEffect(() => {
    const textBoxes = document.querySelectorAll(".text-box");
    
    textBoxes.forEach(box => {
      box.addEventListener("click", function() {
        const link = box.getAttribute("data-link");
        if (link) {
          window.open(link, "_blank");
        }
      });
    });
  }, []);

  return (
    <div>
      <h1 id="events" className="website-title">EVENTS</h1>
      <div className="timeline">
        <div className="container left-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="text-box" data-link="https://example.com/solution-challenge">
            <h2>SOLUTION CHALLENGE</h2>
            <small>23/2019</small>
            <img src="poster.png" alt="pn" className="image" />
          </div>
        </div>

        <div className="container right-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="text-box" data-link="https://example.com/game-development">
            <h2>GAME DEVELOPMENT</h2>
            <small>23/2019</small>
            <img src="poster.png" alt="pn" className="image" />
          </div>
        </div>

        <div className="container left-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="text-box" data-link="https://example.com/ai-healthcare">
            <h2>AI IN HEALTHCARE</h2>
            <small>23/2019</small>
            <img src="poster.png" alt="pn" className="image" />
          </div>
        </div>

        <div className="container right-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="text-box" data-link="https://example.com/flutter-workshop">
            <h2>FLUTTER WORKSHOP</h2>
            <small>23/2019</small>
            <img src="poster.png" alt="pn" className="image" />
          </div>
        </div>

        <div className="container left-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="text-box" data-link="https://example.com/study-jams">
            <h2>STUDY JAMS</h2>
            <small>23/2019</small>
            <img src="poster.png" alt="pn" className="image" />
          </div>
        </div>

        <div className="container right-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="text-box" data-link="https://example.com/android">
            <h2>ANDROID</h2>
            <small>23/2019</small>
            <img src="poster.png" alt="pn" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;