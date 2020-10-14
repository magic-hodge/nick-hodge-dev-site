import React from 'react';
import styled from 'styled-components';

const Introduction = styled.div`

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

    @media screen and (max-width:1024px) {
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
        <Introduction className="home-main">
            <h3>Hello!</h3>
            <p>
                I'm a Web Developer based in Las Vegas, NV and I love to create. Utilizing my skills in web development has helped me grow as an indiviual, improved my web-presence as a performer, and saved me countless hours. I'd like to help you too!
            </p>
            <hr/>
        </Introduction>
    );
}

export default Intro;