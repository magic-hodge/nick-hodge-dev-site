import React from 'react';
import styled from 'styled-components';

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f9f7f7;
    color: #112d4e;

    h3 {
        margin: 20px auto;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 2rem;
    }

    p {
        width: 50%;
        margin: 0 auto;
        font-family: 'Roboto Slab', serif;
        font-size: 1.25rem;
    }

    hr {
        border: dotted 6px;
        border-bottom: none;
        width: 5%;
        margin: 50px auto;
    }

    @media screen and (max-width:768px) {
        p {
            width: 75%;
        }

        hr {
            width: 10%;
            margin: 25px auto;
        }

    }
`;

function Intro() {
    return (
        <Introduction>
            <h3>Hello!</h3>
            <p>
                I'm a Web Developer based in Las Vegas, NV with a passion for front-end design. I love to create, learn, and improve. I'm also a world-class circus performer!
            </p>
            <hr/>
        </Introduction>
    );
}

export default Intro;