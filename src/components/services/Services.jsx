import React from "react";
import "./services.css";
import servicesText from "./servicesText";

const Services = ({ language }) => {
  let textLang = servicesText[language];
  return (
    <div className="content__box">
      <div className="services__textbox">
        <div className="services__card">
          <h3 className="services__card-heading heading">
            {textLang.services}
          </h3>
          <p className="services__card-description mb12">
            {textLang.servicesText1}
          </p>
          <div className="services__card-textbox">
            <img src="img/check-icon.png" alt="check icon" />
            <p className="services__card-description">
              {textLang.servicesText2}
            </p>
          </div>
          <div className="services__card-textbox">
            <img src="img/check-icon.png" alt="check icon" />
            <p className="services__card-description">
              {textLang.servicesText3}
            </p>
          </div>
          <div className="services__card-textbox">
            <img src="img/check-icon.png" alt="check icon" />
            <p className="services__card-description">
              {textLang.servicesText4}
            </p>
          </div>
          <p className="services__card-description mt15">{textLang.fleet}</p>
        </div>
      </div>
      <div className="services__fleet">
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/frigo.png"
            alt="frigo cargo truck"
          />
          <p className="services__card-description">{textLang.frigo}</p>
          <p className="services__card-description">{textLang.frigoCap}</p>
          <p className="services__card-description">{textLang.frigoDim}</p>
        </div>
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/curtainsider.png"
            alt="curtainsider cargo truck"
          />
          <p className="services__card-description">{textLang.curtain}</p>
          <p className="services__card-description">{textLang.curtainCap}</p>
          <p className="services__card-description">{textLang.curtainDim}</p>
        </div>
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/mega.png"
            alt="mega cargo truck"
          />
          <p className="services__card-description">{textLang.mega}</p>
          <p className="services__card-description">{textLang.megaCap}</p>
          <p className="services__card-description">{textLang.megaDim}</p>
        </div>
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/road-train.png"
            alt="roadtrain cargo truck"
          />
          <p className="services__card-description">{textLang.train}</p>
          <p className="services__card-description">{textLang.trainCap}</p>
          <p className="services__card-description">{textLang.trainDim}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
