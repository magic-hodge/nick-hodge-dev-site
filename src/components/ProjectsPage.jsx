import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import GetInTouch from './GetInTouch';
import {Projects} from './Projects';
import Project from './Project';

function ProjectsPage() {
  return (
    <div className="projects-page">
      {/* {Projects.map((projectItem, index) => {
        return (
          <Project
          key={index}
          id={index}
          title={projectItem.title}
          techStack={projectItem.techStack}
          description={projectItem.description}
          host={projectItem.host}
          hostURL={projectItem.hostURL}
          imageURL={projectItem.imageURL} />
        );
      })} */}

      <img src={require("../images/DominosApp.PNG")} alt='test'/>

      <GetInTouch/>
    </div>
  );
}

export default ProjectsPage;
