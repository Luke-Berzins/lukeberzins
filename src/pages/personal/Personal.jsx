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
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My coding journey began a little late. I am confident that with enough time I'll do some really cool things, and I hope you continue to check in so I can share them with you. Before I started coding I was a train conductor for Canadian National Railway, a reserve Army Officer and I even climbed a mountain or two. If you want to know more about me, read on.</h2>
        <div className="blog-holder">
          <Blog 
          theme={theme}
          img='personalImg/lake.jpeg'
          blogType={"normal"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most recently, I have been working as a Regional Liaison Officer for the Canadian Armed Forces. I have liaisoned with the Office of the Fire Marshall and Emergency Management and various Public Health units across Ontario. We work together to ensure that all of our various organizations' resources are configured optimally in response to the COVID-19 crisis."
          />
          <Blog 
          theme={theme}
          img='personalImg/arty.jpeg'
          blogType={"reverse"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started working as a Regional Liaison Officer through my experience as an Army Reservist. I have served with the 11th Field Artillery Regiment for three and a half years and had some great experiences. My training qualified me as a Reconnaissance Officer, a Command Post Officer and a Gun Postition Officer. This took place at the Infantry School and Artillery School, under the national Combat-Training-Center in Gagetown, New Brunswick. That's me using a Prismatic Compass (has a built-in magnifying glass) to pass orientation to a 105mm Artillery gun before a direct-fire Fire Mission."
          />
           <Blog 
          theme={theme}
          img='personalImg/train.jpeg'
          blogType={"normal"}
          text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before I started working full-time for the Army I was a part-time Reservist. My full-time job was a Train Conductor for Canadian National Railway. You can see behind the veil of the Locomotive windshield on the left picture. This is an AWESOME job. I loved it and would recommend it to anyone. Well, anyone who hasn't discovered that they really like coding."
          />
        </div>
      </div>
      <div className="finalfill"></div>
    </div>
  )
}