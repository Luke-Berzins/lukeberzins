import React from 'react'
import { useTheme, useCatTheme } from '../../ThemeContext'
import './ProjectItem.scss'

export default function ProjectItem(props) {
  const theme = useTheme()
  const cat = useCatTheme()
  return (
    <div className="project-item-body">
      <div className={theme}>
        <div className="desc-container">
         <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
        <div className="project-card">
        <div className="slider">
        </div>
      <div className="projectInfo">
        <div>
          {props.git ? <p>Github: {props.git}</p> : <p></p>}
          {props.site ? <p>Live site:{props.site}</p> : <p></p>}
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
