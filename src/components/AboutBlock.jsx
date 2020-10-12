import React from 'react';
import styled from 'styled-components';

const About = styled.div`

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f9f7f7;
  color: #112d4e;

h3 {
    width: 70%;
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
  width: 70%;
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

/* color codes...

  #f9f7f7
  #dbe2ef
  #3f72af
  #112d4e 
*/

/* Fonts. . .

	font-family: 'Patua One', cursive; 
	font-family: 'Josefin Sans', sans-serif;
  font-family: 'Roboto Slab', serif;
*/


.about-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
}



img {
    height: 400px;
    width: 400px;
    margin: 50px 50px 0px 200px;
    border-radius: 50%;
}

@media screen and (max-width:768px) {
    .about-box {
        flex-direction: column;
    }

    h3, p {
        width: 75%;
    }

    hr {
        width: 10%;
        margin: 25px auto;
    }

    img {
        height: 300px;
        width: 300px;
        margin: 50px auto;
        border-radius: 50%;
    }
}

`;

function AboutBlock() {
    return (
        <About className="about-main">
            <div className="about-box"> 
                <img src={require("../images/thinker_cropped1.jpg")} alt='headshot_cropped.jpg'/>
                <div className="about-text">
                    <h3>About.</h3>
                    <p>
                        I originally moved from Minneapolis, MN to Las Vegas, NV to pursue circus performance full-time. Shortly afterwards, I decided to learn web development to build my performance portfolio and complete my online coaching platform. I quickly realized my passion for the field because I love to create. Whether it's a performance number for an NBA half-time show or a portfolio site, I love working hard and having an excellent product to show for it.
                    </p>
                </div>
            </div>
            <hr/>
        </About>
    );    
}

export default AboutBlock;