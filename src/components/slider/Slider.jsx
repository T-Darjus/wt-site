import React, { useState, useEffect } from "react";
import "./slider.css";
import sliderText from "./sliderText";

const Slider = ({ language }) => {
  const [index, setIndex] = useState(1);
  const [card1, setCard1] = useState("card--top");
  const [card2, setCard2] = useState("card--last");
  const [card3, setCard3] = useState("card--last");

  let textLang = sliderText[language];

  const prevSlide = () => {
    if (index - 1 === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (index >= 3) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    if (index === 1) {
      setCard1("card--top");
      setCard2("card--last");
      setCard3("card--last");
    }
    if (index === 2) {
      setCard1("card--last");
      setCard2("card--top");
      setCard3("card--last");
    }
    if (index === 3) {
      setCard1("card--last");
      setCard2("card--last");
      setCard3("card--top");
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= 3) {
        setIndex(0);
      }
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="slider">
      <div className="main-container">
        <div className="slider__container">
          <div className="slider__content">
            <div className={`slider__card ${card1}`}>
              <img
                src="img/home/slides/innovations.jpg"
                alt="road with cars at night"
              />
              <div className="slider__card-textbox">
                <h4 className="slider__card-heading">
                  {textLang.headingInnovation}
                </h4>
                <p className="slider__card-text">{textLang.textInnovation}</p>
              </div>
            </div>
            <div className={`slider__card ${card2}`}>
              <img src="img/home/slides/partnership.jpg" alt="sand clock" />
              <div className="slider__card-textbox">
                <h4 className="slider__card-heading">
                  {textLang.headingPartnership}
                </h4>
                <p className="slider__card-text">{textLang.textPartnership}</p>
              </div>
            </div>
            <div className={`slider__card ${card3}`}>
              <img src="img/home/slides/quality.jpg" alt="tree in a bucket" />
              <div className="slider__card-textbox">
                <h4 className="slider__card-heading">
                  {textLang.headingQuality}
                </h4>
                <p className="slider__card-text">{textLang.textQuality}</p>
              </div>
            </div>
            <div className="slider__nav">
              <button
                type="button"
                className="slider__btn btn--left"
                onClick={prevSlide}
              ></button>
              <button
                type="button"
                className="slider__btn btn--right"
                onClick={nextSlide}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// const Slider = () => {
//   return (
//     <div className="slider">
//       <div className="main-container">
//         <div className="slider__container">
//           <div className="slider__content">
//             <img src="img/home/slides/innovations.jpg" alt="road at night" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
