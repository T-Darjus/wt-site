import React from "react";
import data from "./quotesData";
import "./quotes.css";
import quotesText from "./quotesText";

const Quotes = ({ language }) => {
  let textLang = quotesText[language];
  let num = Math.floor(Math.random() * data.length);
  return (
    <div className="quotes">
      <h3 className="heading">{textLang.heading}</h3>
      <div className="quote">
        <p className="quote__text">
          <q>{data[num].quote}</q>
        </p>
        <p className="quote__author">— {data[num].author}</p>
      </div>
    </div>
  );
};

export default Quotes;
