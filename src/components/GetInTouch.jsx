import React from 'react';
import styled from 'styled-components';
import MessageButton from './MessageButton';

const Contact = styled.div`
    
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #f9f7f7;
color: #112d4e;
padding-bottom: 25px;

h3 {
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
  margin: 0 auto;
  font-family: 'Roboto Slab', serif;
  font-size: 1.25rem;
  padding-bottom: 15px;
  line-height: 1.6;
}

hr {
  border: dotted 6px;
  border-bottom: none;
  width: 5%;
  margin: 50px auto;
}

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

    @media screen and (max-width:1024px) {
        h4 {
            width: 65%;
        }
        
        p {
            width: 65%;
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