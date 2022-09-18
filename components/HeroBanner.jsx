import React from "react";
import AnimatedBg from "react-animated-bg";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  let bannerTextSequence = [];
  heroBanner.largeTextList.split(" ").forEach((text) => {
    bannerTextSequence.push(text);
    bannerTextSequence.push(2000);
  });

  return (
    <AnimatedBg
      className="hero-banner-container"
      colors={["#a8dadc", "#ffafcc", "#457b9d"]}
      duration={3}
      delay={0}
      timingFunction="ease-out"
    >
      <img
        src={urlFor(heroBanner.image)}
        alt="flowers bouquet hand to hand delivery"
        className="hero-banner-image"
      />
      <h3>{heroBanner.midText}</h3>
      <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={bannerTextSequence}
        speed={60} // Custom Speed from 1-99 - Default Speed: 40
        wrapper="h1" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
      <div className="desc">
        <h5>Description</h5>
        <p>Finest Flowers</p>
      </div>
      <AnchorLink href={`#catalog`} offset="70">
        <button type="button">Browse</button>
      </AnchorLink>
    </AnimatedBg>
  );
};

export default HeroBanner;
