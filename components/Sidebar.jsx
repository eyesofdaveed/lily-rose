import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { slide as Menu } from "react-burger-menu";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";
import { flowersOptions, servicesOptions } from "./constants";
import { Dropdown } from "./Navbar";
import { useRouter } from "next/router";

export default (props) => {
  const router = useRouter();
  const { setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setOpen] = useState(false);
  const isOnHomePage = router.route === "/";

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
      burgerButtonClassName="custom-burger-menu"
      burgerBarClassName="custom-burger-bars"
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
          <Link href={`/funeral`}>
            <li className="navbar-menu-item">Funeral</li>
          </Link>
          {isOnHomePage ? (
            <>
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
            </>
          ) : (
            <>
              <Link href={`/#about`}>
                <li className="navbar-menu-item">About us</li>
              </Link>
              <Link href={`/#contacts`}>
                <li className="navbar-menu-item">Contacts</li>
              </Link>
            </>
          )}
          <Link
            href={{
              pathname: "/terms",
            }}
          >
            <li className="navbar-menu-item">Delivery Terms</li>
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
