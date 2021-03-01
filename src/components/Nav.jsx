import React from 'react';
import { useTheme, useThemeUpdate, useCatTheme, useCatUpdate } from '../ThemeContext'
import {
  Link
} from "react-router-dom";
import './Nav.scss'

export default function Nav() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  const cat = useCatTheme()
  const toggleCat = useCatUpdate()

  return (
      <div className={theme}>
        <nav>
          <div className="navbar-container">
            <div className="cool-guy">
              {cat ? <img alt='kittypic' src='meow.ico'></img> : <h1>Luke Berzins</h1>}
            </div>
            <div className='navfunctions'>
              <div className="site-nav">
                <Link className="navLink" to="/">{cat ? 'meow' : 'home'}</Link>
                <Link className="navLink" to="/projects">{cat ? 'meow' : 'projects'}</Link>
                <Link className="navLink" to="/personal">{cat ? 'meow' : 'personal'}</Link>
              </div>
              <div className="nav-buttons">
                <button onClick={() => toggleTheme('default')}>Normal Mode</button>
                <button onClick={() => toggleTheme('dark')}>Dark Mode</button>
                <button onClick={() => toggleTheme('party')}>Party Mode</button>
                <button onClick={() => toggleCat()}>CAT MODE</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

