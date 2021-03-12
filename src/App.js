import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Intro from './pages/intro/Intro'
import Projects from './pages/projects/Projects'
import Personal from './pages/personal/Personal'
import { ThemeProvider } from './ThemeContext'


function App() {
  
  return (
    <Router>
      <ThemeProvider  >
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
