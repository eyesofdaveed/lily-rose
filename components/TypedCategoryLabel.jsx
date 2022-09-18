import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypedCategoryLabel = ({ label }) => {
  const [category, setCategory] = useState(label);
  const sequence = [`${category}`, 1500];
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={sequence}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      wrapper="h1" // Animation will be rendered as a <span>
      className="category-filter-label"
    />
  );
};

export default TypedCategoryLabel;
