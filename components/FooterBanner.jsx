import React from "react";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <h3>{midText}</h3>
          <p>{desc}</p>
          <a href="tel:6502658941" target="_blank" rel="noopener noreferrer">
            <button type="button">{buttonText}</button>
          </a>
        </div>
      </div>
      <img src={urlFor(image)} className="footer-banner-image" />
    </div>
  );
};

export default FooterBanner;
