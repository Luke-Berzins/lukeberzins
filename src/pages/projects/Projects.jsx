import React from "react"
import ProjectItem from "./ProjectItem"
import "./Projects.scss"
import { useTheme, useCatTheme } from '../../ThemeContext'

export default function Projects(props) {
  const theme = useTheme();
  const cat = useCatTheme();

  return (
    <div className={theme}>
      <div className="projects-body">
        <div className="projects-intro">
          <h1>Luke's Projects</h1>
        </div>
        <div className={cat ? "kitty" : "none"}>
        <img id="floofboi" alt="good-looking-dude" src="kitty/other-main.jpeg"></img> 
          <p className="floof-text">I am floofboi. My job is to ensure Luke vacuums 5 times a day. I have revised Luke's descriptions to an acceptable standard.</p>
        </div>
        <div className="project-item-holder">
        <ProjectItem 
          name="​🧘‍​ Reflexion 🧘‍♂️"
          picture="projectsImg/builder2.png"
          description="Reflexion is a home yoga app which puts the power of yoga in your hands. Users are free to build their own yoga sequences with an intuitive drag-and-drop interface, guided into each pose with their webcam as a mirror, and can control the app with voice commands captured by Tensorflow.js and interpreted by Google's Teachable Machine."
          catDesc="I use this website for my largest stretches and the voice recognition can even hear meows."
          git="https://github.com/Luke-Berzins/Reflexion"
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          name="🍃 Jungle 🍃"
          picture="projectsImg/jungle.jpg"
          description="An e-commerce site built with Ruby on Rails. Users can add or remove items from their cart, see their total and pay for their order using their credit card. Products can be marked available or sold out, and administrators can organize items in categories."
          catDesc="My nick-name in high school was the Jungle King. Luke grinded this project in Ruby on Rails just as I used to grind rails at the cat skate park. The cat skate park is my idea and my patent is pending."
          git="https://github.com/Luke-Berzins/Jungle"
          site=""
          display=""
          stack=""
        />
         <ProjectItem 
          name="🕚  Interview Scheduler 🕚"
          picture="projectsImg/interview-scheduler.png"
          description="This was my first introduction to React. Built with an Express.js backend that acts as in intermediary for a PostGres database, it helped me to understand the power of incremental building. I was also introduced to the concept of Test-Driven-Development, using Jest, Storybook and Cypress to test different features of the website. If you visit the live site please give the Heroku database a second to send the initial data."
          catDesc="This is where I schedule to start screaming for kibbles at 4am."
          git="https://github.com/Luke-Berzins/Interview-Scheduler"
          site="https://elegant-blackwell-57bd5a.netlify.app/"
          display=""
          stack=""
        />
         <ProjectItem 
          name="Sneek"
          picture="projectsImg/tinyapp.png"
          description="This 👟  retail store is built with jQuery, EJS and Express. I was able to deep-dive into EJS when I implemented the site's chat function, which I'm particularly proud of. Although it may not have been optimal, my solution to create a user to user chat function on the site here unique, creative and most importantly, it taught me a lot."
          catDesc="No shoes in cat size...yet."
          git="https://github.com/Luke-Berzins/LighthouseMarketplace-Buy-Sell-Listing-Website"
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          name="Tweeter"
          picture="projectsImg/tinyapp.png"
          description="Tweeter is, as you might have guessed, a Twitter clone. Built with HTML, JavaScript, and JQuery, Tweeter was a fun learning project which also introduced us to important principles like responsive design."
          catDesc="If there wasn't a window between me and this bird you'd see some action."
          git="https://github.com/Luke-Berzins/tweeter"
          site=""
          display=""
          stack=""
        />
        <ProjectItem 
          name="TinyApp"
          picture="projectsImg/tinyapp.png"
          description="App where I was introduced to account and user handling. Built with EJS it allows users to securely handle their profile. It also introduced me to the implementation of cookies 🍪."
          catDesc="Luke's first project, I sat watching him the whole time. The. Whole. Time."
          git="https://github.com/Luke-Berzins/tinyapp"
          site=""
          display=""
          stack=""
        />
        </div>
      </div>
    </div>
  )
}