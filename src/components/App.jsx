import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Intro/>
      <Skills/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
