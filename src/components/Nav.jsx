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
          <div className="navbar-item">
            <p>
              <Link to="/">{cat ? 'meow' : 'home'}</Link>
            </p>
            <p>
              <Link to="/projects">{cat ? 'meow' : 'projects'}</Link>
            </p>
            <p>
              <Link to="/personal">{cat ? 'meow' : 'personal'}</Link>
            </p>
            <div>
            <p>
            <button onClick={() => toggleTheme('default')}>Normal Mode</button>
            </p>
            <p>
            <button onClick={() => toggleTheme('dark')}>Dark Mode</button>
            </p>
            <p>
            <button onClick={() => toggleTheme('party')}>Party Mode</button>
            </p>
            <p>
            <button onClick={() => toggleCat()}>Toggle Cat</button>
            </p>
            </div>
          </div>
        </nav>
      </div>
  );
}

