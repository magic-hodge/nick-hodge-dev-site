import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

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
