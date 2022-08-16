import React from "react";
import { IconDiv } from "../Components/StyleDivs";
import GitHub from "../Components/SVGs/GitHub";
import LinkedIn from "../Components/SVGs/LinkedIn";
import "../StylingSheets/main.scss"


const Home = () => {
  return(
    <div>
      <h1> Welcome to Michael Cheung's Portfolio Site.</h1>
      <hr/>
      <p>Hello, I'm Michael Cheung. I graduated from the University of Utah with a B.S. in Chemical Engineering. I learned the basics of web development thru DevPoints Labs full stack web development course. Current languages that I know are Ruby and JavaScript, with the Ruby on Rails as my stack.</p>
      <div style={{display:"flex",justifyContent:"center"}}>
      <IconDiv url={"https://github.com/Michaelreforged"}><GitHub/></IconDiv>
      <IconDiv url={"https://www.linkedin.com/in/michael-cheung-dev/"}><LinkedIn/></IconDiv>
      </div>
    </div>
  )
};

export default Home;
