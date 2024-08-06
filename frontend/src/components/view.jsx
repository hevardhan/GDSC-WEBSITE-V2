import React from "react";
import "../view.css";
const view = () => {
  return (
    <a href="/events">
    <button className="learn-more">
      <span aria-hidden="true" className="circle">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text font-sans">View More</span>
    </button>
    </a>
  );
};

export default view;
