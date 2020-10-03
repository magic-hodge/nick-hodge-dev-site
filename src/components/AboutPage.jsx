import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import GetInTouch from './GetInTouch';
import AboutBlock from './AboutBlock';

function AboutPage() {
  return (
    <div className="About-Page">
      <AboutBlock/>
      <GetInTouch/>
    </div>
  );
}

export default AboutPage;
