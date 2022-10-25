import React from "react";
import img from "../images/blue-sky.jpg";
import Services from "../components/services/Services";
import PageHeader from "../components/pageHeader/PageHeader";
import Panel from "../components/panel/Panel";

const PageServices = ({ language }) => {
  return (
    <div className="services">
      <div className="main-container">
        <PageHeader src={img} alt={"picture of blue sky"} />
        <div className="content">
          <Services language={language} />
          <aside>
            <Panel language={language} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PageServices;
