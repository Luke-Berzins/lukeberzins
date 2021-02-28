import React, { useContext } from 'react';
import { ThemeContext } from '../App'

export default function Theme(props) {
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem'
  }  

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1 style= {themeStyles}>Function Theme</h1>
      <button onClick={props.toggleTheme}>Hi</button>
      
      </div>
  )
}