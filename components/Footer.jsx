import React from "react";
import {
  AiFillInstagram,
  AiFillPhone,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>{currentYear} Lily-Rose-Flowers. All rights reserved.</p>
      <p className="icons">
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="https://www.instagram.com/lily_rose_bay_area/"
        >
          <AiFillInstagram />
        </a>
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="tel:6502658941"
        >
          <AiFillPhone />
        </a>
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="tel:6502658941"
        >
          <AiOutlineWhatsApp />
        </a>
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=100086456916896"
        >
          <AiFillFacebook />
        </a>
      </p>
    </div>
  );
};

export default Footer;
