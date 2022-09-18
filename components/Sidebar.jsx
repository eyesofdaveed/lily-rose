import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { slide as Menu } from "react-burger-menu";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import { flowersOptions, servicesOptions } from "./constants";
import { Dropdown } from "./Navbar";

export default (props) => {
  const { setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      {...props}
      left
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <nav>
        <ul className="navbar-menu sidebar-menu">
          <Dropdown
            label="Flowers"
            options={flowersOptions}
            onClose={closeSideBar}
          />
          <Dropdown
            label="Services"
            options={servicesOptions}
            onClose={closeSideBar}
          />
          <AnchorLink href={`#catalog`} offset="70">
            <li className="navbar-menu-item" onClick={closeSideBar}>
              Funeral
            </li>
          </AnchorLink>
          <AnchorLink href={`#about`} offset="70">
            <li className="navbar-menu-item" onClick={closeSideBar}>
              About us
            </li>
          </AnchorLink>
          <AnchorLink href={`#contacts`} offset="70">
            <li className="navbar-menu-item" onClick={closeSideBar}>
              Contacts
            </li>
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
    </Menu>
  );
};
