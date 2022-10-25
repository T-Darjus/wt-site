import React from "react";
import "./footer.css";
import footerText from "./footerText";

const Footer = ({ language }) => {
  let textLang = footerText[language];
  return (
    <div className="footer">
      <div className="footer__container main-container">
        <div className="footer__text">
          &copy; {new Date().getFullYear()} &nbsp; &nbsp; {textLang.copy}
        </div>
        <div className="footer__text">
          &copy; 2009-{new Date().getFullYear()} &nbsp; &nbsp; {textLang.copy}
        </div>
      </div>
    </div>
  );
};

export default Footer;
