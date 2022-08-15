import React from "react";
import "../StylingSheets/main.scss";
import ThemeDropDown from "./ThemeDropDown";
import LinkedIn from "./SVGs/LinkedIn";
import GitHub from "./SVGs/GitHub";
import {IconDiv} from "./StyleDivs";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <IconDiv url="https://www.linkedin.com/in/michael-cheung-dev/">
          <LinkedIn/>
        </IconDiv>
        <IconDiv url="https://github.com/Michaelreforged">
          <GitHub/>
        </IconDiv>
        <ThemeDropDown />
      </div>
    </>
  );
};

export default Footer;
