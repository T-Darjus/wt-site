import React from "react";
import "./pageHeader.css";

const PageHeader = (props) => {
  return (
    <div className="page__header">
      <div className="page__header-wrapper">
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};

export default PageHeader;
