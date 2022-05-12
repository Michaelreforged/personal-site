import React from "react";
import { Outlet } from "react-router";
import { MainDiv } from "./StyledDivs";
import { Link } from "react-router-dom";
import "../StylingSheets/nav.sass"

const Navbar = () => {
  return (
    <>
      <div className="navDiv">
        <Link className="link" to="/">Home</Link>
        <a className="link" href='https://github.com/Michaelreforged'>GitHub</a>
        <Link className="link" to="/about">About</Link>
      </div>
      <MainDiv>
        <Outlet />
      </MainDiv>
    </>
  );
};

export default Navbar;
