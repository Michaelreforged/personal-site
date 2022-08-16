import React, { useContext } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "../StylingSheets/main.scss";
import { ThemeContext } from "../Providers/ThemeProvider";
import ThemeDropDown from "./ThemeDropDown";
import { IconDiv } from "./StyleDivs";
import GitHub from "./SVGs/GitHub";
import Resume from "../Data/Michael_Cheung_Resume.pdf";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="theme" className={`theme-${theme}`}>
      <div className="main">
        <div className="navDiv">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/demos">
            Demos
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <a className="link" target="blank" href={Resume}>
            Resume
          </a>
          <IconDiv url="https://github.com/Michaelreforged">
            <GitHub />
          </IconDiv>
          <ThemeDropDown />
        </div>
        <div className="outletDiv">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
