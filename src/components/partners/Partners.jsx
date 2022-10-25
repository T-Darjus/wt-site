import React, { useState, useEffect } from "react";
import partnersText from "./partnersText";
import "./partners.css";

const Partners = ({ language }) => {
  const [moveLeft, setMoveLeft] = useState(0);
  let textLang = partnersText[language];

  if (moveLeft > 840) {
    setMoveLeft(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveLeft((prevMoveLeft) => prevMoveLeft + 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partners">
      <div className="main-container">
        <div style={{ overflow: "hidden" }} className="partners__container">
          <h3 className="heading">{textLang.heading}</h3>
          <ul
            style={{
              marginLeft: `-${moveLeft}px`,
            }}
            className="partners__list"
          >
            <li className="partners__list-item">
              <a
                href="https://www.tnt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="img/slide-icons/tnt.png" alt="TNT logo" />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="http://www.jususpurtas.lt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/JusuSpurtas_logo.png"
                  alt="Jusu spurtas logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.bureauveritas.lt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/bureau_veritas.png"
                  alt="Bureau veritas logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.wegotransport.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/it-development.png"
                  alt="IT development logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="http://www.poferrymasters.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/po-ferrymasters.png"
                  alt="PO ferrymasters logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.underwriting.lv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/underwriting.png"
                  alt="Underwriting logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.tnt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="img/slide-icons/tnt.png" alt="TNT logo" />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="http://www.jususpurtas.lt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/JusuSpurtas_logo.png"
                  alt="Jusu spurtas logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.bureauveritas.lt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/bureau_veritas.png"
                  alt="Bureau veritas logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.wegotransport.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/it-development.png"
                  alt="IT development logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="http://www.poferrymasters.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/po-ferrymasters.png"
                  alt="PO ferrymasters logo"
                />
              </a>
            </li>
            <li className="partners__list-item">
              <a
                href="https://www.underwriting.lv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/slide-icons/underwriting.png"
                  alt="Underwriting logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
