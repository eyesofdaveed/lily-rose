import React from "react";

import { urlFor } from "../lib/client";

const About = ({ data }) => {
  return (
    <div className="about-us-container" id="about">
      <div className="about-us-left-column">
        <img src={urlFor(data?.image[0])} className="about-us-image" />
        <h3 className="about-us-greeting">{data.greeting}</h3>
      </div>
      <div className="about-us-right-column">
        <h2 className="about-us-heading">{data.heading}</h2>
        <p className="about-us-desc">{data.desc}</p>
      </div>
    </div>
  );
};

export default About;
