import React from 'react'
import "./Blog.scss"

export default function Blog(props) {
  return (
    <div className={props.theme}>
      <div className={props.blogType}>
        <div className="blogContent">
        <img alt="blog-pic" className="blogPic" src={props.img} className="blog-pic"></img>
        <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}
