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
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started my coding journey a little bit late. The amount I've learned since I started coding has only fueled my desire to learn more and become better. I am confident that with enough time I will do some really cool things, and I hope you check in the future so I can continue to share them with you. Although I wish I had found my love for code earlier in life, I spent my time before fairly well. I've driven trains for Canadian National, sighted in artillery pieces by compass and climbed a mountain or two. If you want to read about my experience before I started coding and know more about me as a person, read below.</h2>
        <div className="blog-holder">
          <Blog 
          theme={theme}
          img='personalImg/lake.jpeg'
          blogType={"normal"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most recently, I have been working as a Regional Liaison Officer for the Canadian Armed Forces. This has been a fantastic role where I have liaisoned with the great people at the Office of the Fire Marshall and Emergency Management and various Public Health units across Ontario. We work together to ensure that all of our various organizations' resources are working together, and that we are constantly communicating with each other."
          />
          <Blog 
          theme={theme}
          img='personalImg/arty.jpeg'
          blogType={"reverse"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started working as a Regional Liaison Officer through my experience as an Army Reservist. I have served with the 11th Field Artillery Regiment for three and a half years and recieved some of the best experiences of my life. My training has qualified me as a Reconnaissance Officer, Command Post Officer and Gun Postition Officer. This training all took place at the Infantry School and Artillery School, under the national Combat-Training-Center in Gagetown, New Brunswick. On the right, you can see me using a Prismatic Compass (uses a magnifying glass) to pass orientation to a 105mm Artillery gun before a direct-fire Fire Mission."
          />
           <Blog 
          theme={theme}
          img='personalImg/train.jpeg'
          blogType={"normal"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before I started working full-time for the Army, I was a part-time Reservist. During this period, my full-time job was a Train Conductor at Canadian National Railway. You can see behind the veil of the Locomotive windshield on the left picture. This is an AWESOME job. I loved it and would reccomend it to anyone. Well, anyone who didn't discover that they really like coding and building things."
          />
        </div>
      </div>
      <div className="finalfill"></div>
    </div>
  )
}