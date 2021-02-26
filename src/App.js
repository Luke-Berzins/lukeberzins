import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <Nav />
          <Route path="/">
          </Route>
        <Switch>
          <Route path="/projects">
          </Route>
          <Route path="/personal">
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
