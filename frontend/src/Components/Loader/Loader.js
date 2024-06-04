import React from "react";
import "./Loader.css"; // Import the CSS file where you define your styles

const Loader = () => {
  return (
    <div className="newtons-cradle-container">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
