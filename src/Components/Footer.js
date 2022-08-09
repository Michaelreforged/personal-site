import React from "react";
import "../StylingSheets/main.scss"
import ThemeDropDown from "./ThemeDropDown";
import External from "../Components/external";


const Footer = () => {
  return (
    <>
      <div className="footerDiv">
      <a className="link" href='https://github.com/Michaelreforged'>GitHub <External/></a>
      <a className="link" href='https://www.linkedin.com/in/michael-cheung-dev/'>LinkedIn <External/></a>
        <ThemeDropDown/>
      </div>
    </>
  );
};

export default Footer;
