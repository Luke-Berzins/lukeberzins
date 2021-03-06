import React from "react"
import './Home.scss'
import { useTheme, useThemeUpdate, useCatTheme, useCatUpdate } from '../../ThemeContext'
import {
  NavLink, useHistory
} from "react-router-dom";
export default function Home(props) {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  const cat = useCatTheme()
  const toggleCat = useCatUpdate()

  return (
    <div className={theme}>
      <div className='body-container'>
        <div className="personal-block">
          <div className="theme-buttons">
                    <button className="btn btn--stripe" onClick={() => toggleTheme('default')}  >Normal Mode</button>
                    <button className="btn btn--stripe" onClick={() => toggleTheme('dark')} >Dark Mode</button>
                    <button className="btn btn--stripe" onClick={() => toggleTheme('party')}  >Party Mode</button>
                    <button className="btn btn--stripe" onClick={() => toggleCat()}>{cat ?  'please click' : 'do not click'}</button>
          </div>
          {cat ? <img alt="good-looking-dude" src="kitty/kitty-main.jpeg"></img> : <img alt="good-looking-dude" src="me.jpeg"></img>}
        </div>
        <div className="personal-text">
        {cat ? <p>Hello good friends. I'm fatcat and I like to eat. Everything Luke owns is mine and now this website is mine. You can still click around to see some projects and learn more about my servant.</p> : <p>Hello good friends. I'm Luke and I like learning new things and making cool stuff happen. This is my website where you can get an idea of who I am. See portfolio to see some of the stuff I've done, and see my personal page to learn more about me. I've added some options so you can personalize your experience on my personal website. Click below or use the nav bar.</p>}
        </div>
      <div className="extra-links">
        <h3><NavLink className="navLink" to="/">home</NavLink></h3>
        <h3><NavLink className="navLink" to="/projects">projects</NavLink></h3>
        <h3><NavLink className="navLink" to="/personal">personal</NavLink></h3>
        </div>
      </div>
      <div className="finalfill"></div>
    </div>
  )
}