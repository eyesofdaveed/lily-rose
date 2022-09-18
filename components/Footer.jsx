import React from "react";
import {
  AiFillInstagram,
  AiFillPhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>{currentYear} Lily-Flowers All rights reserverd</p>
      <p className="icons">
        <a
          target="_blank"
          className="topbar-icon-container"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
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
      </p>
    </div>
  );
};

export default Footer;
