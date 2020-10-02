import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import GetInTouch from './GetInTouch';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

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
