import React from "react";
import img from "../images/skyscraper-glass-wall.jpg";
import About from "../components/about/About";
import PageHeader from "../components/pageHeader/PageHeader";
import Panel from "../components/panel/Panel";

const AboutUs = ({ language }) => {
  return (
    <div className="about">
      <div className="main-container">
        <PageHeader src={img} alt={"picture of glass skyscraper"} />
        <div className="content">
          <About language={language} />
          <aside>
            <Panel language={language} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
