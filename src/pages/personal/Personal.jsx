import React from "react"
import { useTheme, useCatTheme } from "../../ThemeContext"
import Blog from "./Blog"
import "./Personal.scss"

export default function Personal(props) {
  const theme = useTheme();
  const cat = useCatTheme();

  return (
    <div className={theme}>
      <div className="personal-holder">
        <div className="personal-intro">
          <h1>Luke Berzins</h1>
          <h2>Personal Info</h2>
        </div>
        <div className="personal-info">
          <h3>lukeberzins16@gmail.com</h3>
          <h3>519-533-8637</h3>
          <h3><a href="https://github.com/Luke-Berzins">Luke's Github</a></h3>
        </div>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started my coding journey a little bit late. The amount I've learned since I started has only fueled me to learn more and become better. I am confident that with enough time I will do some really cool things, and I hope you check in the future so I can continue to share them with you. Although I wish I had found my love for code earlier in life, I spent my time beforehand fairly well in the meantime. I've driven trains for CN, sighted in artillery pieces by compass and climbed a mountain or two. If you want to read about my experience before I started coding and know more about me as a person, read below.</h2>
        <div className="blog-holder">
          <Blog 
          theme={theme}
          blogType={"normal"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most recently, I have been working as a Regional Liaison Officer for the Canadian Armed Forces. This has been a fantastic role where I have liaisoned with the great people at the Office of the Fire Marshall and Emergency Management and various Public Health units across Ontario, in order to keep our various organitzations fully coordinated as we defeat the COVID-19 pandemic."
          />
          <Blog 
          theme={theme}
          blogType={"reverse"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I heard about this role because I am an Army Reservist, specifically Artillery. I have served with the 11th Field Artillery Regiment for three and a half years and recieved some of the best experiences of my life."
          />
        </div>
      </div>
      <div className="finalfill"></div>
    </div>
  )
}