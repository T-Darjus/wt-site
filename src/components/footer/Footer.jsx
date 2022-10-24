import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container main-container">
        <div className="footer__text">
          &copy; {new Date().getFullYear()} &nbsp; &nbsp; All rights reserved.
        </div>
        <div className="footer__text">
          &copy; 2009-{new Date().getFullYear()} &nbsp; &nbsp; All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
