import React from 'react';
import styled from 'styled-components';

const About = styled.div`

.about-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
}

h3, p {
    width: 70%;
    margin: 
}

hr {
    border: dotted 6px;
    border-bottom: none;
    width: 5%;
    margin: 50px auto;
}

img {
    height: 400px;
    width: 400px;
    margin: 50px 50px 0px 200px;
    border-radius: 50%;
}

`;

function AboutBlock() {
    return (
        <About className="home-main">
            <div className="about-box"> 
                <img src={require("../images/thinker_cropped1.jpg")} alt='headshot_cropped.jpg'/>
                <div className="about-text">
                    <h3>About.</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at erat nisl. Curabitur at nisl non nulla malesuada blandit. Fusce blandit ante nec leo facilisis, nec ultrices neque iaculis. In vestibulum eget tellus et pellentesque. Ut at luctus felis, vitae fermentum urna. Praesent ullamcorper luctus velit volutpat luctus. Fusce libero libero, vestibulum et est id, rhoncus iaculis elit.

Vivamus fringilla a urna vel posuere. Sed efficitur id dolor eu vehicula. Sed ullamcorper augue velit, in volutpat lorem porttitor quis. Nam efficitur eros sit amet mauris molestie pretium ac a urna. Donec odio libero, iaculis ac suscipit at, molestie at metus. Phasellus vitae purus pharetra, iaculis mi sit amet, tincidunt massa. Proin sed enim in lorem ultrices commodo.                    </p>
                </div>
            </div>
            <hr/>
        </About>
    );    
}

export default AboutBlock;