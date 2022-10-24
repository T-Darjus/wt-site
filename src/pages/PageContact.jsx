import React from "react";
import img from "../images/skyscraper-glass-wall.jpg";
import Contact from "../components/contact/Contact";
import PageHeader from "../components/pageHeader/PageHeader";
import Panel from "../components/panel/Panel";

const PageContact = () => {
  return (
    <div className="contact">
      <div className="main-container">
        <PageHeader src={img} alt={"picture of glass skyscraper"} />
        <div className="content">
          <Contact />
          <aside>
            <Panel />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
