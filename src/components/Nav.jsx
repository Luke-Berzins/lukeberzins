import React from 'react';
import { useTheme, useCatTheme } from '../ThemeContext'
import {
  NavLink, useHistory
} from "react-router-dom";
import './Nav.scss'

export default function Nav() {
  const history = useHistory()
  const theme = useTheme()
  const cat = useCatTheme()

  return (
      <div className={theme}>
        <nav>
          <div className="navbar-container">
            <div className="cool-guy" onClick={() => history.push('/')}>
              {cat ? <img alt='kittypic' src='meow.ico'></img> : <h1>Luke Berzins</h1>}
            </div>
            <div className='navfunctions'>
              <div className="site-nav">
                <NavLink className="navLink" to="/">{cat ? 'meow' : 'home'}</NavLink>
                <NavLink className="navLink" to="/projects">{cat ? 'meow' : 'projects'}</NavLink>
                <NavLink className="navLink" to="/personal">{cat ? 'meow' : 'personal'}</NavLink>
            </div>
          </div>
        </div>
        </nav>
      </div>
  );
}

