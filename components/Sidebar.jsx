import React from "react";
import Link from "next/link";
import { elastic as Menu } from "react-burger-menu";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import { flowersOptions, servicesOptions } from "./constants";
import { Dropdown } from "./Navbar";

export default (props) => {
  const { setShowCart, totalQuantities } = useStateContext();

  return (
    <Menu {...props} left>
      <nav>
        <ul className="navbar-menu sidebar-menu">
          <Dropdown label="Flowers" options={flowersOptions} />
          <Dropdown label="Services" options={servicesOptions} />
          <Link href={`#funeral`}>
            <li className="navbar-menu-item">Funeral</li>
          </Link>
          <Link href={`#about`}>
            <li className="navbar-menu-item">About us</li>
          </Link>
          <Link href={`#contacts`}>
            <li className="navbar-menu-item">Contacts</li>
          </Link>
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
    </Menu>
  );
};
