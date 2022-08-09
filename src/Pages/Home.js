import React from "react";
import { data } from "../Data/github_projects";
import "../StylingSheets/main.scss";
import External from "../Components/external";

const Home = () => {
  const renderProjects = () => {
    return data.map((project) => (
      <div className={`projectDiv`} key={project.id}>
        <h2>{project.name}</h2>
        <hr />
        <div className={`description`}>
          <p>{project.desciption}</p>
        </div>
        <hr />
        <a href={project.link}>Link to Repo <External/></a>
        <br />
        {project.isLive ? (
          <a href={project.link}>Link to Live Site on Heroku <External/></a>
        ) : null}
      </div>
    ));
  };
  return (
    <>
      <h1> Welcome to Michael Cheung's Portfolio Site.</h1>
      <hr />
      <p>
        {" "}
        Please see below for some of the projects that I have worked on/is
        currently working on. Demos are currently in progess but will be filled
        out with react components to do stuff.
      </p>
      <h1> Projects and GitHub Repos</h1>
      <div className="containerDiv">{renderProjects()}</div>
    </>
  );
};

export default Home;
