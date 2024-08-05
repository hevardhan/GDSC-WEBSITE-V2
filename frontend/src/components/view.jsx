import React from "react";
import "../view.css";
const view = () => {
  return (
    <a href="/events">
    <button class="learn-more">
      <span aria-hidden="true" class="circle">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text font-sans">View More</span>
    </button>
    </a>
  );
};

export default view;
