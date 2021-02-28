import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Personal from './pages/personal/Personal'
import Theme from './context/Theme'

export const ThemeContext = React.createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prev => !prev)
  }

  return (
    <Router>
      <ThemeContext.Provider value={darkTheme} >
      <Nav />
        <Switch>
          <Route path="/projects">
          <Theme toggleTheme={toggleTheme}/>
            <Projects />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
