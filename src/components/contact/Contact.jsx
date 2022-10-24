import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="content__box">
      <h3 className="contact__heading heading">Contact</h3>
      <p className="contact__phone">
        Tel. +370 699 97679 <strong>|</strong> Email:{" "}
        <a title="info@wegotransport.com" href="mailto:info@wegotransport.com">
          info@wegotransport.com
        </a>
      </p>
      <div className="contact__textbox">
        <p className="contact__text">Wego transport, UAB</p>
        <p className="contact__text">
          Address: Laisves pr. 77E, LT-06155 Vilnius
        </p>
        <p className="contact__text">Company code: 302442803</p>
        <p className="contact__text">
          VAT code: LT100004943510Bank: SEB BANKAS
        </p>
        <p className="contact__text">Acc. No.: LT377044060007323417</p>
        <p className="contact__text">Bank code: 70440</p>
        <p className="contact__text">Swift code: CBVILT2X</p>
      </div>
    </div>
  );
};

export default Contact;
