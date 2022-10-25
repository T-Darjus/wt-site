import "./navbar.css";
import navbarText from "./navbarText";
import menu from "../assets/menu-icon.svg";
import close from "../assets/menu-close.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  let navLang = navbarText[language];

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
                {navLang.home}
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
                {navLang.about}
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
                {navLang.services}
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
                {navLang.routes}
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
                {navLang.contact}
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
