import React from 'react';
import styled from 'styled-components';
import {Projects} from './Projects';
import Project from './Project';

const ProjectsArea = styled.div`
    

    .projects-area {
        
    }

    img {
      margin: 0 auto;
      margin-bottom: 10px;
      width: 500px;
      border-radius: 25px;
    }

    @media screen and (max-width:768px) {
        img {
            width: 300px;
        }

        hr {
            width: 15%;
        }
    }

`;

function ProjectsBlock() {
  return (
    <ProjectsArea className="projects-area home-main">
      {Projects.map((projectItem, index) => {
        return (
          <Project
          key={index}
          id={index}
          className="project-item"
          title={projectItem.title}
          techStack={projectItem.techStack}
          description={projectItem.description}
          host={projectItem.host}
          hostURL={projectItem.hostURL}
          imageURL={require(`../images/${projectItem.imageURL}`)} />
        );
      })}
    </ProjectsArea>
  );
}

export default ProjectsBlock;