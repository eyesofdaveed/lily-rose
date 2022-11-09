import React from "react";
import Link from "next/link";

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
            {/* <Dropdown label="Services" options={servicesOptions} /> */}
            <Link href={`/funeral`}>
              <li
                style={{ fontSize: "20px", color: "#1d3557" }}
                className="navbar-menu-item"
              >
                Funeral
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      <h2 className="category-filter-label">{selectedCategory.label}</h2>
      <div className="products-container">
        {products?.map((product) => {
          if (selectedCategory.value === "all") {
            return <Product key={product._id} product={product} />;
          } else if (product.category === selectedCategory.value) {
            return <Product key={product._id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Catalog;
