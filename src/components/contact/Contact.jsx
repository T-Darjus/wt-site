import React from "react";
import "./contact.css";
import contactText from "./contactText";

const Contact = ({ language }) => {
  let textLang = contactText[language];

  return (
    <div className="content__box">
      <h3 className="contact__heading heading">{textLang.heading}</h3>
      <p className="contact__phone">
        Tel. +370 699 97679 <strong>|</strong> Email:{" "}
        <a title="info@wegotransport.com" href="mailto:info@wegotransport.com">
          info@wegotransport.com
        </a>
      </p>
      <div className="contact__textbox">
        <p className="contact__text">{textLang.wego}</p>
        <p className="contact__text">{textLang.address}</p>
        <p className="contact__text">{textLang.code}</p>
        <p className="contact__text">{textLang.vat}</p>
        <p className="contact__text">{textLang.bank}</p>
        <p className="contact__text">{textLang.acc}</p>
        <p className="contact__text">{textLang.bankCode}</p>
        <p className="contact__text">{textLang.swift}</p>
      </div>
    </div>
  );
};

export default Contact;
