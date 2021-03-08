import React from 'react'
import { useCatTheme } from '../../ThemeContext'
import './ProjectItem.scss'

export default function ProjectItem(props) {
  const cat = useCatTheme()

  return (
    <div className="project-item-body">
      <div className={props.theme}>
        <div className="project-card">
          <div className="mobile-title" id="mobile-title">
            <h4>{props.name}</h4>
            <a href={props.git} target="_blank" rel="noreferrer">{props.git ?   <p>Github</p> : null}</a>
            <a href={props.site} target="_blank" rel="noreferrer">{props.site ?   <p>Live site</p> : null}</a>
            </div>
          <div className="slider">
           <h4>{props.name}</h4>
          <div className="web-links">
            <a href={props.git} target="_blank" rel="noreferrer">{props.git ?   <p>Github</p> : null}</a>
            <a href={props.site} target="_blank" rel="noreferrer">{props.site ?   <p>Live site</p> : null}</a>
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
