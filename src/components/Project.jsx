import React from 'react';
import styled from 'styled-components';
import ProjectButton from './ProjectButton';

const Proj = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-top: 20px;
    background-color: #f9f7f7;
    color: #112d4e;
    padding-bottom: 25px;

    h3 {
        padding-top: 15px;
        margin: 20px auto;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 2rem;
    }

    h4 {
        margin: 20px auto;
        font-family: 'Roboto Slab', serif;
        font-size: 1.35rem;
    }

    p {
        width: 50%;
        margin: 0 auto;
        font-family: 'Roboto Slab', serif;
        font-size: 1.25rem;
        padding-bottom: 15px;
        line-height: 1.6;
    }

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

    .project-title {
        margin: 0 auto;
    }

    .project-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 200px;
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
        
        h4 {
            width: 80%;
        }

        p {
            width: 80%;
        }

        hr {
            width: 10%;
        }

        .project-title {
            width: 80%;
        }

    }
`;

function Project(props) {
    return (
        <Proj classNamee="project">
            <img src={props.imageURL} alt={props.imageURL}/>
            <h3 className="project-title">{props.title}</h3>
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