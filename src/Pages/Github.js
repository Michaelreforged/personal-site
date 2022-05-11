import React from "react";
import { data } from "../Data/github_projects";
const GitHub = () => {

  const renderProjects = () =>{
    return data.map((project)=>(
      <div key={project.id}>
        <h2>{project.name}</h2>
      </div>
    ))
  }

  return(
    <div>
      <h1> Projects and GitHub Repos</h1>
      <div style={{display:'flex'}}>
      {renderProjects()}
      </div>
    </div>
  )
};

export default GitHub;
