import React from 'react'
import Link from 'gatsby-link'
import BlogPostPreview from '../Blog/BlogPostPreview'

const BlogSection = (props) => {
  const content = props.content;
  const posts = props.posts;

  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
          <p>{content.blurb}</p>
        </header>
        <section className="features">
          {posts.map(edge =>
            <BlogPostPreview post={edge.node} />
           )}
        </section>
        <footer className="major">
          <ul className="actions">
            <li><a href="#" className="button">{content.callToAction}</a></li>
          </ul>
        </footer>
      </div>
    </section>
  )
}

export default BlogSection
