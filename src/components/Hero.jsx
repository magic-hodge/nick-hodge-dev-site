import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #dbe2ef;
    color: #112d4e;
    background-image: url("https://www.transparenttextures.com/patterns/60-lines.png");
    height: 500px;

    h1 {
        margin: 0 auto;
        margin-top: 10px;
        font-size: 5rem;
    }

    h2 {
        margin: 0 auto;
        margin-top: 10px;
        font-size: 2.5rem;
        font-family: 'Josefin Sans', sans-serif;

    }

    img {
        height: 250px;
        width: 250;
        margin: 0 auto;
        border-radius: 50%;
    }
`;

function Hero() {
    return (
        <Main>
            <img src={require("../images/headshot_cropped.jpg")}></img>
            <h1>I'm Nick.</h1>
            <h2>a developer.</h2>
        </Main>
    );
}

export default Hero;