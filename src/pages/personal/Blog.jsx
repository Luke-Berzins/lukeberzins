import React from 'react'
import "./Blog.scss"
import { useTheme } from "../../ThemeContext"

export default function Blog(props) {
  const theme = useTheme();

  return (
    <div className={theme}>
      <div className={props.blogType}>
        <div className="blogContent">
        <img alt="blog-pic" src={props.img} className="blog-pic"></img>
        <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}
