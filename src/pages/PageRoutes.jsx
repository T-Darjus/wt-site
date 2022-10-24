import React from "react";
import img from "../images/blue-sky.jpg";
import PageHeader from "../components/pageHeader/PageHeader";
import Panel from "../components/panel/Panel";
import Routes from "../components/routes/Routes";

const PageRoutes = () => {
  return (
    <div className="routes">
      <div className="main-container">
        <PageHeader src={img} alt={"picture of blue sky"} />
        <div className="content">
          <Routes />
          <aside>
            <Panel />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PageRoutes;
