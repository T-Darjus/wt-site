import React from "react";
import "./about.css";
import aboutText from "./aboutText";

const About = ({ language }) => {
  let textLang = aboutText[language];
  return (
    <div className="content__box">
      <div className="about__card">
        <h3 className="about__card-heading heading">{textLang.about}</h3>
        <p className="about__card-description">{textLang.aboutText}</p>
      </div>
      <div className="about__card">
        <h3 className="about__card-heading heading">{textLang.vision}</h3>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">{textLang.visionText}</p>
        </div>
      </div>
      <div className="about__card">
        <h3 className="about__card-heading heading">{textLang.mission}</h3>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">{textLang.missionText}</p>
        </div>
      </div>
      <div className="about__card">
        <h3 className="about__card-heading heading">{textLang.value}</h3>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">{textLang.valueTeam}</p>
        </div>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">{textLang.valuePartner}</p>
        </div>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">{textLang.valueInnovation}</p>
        </div>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">{textLang.valueEnvironment}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
