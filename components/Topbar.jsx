import React from "react";
import {
  AiFillInstagram,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <h1 style={{ cursor: "default" }} className="topbar-desc">
        Premium Flowers Delivery
      </h1>
      <div className="topbar-icons">
        <a
          target="_blank"
          className="topbar-icon-container"
          href="https://www.google.com/maps/place/Sunnyvale,+CA,+USA/@37.3958499,-122.0939079,12z/data=!3m1!4b1!4m5!3m4!1s0x808fb645a9d05d3b:0x768dfb26dd7cc3a2!8m2!3d37.36883!4d-122.0363496"
          rel="noopener noreferrer"
        >
          <AiFillEnvironment />
          <span className="topbar-desc">Sunnyvale, California</span>
        </a>
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="tel:6502658941"
        >
          <AiFillPhone />
          <span className="topbar-desc">(650)265-8941</span>
        </a>
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <AiFillInstagram />
          <span className="topbar-desc">LilyRoseFlowers</span>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
