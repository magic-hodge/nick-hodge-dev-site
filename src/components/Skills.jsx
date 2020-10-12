import React from 'react';
import styled from 'styled-components';

const SkillBox = styled.div`

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

    .dev-skills {
        
    }

    .misc-skills {

    }

    .skill-box {
        width: 50%;
        margin: 0 auto;
    }

    .img-icon {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .tech-icons {
        margin: 0px auto;
        padding: 0px;
        width: 50%;
    }

    .fab, .fas {
        width: 75px;
        font-size: 50px;
        padding: 10px;
        transition: 0.3s ease;
    }

    /* Individual Icons. */

    .fa-bootstrap {

    }

    .fa-css3-alt {
        
    }

    .fa-github-icon {

    }

    .fa-html5 {
        
    }

    .fa-js {
        
    }

    .fa-node {
        
    }

    .fa-npm {
        
    }

    .fa-python {

    }
    
    .fa-react {
        
    }

    .fa-database {

    }

    .fa-squareqpace {

    }

    .fa-wordpress-simple {
        
    }

    /* Hover effects. */

    .fa-bootstrap:hover {
        color: #7952b3;
    }
    
    .fa-css3-alt:hover {
        color: #264de4;
    }

    .fa-github:hover {
        color: #000000;
    }

    .fa-html5:hover {
        color: #f06529;
    }

    .fa-js:hover {
        color: #F0DB4F;
    }

    .fa-node:hover {
        color: #3c873a;
    }

    .fa-npm:hover {
        color: #CC3534;
    }

    .fa-python:hover {
        color: #FFD43B;
    }

    .fa-react:hover {
        color: #61DBFB;
    }

    .fa-database:hover {
        color: #00758F;
    }
    .fa-squarespace:hover {
        color: #000000;
    }

    .fa-wordpress-simple:hover {
        color: #21759b;
    }

    @media screen and (max-width:768px) {

        hr {
            width: 10%;
            margin: 25px auto;
        }

        .skill-box {
            width: 75%;
            margin: 0 auto;
        }

        .fab, .fas {
            width: 75px;
            font-size: 50px;
            padding: 10px;
            transition: 0.3s ease;
        }

        .tech-icons {
            display: block;
            width: 75%;
        }
    }

    @media screen and (max-width:1024px) {
        hr {
            width: 10%;
            margin: 25px auto;
        }

        .skill-box {
            width: 75%;
            margin: 0 auto;
        }

        .fab, .fas {
            width: 75px;
            font-size: 50px;
            padding: 10px;
            transition: 0.3s ease;
        }

        .tech-icons {
            display: block;
            width: 75%;
        }
    }
`;

function Skills() {
    return (
        <SkillBox className="home-main">
            <h3>
                My Skills.
            </h3>
            <div className="tech-icons">
                <i className="fab fa-bootstrap"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-js"></i>
                <i className="fab fa-node"></i>
                <i className="fab fa-npm"></i>
                <i className="fab fa-python"></i>
                <i className="fab fa-react"></i>
                <i className="fas fa-database"></i>
                <i className="fab fa-squarespace"></i>
                <i className="fab fa-wordpress-simple"></i>
            </div>
            <div className='dev-skills skill-box'>
                <h4>
                    Design & Development.
                </h4>
                <p>
                    Whether it's a portfolio website or a single-page web-application, I can help. If we need
                    back-end and database functionality, we've got taht covered as well. Even if it's customizing
                    a template on Squarespace or WordPress, I'm happy to work with you! Some of my skills include the following:
                    HTML, CSS, JavaScript, Bootstrap, Github, Node, React, NPM, Python, SQL, MongoDB, Webpack, etc. - and I'm always learning more.
                </p>
            </div>
            <img
                className="img-icon"
                id="headSupport"
                src={require("../images/cyr_headSupport2.jpg")}
                alt="cyr_headSupport.jpg"
            />
            <div className="misc-skills skill-box">
                <h4>
                    Cyr Wheel.
                </h4>
                <p>
                    But my best skill is performing Cyr Wheel. I travel around the world to spin, flip, & twist in a 6-foot-tall,
                    steel ring. I've performed for corporate events, the NBA, art museums, state fairs, and I've even been recognized by Cirque du Soleil!
                </p>
            </div>
            <hr/>
        </SkillBox>
    );
}

export default Skills;