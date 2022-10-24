import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PageServices from "./pages/PageServices";
import PageRoutes from "./pages/PageRoutes";
import PageContact from "./pages/PageContact";
import {
  BrowserRouter as Router,
  Routes as RoutWraper,
  Route,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <Navbar />
      <RoutWraper>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/about"} element={<AboutUs />} />
        <Route path={"/services"} element={<PageServices />} />
        <Route path={"/routes"} element={<PageRoutes />} />
        <Route path={"/contact"} element={<PageContact />} />
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
      <Footer />
    </Router>
  );
}

export default App;
