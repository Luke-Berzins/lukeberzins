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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/personal">personal</Link>
            </li>
            <li>
            <button onClick={() => toggleTheme('default')}>Normal Mode</button>
            </li>
            <li>
            <button onClick={() => toggleTheme('dark')}>Dark Mode</button>
            </li>
            <li>
            <button onClick={() => toggleTheme('party')}>Party Mode</button>
            </li>
          </ul>
        </nav>
      </div>
  );
}

