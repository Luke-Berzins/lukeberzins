import React, { useEffect, useState } from 'react'

import './Intro.scss'

export default function Intro() {
  const [offset, setOffset] = useState(0);
  

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <div>
    <div className="intro-container">
      <h1>Luke Berzins</h1>
      <br></br>
      <br></br>
    

    <div className="parallax-holder">
        
        <img src='/intro/sky.png'  
        alt="intro-pic" 
        className="sky"
        style={{
          filter: `blur(4px)`,
          transform: `translateY(${offset * 0.5}px)`
        }}
        ></img> 
        
        <img src='/intro/background.png'  
        alt="intro-pic" 
        className="background" 
        style={{
          transform: `translateY(${offset * 0.52}px)`
        }}
        ></img>          
       
        <img src="/intro/midground.png" 
        alt="intro-pic2" 
        className="midground" 
        style={{
          transform: `translateY(${offset * 0.54}px)`
        }}
        ></img>  

        <img src="/intro/foreground.png" 
        alt="intro-pic2" 
        className="foreground"
        ></img>   
               
    </div>
    

    
    <section>
      <div className="shadow">

      </div>
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
    </div>
  )
}
