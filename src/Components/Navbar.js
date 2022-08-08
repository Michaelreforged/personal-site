import React from "react";
import Footer from "./Footer"
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "../StylingSheets/main.scss"

const Navbar = () => {
  return (
    <div className="main theme-onix">
      <div className="navDiv">
        <Link className="link" to="/">Home</Link>
        <a className="link" href='https://github.com/Michaelreforged'>GitHub</a>
        <Link className="link" to="/demos">Demos</Link>
        <Link className="link" to="/about">About</Link>
      </div>
      <div className="outletDiv">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Navbar;
