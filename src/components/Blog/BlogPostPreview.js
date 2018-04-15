import React from 'react'
import Link from 'gatsby-link'

const BlogPostPreview = (props) => {
  return (
    <section>
      <span className="image"><img src="images/pic01.jpg" alt="" /></span>
      <h4>{props.node.data.title[0].text}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, lorem in pretium aliquet, lacus dui tristique lacus, vel convallis justo lectus in augue. Tempus pellentesque iaculis imperdiet et elementum.</p>
      <ul className="actions">
        <li>
          <Link to={props.node.slugs[0]} className="button">Read More</Link>
        </li>
      </ul>
    </section>
  )
}

export default BlogPostPreview
