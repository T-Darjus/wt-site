import "./navbar.css";
import menu from "../assets/menu-icon.svg";
import close from "../assets/menu-close.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <div className="navigation__container main-container">
          <a href="http://www.wegotransport.com/" className="logo">
            <img src="img/logo.png" alt="logo" />
          </a>
          <ul className={isOpen ? "navigation__list open" : "navigation__list"}>
            <li className="navigation__link">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/about"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About Us
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/services"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/routes"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Routes
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/contact"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className="mobile__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              className={isOpen ? "hidden" : undefined}
              src={menu}
              alt="menu icon"
            />
            <img
              className={!isOpen ? "hidden" : undefined}
              src={close}
              alt="close menu icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
