import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="content__box">
      <div className="services__textbox">
        <div className="services__card">
          <h3 className="services__card-heading heading">Services</h3>
          <p className="services__card-description mb12">
            Wego transport provides high quality full cargo transportation and
            storage services:
          </p>
          <div className="services__card-textbox">
            <img src="img/check-icon.png" alt="check icon" />
            <p className="services__card-description">
              Full cargo transportation in tent trailers.
            </p>
          </div>
          <div className="services__card-textbox">
            <img src="img/check-icon.png" alt="check icon" />
            <p className="services__card-description">
              Full cargo transportation in refrigerator semi-trailers (from -25C
              to +25 C).
            </p>
          </div>
          <div className="services__card-textbox">
            <img src="img/check-icon.png" alt="check icon" />
            <p className="services__card-description">
              Short-term/long term storage and cargo handling services in the
              Netherlands (Rotterdam).
            </p>
          </div>
          <p className="services__card-description mt15">Our fleet:</p>
        </div>
      </div>
      <div className="services__fleet">
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/frigo.png"
            alt="frigo cargo truck"
          />
          <p className="services__card-description">Frigo trailers</p>
          <p className="services__card-description">Capacity: up to 22 t</p>
          <p className="services__card-description">
            Dimensions of the cargo-space: 13.4 m x 2.7 m
          </p>
        </div>
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/curtainsider.png"
            alt="curtainsider cargo truck"
          />
          <p className="services__card-description">Curtainsider</p>
          <p className="services__card-description">
            Capacity: up to 25 t, 83 – 90 m3
          </p>
          <p className="services__card-description">
            Dimensions of the cargo-space: 13.6 m x 2.7 m
          </p>
        </div>
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/mega.png"
            alt="mega cargo truck"
          />
          <p className="services__card-description">Mega</p>
          <p className="services__card-description">
            Capacity: up to 22 t, 100 m3
          </p>
          <p className="services__card-description">
            Dimensions of the cargo-space: 13.6 m x 2.97 m
          </p>
        </div>
        <div className="fleet__card">
          <img
            className="mb15"
            src="img/services/trucks/road-train.png"
            alt="roadtrain cargo truck"
          />
          <p className="services__card-description">Road train</p>
          <p className="services__card-description">
            Capacity: up to 22 t, 117 m3
          </p>
          <p className="services__card-description">
            Dimensions of the cargo-space: 7.3 m x 3.0 m & 8.2 m x 3.0 m
            (trailer)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
