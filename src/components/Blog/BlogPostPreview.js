import React from 'react'
import Link from 'gatsby-link'

const BlogPostPreview = (props) => {
  return (
    <section>
      <span className="image"><img src={props.node.frontmatter.excerptImage} alt="" /></span>
      <h4>{props.node.frontmatter.title}</h4>
      <p>{props.node.frontmatter.date}</p>
      <p>{props.node.excerpt}</p>
      <ul className="actions">
        <li>
          <Link to={props.node.fields.slug} className="button">Read More</Link>
        </li>
      </ul>
    </section>
  )
}

export default BlogPostPreview
