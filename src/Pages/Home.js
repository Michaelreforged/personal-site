import React from "react";
import { data } from "../Data/github_projects";
import '../StylingSheets/project.sass'

const Home = () => {
  const renderProjects = () =>{
    return data.map((project)=>(
      <div className={`project${project.id}`} key={project.id}>
        <h2>{project.name}</h2>
        <hr/>
        <div className={`description${project.id}`}>
          <p>{project.desciption}</p>
        </div>
        <hr/>
        <a href={project.link}>Link to Repo</a>
        <br/>
        {project.isLive?<a href={project.link}>Link to Repo</a>: null}
      </div>
    ))
  }
  return(
    <>
      <h1> Welcome to Michael Cheung's Portfolio Site.</h1>
      <h1> Projects and GitHub Repos</h1>
      <div className="containerDiv">
        {renderProjects()}
      </div>
    </>
  )
};

export default Home;
