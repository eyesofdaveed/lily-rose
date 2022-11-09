import React from "react";
import {
  AiFillInstagram,
  AiFillPhone,
  AiFillEnvironment,
  AiFillFacebook,
} from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <h2 style={{ cursor: "default" }} className="topbar-desc">
        Premium Flowers Delivery
      </h2>
      <div className="topbar-icons">
        <a
          target="_blank"
          className="topbar-icon-container"
          href="https://www.facebook.com/profile.php?id=100086456916896"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
          <span className="topbar-desc">Facebook</span>
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
          href="https://www.instagram.com/lily_rose_bay_area/"
        >
          <AiFillInstagram />
          <span className="topbar-desc">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
