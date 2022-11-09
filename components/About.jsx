import React from "react";
import Image from "next/image";

import { urlFor } from "../lib/client";

const About = ({ data }) => {
  return (
    <div className="about-us-container" id="about">
      <div className="about-us-left-column">
        <img
          src={urlFor(data?.image[0])}
          className="about-us-image"
          alt="lily-rose-flowers-bouquets-delivery"
        />
        <h3 className="about-us-greeting">{data.greeting}</h3>
      </div>
      <div className="about-us-right-column">
        <Image
          src="/love.png"
          alt="Bay Area love fresh flowers"
          width="64"
          height="64"
        />
        <h2 className="about-us-heading">{data.heading}</h2>
        <p className="about-us-desc">{data.desc}</p>
      </div>
    </div>
  );
};

export default About;
