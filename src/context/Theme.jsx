import React, { useContext } from 'react';
import { useTheme, useThemeUpdate } from '../ThemeContext'

export default function Theme(props) {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
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
      <h1 style={themeStyles}>Function Theme</h1>
      <button onClick={toggleTheme}>Hi</button>
      
      </div>
  )
}