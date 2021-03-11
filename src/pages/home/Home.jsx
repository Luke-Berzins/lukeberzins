import React from "react"
import './Home.scss'
import Nav from '../.././components/Nav'
import { useTheme, useThemeUpdate, useCatTheme, useCatUpdate } from '../../ThemeContext'
import {
  NavLink
} from "react-router-dom";
export default function Home(props) {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  const cat = useCatTheme()
  const toggleCat = useCatUpdate()

  return (
    <div>
      <Nav />
    <div className={theme}>
      <div className='body-container'>
        <div className="personal-block">
          <div className="theme-buttons">
                    <button className="btn btn--stripe" onClick={() => toggleTheme('default')}  >Normal Mode</button>
                    <button className="btn btn--stripe" onClick={() => toggleTheme('dark')} >Dark Mode</button>
                    <button className="btn btn--stripe" onClick={() => toggleTheme('party')}  >Party Mode</button>
                    <button className="btn btn--stripe" onClick={() => toggleCat()}>{cat ?  'please click' : 'do not click'}</button>
          </div>
          {cat ? <img alt="good-looking-dude" className="home-pic" src="kitty/kitty-main.jpeg"></img> : <img alt="good-looking-dude" className="home-pic" src="me.jpeg"></img>}
        </div>
        <div className="personal-text">
        {cat ? <p>Hello good friends. I'm fatcat. Everything Luke owns is mine and now this website is mine. You can still click around to see some projects and learn more about my servant, but know the content has changed.</p> : <p> I'm Luke Berzins, a Junior Web Developer. I like learning new things and making cool stuff happen. Everything on this site I made myself, with no templates (although I do know how to use them). Click below or use the nav bar.</p>}
        </div>
      <div className="extra-links">
      <h3><NavLink className="navLink" to="/">{cat ? 'meow' : 'home'}</NavLink></h3>
      <h3><NavLink className="navLink" to="/projects">{cat ? 'meow' : 'projects'}</NavLink></h3>
      <h3><NavLink className="navLink" to="/personal">{cat ? 'meow' : 'personal'}</NavLink></h3>
        </div>
      </div>
     
    </div>
    </div>
  )
}