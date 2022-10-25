import React from "react";
import "./routes.css";
import routesText from "./routesText";

const Routes = ({ language }) => {
  let textLang = routesText[language];
  return (
    <div className="content__box">
      <h3 className="routes__heading heading">{textLang.heading}</h3>
      <img src="img/routes/routes.png" alt="map with routes" />
    </div>
  );
};

export default Routes;
