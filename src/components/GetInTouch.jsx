import React from 'react';
import styled from 'styled-components';
import MessageButton from './MessageButton';

const Contact = styled.div`
    
    padding-bottom: 25px;

    @media screen and (max-width:768px) {
        h4 {
            width: 75%;
        }
        
        p {
            width: 75%;
        }

        hr {
            width: 10%;
            margin: 25px auto;
        }
    }
`;

function GetInTouch() {
    return (
        <Contact className="home-main">
            <h3>
                Get In Touch.
            </h3>
            <h4>
                I'm currently available for full-time positions & freelance work.
            </h4>
            <p>
                If you'd like to discuss a position, start a project, or chat about Web Dev & Circus, shoot me a message!
            </p>
            <MessageButton/>
        </Contact>
    );
}

export default GetInTouch;