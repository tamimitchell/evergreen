import React from 'react'
import Link from 'gatsby-link'

const BlogPostCard = (props) => {
  const post = props.post;
  const imageURL = post.frontmatter.previewImage;

  return (
    <section>
      <Link to={post.fields.slug}>
        <span className="image fit"><img src={imageURL} /></span>
        <header>
          <h4>{post.frontmatter.title}</h4>
          <p><strong>{post.frontmatter.subtitle}</strong></p>
        </header>
      </Link>
    </section>
  )
}

export default BlogPostCard
