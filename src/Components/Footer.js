import React from "react";
import "../StylingSheets/main.scss";
import ThemeDropDown from "./ThemeDropDown";
import LinkedIn from "./SVGs/LinkedIn";
import GitHub from "./SVGs/GitHub";
import IconDiv from "./IconDiv";

const Footer = () => {
  return (
    <>
      <div className="footerDiv">
        <IconDiv url="https://www.linkedin.com/in/michael-cheung-dev/">
          <LinkedIn height='2rem' width='2rem' />
        </IconDiv>
        <IconDiv url="https://github.com/Michaelreforged">
          <GitHub height='2rem' width='2rem' />
        </IconDiv>
        <ThemeDropDown />
      </div>
    </>
  );
};

export default Footer;
