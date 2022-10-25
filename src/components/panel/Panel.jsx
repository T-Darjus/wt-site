import React from "react";
import "./panel.css";
import Partners from "../partners/Partners";
import Quotes from "../quotes/Quotes";

const Panel = ({ language }) => {
  return (
    <div className="panel">
      <div className="panel__top">
        <Quotes language={language} />
        <img src="img/strongest-2013.jpg" alt="Strongest in Lithuania" />
      </div>
      <Partners language={language} />
    </div>
  );
};

export default Panel;
