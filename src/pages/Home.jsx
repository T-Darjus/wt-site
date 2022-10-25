import React from "react";
import Slider from "../components/slider/Slider";
import Partners from "../components/partners/Partners";

const Home = ({ language }) => {
  return (
    <div>
      <Slider language={language} />
      <Partners language={language} />
    </div>
  );
};

export default Home;
