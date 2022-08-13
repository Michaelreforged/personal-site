import React, { useContext } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "../StylingSheets/main.scss";
import { ThemeContext } from "../Providers/ThemeProvider";
import ThemeDropDown from "./ThemeDropDown";
import IconDiv from "./IconDiv";
import GitHub from "./SVGs/GitHub";

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
          <Link className="link" to="/about">
            About
          </Link>
          <IconDiv url="https://github.com/Michaelreforged">
            <GitHub height='2rem' width='2rem'/>
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
