import React, { useContext } from 'react';
import { useTheme, useThemeUpdate } from '../ThemeContext'
import {
  Link
} from "react-router-dom";
import './Nav.scss'

export default function Nav() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = darkTheme ? 'dark' : 'default'

  return (
      <div className={themeStyles}>
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
            <button onClick={toggleTheme}>Hi</button>
            </li>
          </ul>
        </nav>
      </div>
  );
}

