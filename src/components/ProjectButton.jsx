import React from 'react';
import styled from 'styled-components';

const ProjectB = styled.div`
    
    .project-b {
        display: block;
        margin: 20px auto;
        padding: 5px 15px;
        text-decoration: none;
        letter-spacing: 1px;
        font-family: 'Roboto Slab', serif;
        text-transform: uppercase;
        border-radius: 25px;
        background-color: #112d4e;
        color: #dbe2ef;
        transition: 0.5s ease;
        box-shadow: 2px 2px;
    }

    .project-b:hover {
        background-color: #3f72af;
        color: #112d4e;
    }

    .fa-envelope {
        padding: 10px;
    }
`;

function ProjectButton(props) {
    return (
        <ProjectB className="message-box home-main">
            <a className="project-button" href={props.hostURL}>
                    View on {props.host} <i className={props.iClassName}></i>
                </a>
        </ProjectB>
    );
}

export default ProjectButton;