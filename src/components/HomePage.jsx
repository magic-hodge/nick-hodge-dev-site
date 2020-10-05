import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import GetInTouch from './GetInTouch';

function HomePage() {
  return (
      <div className="Home-Page">
        <Hero/>
        <Intro/>
        <Skills/>
        <GetInTouch/>
      </div>
  );
}

export default HomePage;
