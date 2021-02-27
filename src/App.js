import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Personal from './pages/personal/Personal'


function App() {
  return (
    <Router>
      <Nav />
        <Switch>
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
    </Router>
  );
}

export default App;
