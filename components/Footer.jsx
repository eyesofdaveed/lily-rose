import React from 'react';
import { AiFillInstagram, AiFillPhone, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Lily-Flowers All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillPhone />
        <AiOutlineWhatsApp />
      </p>
    </div>
  )
}

export default Footer