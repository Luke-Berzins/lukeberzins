import React from "react"
import ProjectItem from "./ProjectItem"
import "./Projects.scss"
import { useTheme } from '../../ThemeContext'


export default function Projects(props) {
  const theme = useTheme()

  return (
    <div className={theme}>
      <div className="projects-body">
        <div className="projects-intro">
          <h1>Luke's Projects</h1>
        </div>
        <div className="project-item-holder">
        <ProjectItem 
          className=""
          name="Reflexion"
          picture=""
          description="Uses voice Recognition with Tensorflow and google's  Teachable Machine"
          git="www."
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          className=""
          name="Jungle"
          picture=""
          description="Built on Rails"
          git=""
          site=""
          display=""
          stack=""
        />
         <ProjectItem 
          className=""
          name="Interview Scheduler"
          picture=""
          description="Make an appoinment!"
          git=""
          site=""
          display=""
          stack=""
        />
         <ProjectItem 
          className=""
          name="Sneek"
          picture=""
          description="Online Shoe Store"
          git=""
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          className=""
          name="Tweeter"
          picture=""
          description="Online Shoe Store"
          git=""
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          className=""
          name="TinyApp"
          picture=""
          description="Online Shoe Store"
          git=""
          site=""
          display=""
          stack=""
        />
        </div>
      </div>
      <div className="finalfill"></div>

    </div>
  )
}