import React from "react";
import { Outlet } from "react-router";
import { MainDiv } from "./StyledDivs";
import {StyledNLink, NavDiv} from "./NavStyling"

const Navbar = () => {
  return (
    <>
      <NavDiv>
        <StyledNLink to="/">Home</StyledNLink>
        <StyledNLink to="/github">GitHub</StyledNLink>
        <StyledNLink to="/about">About</StyledNLink>
      </NavDiv>
      <MainDiv>
        <Outlet />
      </MainDiv>
    </>
  );
};

export default Navbar;
