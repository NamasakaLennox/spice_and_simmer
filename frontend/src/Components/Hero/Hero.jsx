import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div id="top-image-part">
      <div className="top-bg"></div>
      <h1>Perfectly Light In Every Bite</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
        libero tellus, sed eleifend augue.
      </p>
      <img
        className="fruit-for-top"
        src="https://github.com/Hizam-M/public-images/blob/main/Untitled-1.png?raw=true"
        alt="fruits"
      />
      <img
        className="fruit-for-top600"
        src="https://github.com/Hizam-M/public-images/blob/main/Untitled-2221.png?raw=true"
        alt="fruits"
      />
      <div id="action">
        <a href="#">
          <div id="action-button">Get Started</div>
        </a>
        <p> Get 3 Month Recipe Book For Free</p>
      </div>
    </div>
  );
};
