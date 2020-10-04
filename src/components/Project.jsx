import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Project(props) {
    return (
        <div classNamee="project">
            <img src={require(`${props.imageURL}`)} alt={props.imageURL}/>
            <h3>{props.title}</h3>
            <h4>{props.techStack}</h4>
            <p>{props.description}</p>
            <Zoom in={true}>
                <Fab type="submit"><a href={props.hostURL}>View on {props.host}</a></Fab>
            </Zoom>
        </div>
    );
}

export default Project;