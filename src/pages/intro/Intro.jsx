import React from 'react'

import './Intro.scss'

export default function Intro() {
  return (
    <div>
    <div className="header-container">
      <h1>Luke Berzins</h1>
      <br></br>
      <br></br>
    </div>
    <header>

    <div className="parallax-holder">
        
        <img src='/intro/sky.png'  alt="intro-pic" className="sky"></img> 
        <img src='/intro/background.png'  alt="intro-pic" className="background"></img>          
        <img src="/intro/midground.png" alt="intro-pic2" className="midground"></img>      
        <img src="/intro/foreground.png" alt="intro-pic2" className="foreground"></img>   
               
    </div>
    </header>

    
    <section>
    <div className="intro-content"> 
      <div className="intro-text">
          <h3 className="intro-title">Hi!</h3>
          <p>Hello cool dufdesas awhartaalfa; asfsafasfas sadefasf asdfe hqfwqfwa fqfre wqwfqw function gfq gf qwgf( ef) </p>
      </div>

      <div className="intro-pic">
        <img src="/intro/intro.jpeg" alt="intro-pic2" className="intro-picture"></img>  
      </div>
    </div>
      </section>  
    
    </div>
  )
}
