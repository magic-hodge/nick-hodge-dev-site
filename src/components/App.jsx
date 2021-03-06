import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import '../styletest.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" exact component={AboutPage} />
            <Route path="/projects" exact component={ProjectsPage} />
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
