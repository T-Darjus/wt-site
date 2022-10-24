import React from "react";
import "./panel.css";
import Partners from "../partners/Partners";
import Quotes from "../quotes/Quotes";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel__top">
        <Quotes />
        <img src="img/strongest-2013.jpg" alt="Strongest in Lithuania" />
      </div>
      <Partners />
    </div>
  );
};

export default Panel;
