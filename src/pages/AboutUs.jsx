import React from "react";
import img from "../images/skyscraper-glass-wall.jpg";
import About from "../components/about/About";
import PageHeader from "../components/pageHeader/PageHeader";
import Panel from "../components/panel/Panel";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="main-container">
        <PageHeader src={img} alt={"picture of glass skyscraper"} />
        <div className="content">
          <About />
          <aside>
            <Panel />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
