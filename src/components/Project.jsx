import React from 'react';
import styled from 'styled-components';
import ProjectButton from './ProjectButton';

const Proj = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;

    hr {
        border: dotted 6px;
        border-bottom: none;
        width: 10%;
        margin: 50px auto;
    }

    .project img {

    }
    
    .tech-stack {
    }

    .project-button {
        display: block;
        margin: 20px auto;
        padding: 12px 17px;
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

    .project-button:hover {
        background-color: #3f72af;
        color: #112d4e;
    }

    @media screen and (max-width:768px) {
        width: 75%;
    
        hr {
            width: 10%;
        }
    }
`;

function Project(props) {
    return (
        <Proj classNamee="project">
            <img src={props.imageURL} alt={props.imageURL}/>
            <h3>{props.title}</h3>
            <h4>{props.techStack}</h4>
            <p>{props.description}</p>
            <ProjectButton
                host={props.host}
                hostURL={props.hostURL}
            />
            <hr/>
        </Proj>
    );
}

export default Project;