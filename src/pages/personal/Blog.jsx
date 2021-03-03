import React from 'react'
import "./Blog.scss"

export default function Blog(props) {
  return (
    <div className={props.theme}>
      <div className={props.blogType}>
        <img alt="blog-pic" src={props.img} className="blog-pic"></img>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
