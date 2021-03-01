import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default')

  function toggleTheme(input) {
    console.log(input)
      setTheme(prev => input)
      console.log(theme)
  }

  return (
    <ThemeContext.Provider value = {theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
      { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}