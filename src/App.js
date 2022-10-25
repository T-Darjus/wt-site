import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PageServices from "./pages/PageServices";
import PageRoutes from "./pages/PageRoutes";
import PageContact from "./pages/PageContact";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes as RoutWraper,
  Route,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [language, setLanguage] = useState(0);
  return (
    <Router>
      <div className="languages">
        <div className="main-container">
          <div className="languages__container">
            <button onClick={() => setLanguage(0)}>EN</button>
            <button onClick={() => setLanguage(1)}>LT</button>
            <button onClick={() => setLanguage(2)}>PL</button>
          </div>
        </div>
      </div>
      <Navbar language={language} />
      <RoutWraper>
        <Route path={"/"} exact element={<Home language={language} />} />
        <Route path={"/about"} element={<AboutUs language={language} />} />
        <Route
          path={"/services"}
          element={<PageServices language={language} />}
        />
        <Route path={"/routes"} element={<PageRoutes language={language} />} />
        <Route
          path={"/contact"}
          element={<PageContact language={language} />}
        />
      </RoutWraper>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        top="200"
        style={{ backgroundColor: "transparent" }}
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        }
      />
      <Footer language={language} />
    </Router>
  );
}

export default App;
