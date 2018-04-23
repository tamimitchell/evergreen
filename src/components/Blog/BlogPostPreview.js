import React from 'react'
import Link from 'gatsby-link'

const BlogPostPreview = (props) => {
  const post = props.post;

  return (
    <section>
      <span className="image"><img src={post.frontmatter.previewImage} /></span>
      <h4>{post.frontmatter.title}</h4>
      <p><strong>{post.frontmatter.subtitle}</strong></p>

      <p>{post.excerpt}</p>
      <ul className="actions">
        <li>
          <Link to={post.fields.slug} className="button">Read More</Link>
        </li>
      </ul>
    </section>
  )
}

export default BlogPostPreview
