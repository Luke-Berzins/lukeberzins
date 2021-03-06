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
          picture="projectsImg/builder2.png"
          description="Reflexion is a home yoga app which puts the power of yoga in your hands. Users are free to build their own yoga sequences with an intuitive drag-and-drop interface, guided into each pose with their webcam as a mirror, and can control the app with voice commands captured by Tensorflow.js and interpreted by Google's Teachable Machine."
          git="https://github.com/Luke-Berzins/Reflexion"
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          className=""
          name="Jungle"
          picture="projectsImg/jungle.jpg"
          description="An e-commerce site built with Ruby on Rails, users can add or remove items from their cart, see their total and pay for their order using their credit card. Products can be marked available or sold out, and administrators can organize items in categories."
          git="https://github.com/Luke-Berzins/Jungle"
          site=""
          display=""
          stack=""
        />
         <ProjectItem 
          className=""
          name="Interview Scheduler"
          picture=""
          description="Make an appoinment!"
          git="https://github.com/Luke-Berzins/Interview-Scheduler"
          site="https://elegant-blackwell-57bd5a.netlify.app/"
          display=""
          stack=""
        />
         <ProjectItem 
          className=""
          name="Sneek"
          picture=""
          description="Online Shoe Store"
          git="https://github.com/Luke-Berzins/LighthouseMarketplace-Buy-Sell-Listing-Website"
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          className=""
          name="Tweeter"
          picture=""
          description="Tweeter is, as you might have guessed, a Twitter clone. Built with HTML, JavaScript, and JQuery, Tweeter was a fun learning project which also introduced us to important principles like responsive design."
          git="https://github.com/Luke-Berzins/tweeter"
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          className=""
          name="TinyApp"
          picture=""
          description="App where I was introduced to account and user handling."
          git="https://github.com/Luke-Berzins/tinyapp"
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