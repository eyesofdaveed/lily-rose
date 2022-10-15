import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { flowersOptions, servicesOptions } from "./constants";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <Image
            src="/main-logo.png"
            alt="Lily-Rose Flowers"
            width="160"
            height="80"
          />
        </Link>
      </p>

      {!isMobile && (
        <>
          <nav>
            <ul className="navbar-menu">
              <Dropdown label="Flowers" options={flowersOptions} />
              <Dropdown label="Services" options={servicesOptions} />
              <AnchorLink href={`#funeral`} offset="60">
                <li className="navbar-menu-item">Funeral</li>
              </AnchorLink>
              <AnchorLink href={`#about`} offset="60">
                <li className="navbar-menu-item">About us</li>
              </AnchorLink>
              <AnchorLink href={`#contacts`} offset="60">
                <li className="navbar-menu-item">Contacts</li>
              </AnchorLink>
            </ul>
          </nav>
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </>
      )}

      {showCart && <Cart />}
    </div>
  );
};

export const Dropdown = ({ label, options, onClose }) => {
  const { setCategory } = useStateContext();
  const [show, setShow] = useState(false);
  return (
    <div className="dropdown-menu-container" style={{ position: "relative" }}>
      <label
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {label}
      </label>
      {show && (
        <div
          className="dropdown-options-container"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {options.map((option) => {
            return (
              <AnchorLink
                offset="70"
                href="#catalog"
                className="dropdown-menu-item"
                key={option.value}
                value={option.value}
                onClick={() => {
                  setCategory(option);
                  setShow(false);
                }}
              >
                {option.label}
              </AnchorLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
