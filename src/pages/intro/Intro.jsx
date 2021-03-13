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
      
    <div className="parallax-holder">

    <div className="name" >
        <h1>Luke Berzins</h1>
      </div>
        
        <img src='/intro/sky.png'  
        alt="intro-pic" 
        className="sky"
        style={{
          transform: `translateY(${offset * 0.84}px)`
        }}
        ></img> 
        
        <img src='/intro/background.png'  
        alt="intro-pic" 
        className="background" 
        style={{
          transform: `translateY(${offset * 0.85}px)`
        }}
        ></img>          
       
        <img src="/intro/midground.png" 
        alt="intro-pic2" 
        className="midground" 
        style={
          offset < 200 ? 
          {transform: `translateY(${offset * 0.89}px)`}
          : {transform: `translateY(195px)`}
        }
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
      <div className="intro-title" >
        <h1>Enter ></h1>
      </div>

      <div className="intro-pic">
        <img src="/intro/digital.png" alt="intro-pic2" className="intro-picture"></img>  
      </div>
    </div>
      </section>  
    
    </div>
    </div>
  )
}
