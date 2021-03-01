import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()
const CatContext = React.createContext()
const CatUpdateContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function useCatTheme() {
  return useContext(CatContext)
}

export function useCatUpdate() {
  return useContext(CatUpdateContext)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default')
  const [cat, setCat] = useState(false)

  function toggleTheme(input) {
      setTheme(prev => input)
  }

  function toggleCat() {
    setCat(prev => !prev)
    const favicon = document.getElementById('favicon')
    document.title === 'Luke Berzins' ? favicon.href  = 'meow.ico' : favicon.href = 'favicon.ico'
    document.title === 'Luke Berzins' ? document.title = 'Meow' : document.title = 'Luke Berzins'
}

  return (
    <ThemeContext.Provider value = {theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <CatContext.Provider value={cat}>
          <CatUpdateContext.Provider value={toggleCat}>
            { children }
          </CatUpdateContext.Provider>
        </CatContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}