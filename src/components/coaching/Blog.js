import React from "react"
import "../../css/web/Blog.css"
import "../../css/mobile/BlogMobile.css"

const Blog = () => {
  return (
    <div className="content">
      <h1 className="JS">JavaScript</h1>
      <p className="paragraph1">
        JavaScript is a scripting language that is one of the three core
        languages used to develop websites. Whereas HTML and CSS give a website
        structure and style, JavaScript lets you add functionality and behaviors
        to your website, allowing your website’s visitors to interact with
        content in many imaginative ways.
      </p>
      <br></br>
      <p>
        JavaScript is primarily a client-side language, meaning it runs on your
        computer within your browser. However, more recently the introduction of
        Node.js has allowed JavaScript to also execute code on servers.
      </p>
      <br></br>
      <p>
        Since its release, JavaScript has surpassed Java, Flash, and other
        languages because it is relatively easy to learn, has a free and open
        community, and, most importantly, is incredibly useful, allowing
        developers to quickly create apps with audiences in the millions.
      </p>
    </div>
  )
}

export default Blog
