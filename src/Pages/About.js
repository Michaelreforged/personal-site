import React from "react";
import External from "../Components/SVGs/external";
import "../StylingSheets/main.scss"


const About = () => {
  return(
    <div>
      <h1> About Page</h1>
      <p> Went to the University of Utah and got a B.S. in Chemical Engineering. Went to DevPoint Labs to learn full stack web development in Fall of 2021. Current languages known is JavaScript and Ruby. Web dev stack is currently React on Rails.</p>
      <a href='https://github.com/Michaelreforged'>GitHub <External/></a>
      <br/>
      <a href='https://www.linkedin.com/in/michael-cheung-dev/'>LinkedIn <External/></a>
    </div>
  )
};

export default About;
