import React from "react";

import Product from "./Product";
import { Dropdown } from "./Navbar";
import { flowersOptions, servicesOptions } from "./constants";
import { useStateContext } from "../context/StateContext";

const Catalog = ({ products }) => {
  const { selectedCategory } = useStateContext();

  return (
    <div className="catalog-container" id="catalog">
      <div className="catalog-filters">
        <nav>
          <ul className="navbar-menu catalog-navbar-menu">
            <Dropdown label="Flowers" options={flowersOptions} />
            <Dropdown label="Services" options={servicesOptions} />
          </ul>
        </nav>
      </div>

      <h1 className="category-filter-label">{selectedCategory.label}</h1>
      <div className="products-container">
        {products?.map((product) => {
          if (product.category === selectedCategory.value) {
            return <Product key={product._id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Catalog;
