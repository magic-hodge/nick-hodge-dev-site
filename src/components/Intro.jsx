import React from 'react';
import styled from 'styled-components';

const Introduction = styled.div`

    h3 {
        padding-top: 15px;
    }

    p {
        width: 50%;
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
        <Introduction className="home-main">
            <h3>Hello!</h3>
            <p>
                I'm a Web Developer based in Las Vegas, NV and I love to create. Utilizing these skills has helped me grow as an indiviual, improved my web-presence as a performer, and saved me countless hours. I'd like to help you too!
            </p>
            <hr/>
        </Introduction>
    );
}

export default Intro;