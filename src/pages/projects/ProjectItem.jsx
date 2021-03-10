import React from 'react'
import { useCatTheme, useTheme } from '../../ThemeContext'
import './ProjectItem.scss'

export default function ProjectItem(props) {
  const cat = useCatTheme()
  const theme = useTheme()

  return (
    <div className="project-item-body">
      <div className={theme}>
        <div className="project-card">
            <div className="mobile-title" id="mobile-title">
              <h4>{props.name}</h4>
              <a href={props.git} target="_blank" rel="noreferrer">{props.git ?   "Github" : null}</a>
              <a href={props.site} target="_blank" rel="noreferrer">{props.site ?   "Live site" : null}</a>
            </div>
          <div className="slider">
            <h4>{props.name}</h4>
              <div>
                <h4 className={theme === 'party' ? "arty1" : "none"}>Load!</h4>
                <h4 className={theme === 'party' ? "arty2" : "none"}>Fire!</h4>
              </div>
            <div className="web-links" id="web-links">
              <a href={props.git} target="_blank" rel="noreferrer">{props.git ?   "Github": null}</a>
              <a  href={props.site} target="_blank" rel="noreferrer">{props.site ?   "Live site": null}</a>
            </div>
          </div>
        <div className="projectInfo">
        </div>
      </div>
        <div className="desc-container">
          <img alt="project-img" className="project-img" src={props.picture}></img>
          <p>{cat ? props.catDesc : props.description}</p>
        </div>
    </div>
    <br></br> 
    </div>
  )
}
