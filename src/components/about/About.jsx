import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="content__box">
      <div className="about__card">
        <h3 className="about__card-heading heading">About us</h3>
        <p className="about__card-description">
          WEGO transport is a modern company providing international freight
          transportation services in Europe.
        </p>
      </div>
      <div className="about__card">
        <h3 className="about__card-heading heading">Our vision</h3>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">
            It is open to innovation, appreciating partnership, and providing
            professional international cargo transportation services.
          </p>
        </div>
      </div>
      <div className="about__card">
        <h3 className="about__card-heading heading">Our mission</h3>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">
            To provide the highest quality transportation services in accordance
            with customer requirements and needs in order to maximize their
            satisfaction and expectations, while respecting commitments to
            suppliers and employees, and focusing on the environment protection.
          </p>
        </div>
      </div>
      <div className="about__card">
        <h3 className="about__card-heading heading">Our values</h3>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">
            Teamwork – when each member of the organization understands that the
            best results can be achieved when everyone is acting together as
            one.
          </p>
        </div>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">
            Partnerships – we are focused, we seek and develop long term
            relationships with our customers, partners, employees, and this is
            the way of our business development.
          </p>
        </div>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">
            Innovation – search for new opportunities and solutions to increase
            productivity and cost reduction by offering only the best deals to
            the customer.
          </p>
        </div>
        <div className="about__card-textbox">
          <img src="img/check-icon.png" alt="check icon" />
          <p className="about__card-description">
            Environment protection – daily operations with minimal environmental
            impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
