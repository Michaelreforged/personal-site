import React from "react";
import { PillDiv } from "../Components/StyleDivs";
import { data } from "../Data/github_projects";
import "../StylingSheets/main.scss";

const Projects = () => {
  const renderProjects = () => {
    return data.map((project) => (
      <div className={`projectDiv`} key={project.id}>
        <h2>{project.name}</h2>
        <hr />
        <div>
          <p>{project.desciption}</p>
        </div>
        <hr />
        <div style={{display:"flex",flexDirection:"row",width:"fit-content"}}>
          <PillDiv url={project.link}>Link to Repo</PillDiv>
          {project.isLive ? (
            <PillDiv url={project.link}>Link to Live Site on Heroku</PillDiv>
          ) : null}
        </div>
      </div>
    ));
  };
  return (
    <>
      <h1> Projects and GitHub Repos</h1>
      <hr />
      <p>
        Please see below for some of the projects that I have worked on/is
        currently working on. Demos are currently in progess but will be filled
        out with react components to do stuff.
      </p>
      <div className="containerDiv">{renderProjects()}</div>
    </>
  );
};

export default Projects;
