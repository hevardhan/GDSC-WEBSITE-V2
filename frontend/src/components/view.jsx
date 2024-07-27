import React from "react";
import "../view.css";
const view = () => {
  return (
    <button class="learn-more">
      <span aria-hidden="true" class="circle">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text font-sans">View More</span>
    </button>
  );
};

export default view;
