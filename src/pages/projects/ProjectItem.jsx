import React from 'react'
import { useTheme, useCatTheme } from '../../ThemeContext'

export default function ProjectItem(props) {
  const theme = useTheme()
  const cat = useCatTheme()
  return (
    <div className="card-container">
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  )
}
