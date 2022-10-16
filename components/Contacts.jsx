import React from "react";
import Ticker from "react-ticker";
import Image from "next/image";

import { urlFor } from "../lib/client";

const servingAreas = [
  "Sunnyvale",
  "Santa Clara",
  "Mt. View",
  "San Jose",
  "Milpitas",
  "Saratoga",
  "Cupertino",
  "Los Gatos",
  "Los Altos",
  "Los Altos Hills",
  "Palo Alto",
  "Menlo Park",
  "Atherton",
  "Monte Sereno",
  "Stanford",
];

const Contacts = () => {
  return (
    <div className="contact-wrapper" id="contacts">
      <div className="contact-description">
        <h2>Who We Are</h2>
        <p>
          We expertise in delivering fresh flower bouquets, luxury bouquets,
          flowers in boxes, flowers in vases, sympathy flowers, anniversary
          bouquets, marriage proposal bouquets, wedding bouquets, baby shower
          flowers, event flowers in vases, and funeral flowers. We are always
          more than happy to answer for any questions or request you may have:
        </p>
        <div className="contact-grid-wrapper">
          <div className="contact-grid-box">
            <div className="contact-icon-box">
              <Image
                src="/phone-message.png"
                alt="call message lily rose flowers delivery"
                width="40"
                height="40"
              />
            </div>
            <a className="contact-box-button" href="tel:6502658941">
              Call Us
            </a>
          </div>
          <div className="contact-grid-box">
            <div className="contact-icon-box">
              <Image
                src="/real-estate.png"
                alt="lily-rose-flowers delivery address in sunnyvale"
                width="40"
                height="40"
              />
            </div>
            <a className="contact-box-button" href="tel:6502658941">
              Location
            </a>
          </div>
          <div className="contact-grid-box">
            <div className="contact-icon-box">
              <Image
                src="/instagram.png"
                alt="instagram pictures online flowers delivery"
                width="40"
                height="40"
              />
            </div>
            <a className="contact-box-button" href="tel:6502658941">
              Instagram
            </a>
          </div>
          <div className="contact-grid-box">
            <div className="contact-icon-box">
              <Image
                src="/facebook.png"
                alt="facebook contact online flowers and bouquets delivery"
                width="40"
                height="40"
              />
            </div>
            <a className="contact-box-button" href="tel:6502658941">
              Facebook
            </a>
          </div>
        </div>
        <h2 style={{ fontSize: "30px", marginBottom: "24px" }}>
          We Proudly Serve
        </h2>
        <Ticker speed={3} offset={130} mode="chain">
          {() => (
            <div className="contact-ticker-box">
              {servingAreas.map((area) => (
                <h3 key={area} className="contact-ticker-item">
                  {area}
                </h3>
              ))}
            </div>
          )}
        </Ticker>
      </div>
    </div>
  );
};

export default Contacts;
