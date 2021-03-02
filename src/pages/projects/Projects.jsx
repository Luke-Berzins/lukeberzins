import React from "react"
import ProjectItem from "./ProjectItem"
import "./Projects.scss"
import { useTheme, useCatTheme } from '../../ThemeContext'


export default function Projects(props) {
  const theme = useTheme()
  const cat = useCatTheme()

  return (
    <div className={theme}>
      <h1>
        I am projects
      </h1>
      <div className="project-item-holder">
      <ProjectItem 
        className=""
        name="Reflexion"
        picture=""
        description="Uses voice Recognition with Tensorflow and google's Teachable Machine"
      />
      <ProjectItem 
        className=""
        name="Interview Scheduler"
        picture=""
        description="Make an appoinment!"
      />
      </div>
      <div className="finalfill"></div>
    </div>
  )
}