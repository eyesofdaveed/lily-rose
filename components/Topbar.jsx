import React from "react";
import {
  AiFillInstagram,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <p className="topbar-desc">Express Flowers Delivery</p>
      <div className="topbar-icons">
        <div className="topbar-icon-container">
          <AiFillEnvironment />
          <span className="topbar-desc">Sunnyvale, California</span>
        </div>
        <div className="topbar-icon-container">
          <AiFillPhone />
          <span className="topbar-desc">(415)012-1212</span>
        </div>
        <div className="topbar-icon-container">
          <AiFillInstagram />
          <span className="topbar-desc">LilyRoseFlowers</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
