import React from 'react'
import { useTheme, useCatTheme } from '../../ThemeContext'
import './ProjectItem.scss'

export default function ProjectItem(props) {
  const theme = useTheme()
  const cat = useCatTheme()
  return (
    <div className="project-item-body">
      <div className={theme}>
        <div className="project-card">
        <div className="slider">
         <h4>{props.name}</h4>
        </div>
      <div className="projectInfo">
        <div>
          <a href={props.git}>{props.git ? <h5>Github: {props.name}</h5> : null}</a>
          <a href={props.site}>{props.site ? <h5>Live site: {props.site}</h5> : null}</a>
        </div>
      </div>
      </div>
        <div className="desc-container">
          <img alt="project-img" src={props.picture}></img>
          <p>{props.description}</p>
        </div>
    </div>
    <br></br> 
    </div>
  )
}
